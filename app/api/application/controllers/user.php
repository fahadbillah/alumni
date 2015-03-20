<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		if($this->session->userdata('is_logged_in') === false){
			$returned_data['success'] = false;
			$returned_data['message'] = 'You are logged out! Please login again.';
			$returned_data['redirect_to'] = '/login';
			$this->output->set_status_header('401');
			jsonify($returned_data);
		}
		$this->load->model('user_model');
	}

	public function index()
	{
		
	}

	public function get_user_info($user_id)
	{
		$session_data = $this->session->userdata('user_data');
		$user_id = ((int)$user_id == 0)? $session_data['id'] : $user_id;

		$user_data = $this->user_model->select_a_user_from_user_table_by_user_id($user_id);
		$user_data[0]['total_point'] = $this->user_point($user_id);
		$returned_data = array(
			'success' => (count($user_data) == 0)? false:true,
			'message' => 'User info loaded successfully!',
			'user_data' => $user_data[0],
			);
		jsonify($returned_data);
	}

	public function get_session_data()
	{
		if ($this->session->userdata('is_logged_in') === true) {
			$session_data = array(
				'is_logged_in' => true,
				'user_data' => $this->session->userdata('user_data'),
				);
		}else{
			$session_data = array(
				'is_logged_in' => false,
				);
		}
		jsonify($session_data);
	}

	public function share_referral()
	{
		$session_data = $this->session->userdata('user_data');
		$user_id = $session_data['id'];
		$result['site_url'] = 'http://nsubusinessalumni.org/api/index.php/referral/referral_id/';
		$result['referral_link'] = $this->user_model->get_referral_link($user_id);
		// pr($result['referral_link']);
		$this->load->view('social_share', $result);

	}

	public function get_alumni_list($limit = 10,$offset = 0)
	{
		// vd($limit);
		// vd($offset);
		$returned_data['list'] = $this->user_model->get_alumni_list($limit,$offset);
		$returned_data['total_count'] = $this->user_model->get_total_alumni_count();
		$returned_data['success'] = true;
		$returned_data['message'] = 'all alumni data loaded';

		jsonify($returned_data);
	}

	public function user_point($user_id)
	{
		$referral_count = $this->user_model->get_referral_count($user_id);
		$result = $this->user_model->get_all_referral($user_id);

		
		$count_by_date = 0;
		$a_date = '';
		$returned_data['bonus_point'] = 0;
		foreach ($result as $key => $value) {
			$date = explode(' ', $value['create_date']);

			if ($date[0] != $a_date) {
				$count_by_date = 1;
				$a_date = $date[0];
			}else{
				$count_by_date++;
			}

			if ($count_by_date >= 10) {
				$returned_data['bonus_point'] += 100;
				$count_by_date = 0;
			}
		}
		$returned_data['referral_point'] = $referral_count * 10;
		$returned_data['total'] = $returned_data['referral_point'] + $returned_data['bonus_point'];
		return $returned_data['total'];
	}

	public function top_referer()
	{

		$result = $this->user_model->get_alumni_list($this->db->count_all('users'),0);

		foreach ($result as $key => $value) {
			// $points[] = $this->user_point($value['user_id']);
			$result[$key]['total_point'] = $this->user_point($value['user_id']);
		}


		// jsonify($points);
		jsonify($result);
	}

	public function get_all_feedbacks($limit = 10,$offset = 0)
	{
		$result['filtered'] = $this->user_model->get_all_feedbacks($limit,$offset);
		$result['all_count'] = $this->user_model->get_table_rows_count('feedbacks');

		jsonify($result);
	}

	public function upload_profile_picture()
	{
		// echo "wow";


		if (!is_dir('./uploads/profile_pictures')) {
			if(mkdir('./uploads/profile_pictures', 0755, true) !== true){
				jsonify(array(
					'success' => false, 
					'message' => array(
						'title' => 'Cannot create profile_pictures folder in server!', 
						'body' => '', 
						),
					'action' => array(
						'actionName' => 'server_fail', 
						),
					));
				exit();
			}
		}


		$config['upload_path'] = './uploads/profile_pictures';
		$config['allowed_types'] = 'gif|jpg|png';
		$config['max_size']  = '1000';
		$config['max_width']  = '1024';
		$config['max_height']  = '768';
		$config['encrypt_name']  = true;

		$this->load->library('upload', $config);

		if ( ! $this->upload->do_upload('upload')){
			$error = array('success' => false,'error' => $this->upload->display_errors());
			echo json_encode($error);
		}
		else{
			$user = array('profile_pic' => $this->upload->data()['file_name']);
			$this->db->where('user_id', $this->session->all_userdata()['user_data']['id']);
			$this->db->update('users', $user);

			$config['image_library'] = 'gd2';
			$config['source_image']	= './uploads/profile_pictures/'.$this->upload->data()['file_name'];
			$config['new_image']	= './uploads/profile_pictures/thumbnails/'.$this->upload->data()['file_name'];
			$config['create_thumb'] = TRUE;
			$config['thumb_marker'] = '';
			$config['maintain_ratio'] = TRUE;
			$config['width']	= 50;
			$config['height']	= 50;

			$this->load->library('image_lib', $config); 

			$this->image_lib->resize();

			$data = array('success' => true,'upload_data' => $this->upload->data());
			echo json_encode($data);
		}
	}

	public function admin_message_save()
	{
		$post_data = get_post();
		$this->load->dbforge();

		$fields = array(
			'admin_message_id' => array(
				'type' => 'INT',
				'constraint' => 5, 
				'unsigned' => TRUE,
				'auto_increment' => TRUE
				),
			'subject' => array(
				'type' => 'VARCHAR',
				'constraint' => '100',
				),
			'html_message' => array(
				'type' =>'TEXT',
				),
			'create_date' => array(
				'type' => 'TIMESTAMP',
				),
			);
		$this->dbforge->add_field($fields);
		$this->dbforge->add_key('admin_message_id', TRUE);
		$this->dbforge->create_table('admin_message', TRUE);

		$object = array('subject' => $post_data['subject'], 'html_message' =>$post_data['message'] );
		if (trim($post_data['message_id'] === '')) {
			$this->db->insert('admin_message', $object);
			$last_message = $this->db->insert_id();

			$returned_data = array(
				'success' => true,
				'message' => 'Message Saved',
				'redirect_to' => $last_message
				);
		} else {
			$this->db->where('admin_message_id', $post_data['message_id']);
			$this->db->update('admin_message', $object);

			$returned_data = array(
				'success' => true,
				'message' => 'Message Saved',
				);
		}

		jsonify($returned_data);
	}

	public function get_admin_message($message_id)
	{
		$this->db->where('admin_message_id', $message_id);
		$q = $this->db->get('admin_message');
		jsonify($q->result_array());
	}
}

/* offset of file user.php */
/* Location: ./application/controllers/user.php */