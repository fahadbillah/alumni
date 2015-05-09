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

	public function total_alumni_count()
	{
		$returned_data['totalAlumni'] = $this->user_model->get_total_alumni_count();

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

	public function update_recepient_list($data)
	{
		if ($data['message_id'] == '') {
			return false;
		}
		$current_all_recepients = array();
		$this->db->select('user_id');
		$this->db->where('admin_message_id', $data['message_id']);
		$q = $this->db->get('broadcast_message');
		foreach ($q->result_array() as $key => $value) {
			array_push($current_all_recepients, $value['user_id']);
		}

		$new_recepients = $data['recepients'];

		foreach ($data['recepients'] as $key => $value) {
			$this->db->where('user_id', $value);
			$this->db->where('admin_message_id', $data['message_id']);
			if($this->db->count_all_results('broadcast_message') == 0){
				$object = array('user_id' => $value,
				                'admin_message_id' => $data['message_id'],
				                'message_sent' => 'not_sent',
				                );
				$this->db->insert('broadcast_message', $object);
				unset($new_recepients[$key]);
			}else{

			}
		}

		$delete = array_diff ( $current_all_recepients, $new_recepients);

		if (count($delete)>0) {
			$this->db->where_in('user_id', $delete);
			$this->db->delete('broadcast_message');
		}
	}

	public function admin_message_save()
	{
		$post_data = get_post();
		// pr(json_decode($post_data['recepients']));

		if (!$this->db->table_exists('admin_message') || !$this->db->table_exists('broadcast_message')) {
			$this->load->dbforge();
			$this->create_admin_message_table();
			$this->broadcast_list();
		}

		$post_data['recepients'] = json_decode($post_data['recepients']);
		$this->update_recepient_list($post_data);



		$object = array('subject' => $post_data['subject'], 'html_message' =>$post_data['message'] );

		if (trim($post_data['message_id'] === '')) {

			$last_message = $this->user_model->insert_admin_message($object); 

			$returned_data = array('success' => true,
			                       'message' => 'Message Saved',
			                       'redirect_to' => $last_message
			                       );
		} else {

			$this->user_model->update_admin_message($post_data['message_id'],$object); 
			$returned_data = array('success' => true,
			                       'message' => 'Message Saved',
			                       );
		}

		jsonify($returned_data);
	}

	public function get_admin_message($message_id)
	{
		jsonify($this->user_model->get_admin_message($message_id));
	}


	public function get_all_broadcast_message($limit = 10,$offset = 0)
	{
		jsonify(array(
		        'list' => $this->user_model->get_all_broadcast_message($limit,$offset),
		        'count' => $this->user_model->get_all_broadcast_message_count(),
		        ));
	}

	public function create_admin_message_table()
	{
		$fields = array('admin_message_id' => array(
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
	}

	public function broadcast_list()
	{
		$fields = array('broadcast_message_id' => array(
		                'type' => 'INT',
		                'constraint' => 11, 
		                'unsigned' => TRUE,
		                'auto_increment' => TRUE
		                ),
		'user_id' => array('type' => 'INT',
		                   'constraint' => 11, 
		                   ),
		'admin_message_id' => array('type' => 'INT',
		                            'constraint' => 11, 
		                            ),
		'message_sent' => array('type' => 'VARCHAR',
		                        'constraint' => 20, 
		                        ),
		'create_date' => array('type' => 'TIMESTAMP',
		                       ),
		);
		$this->dbforge->add_field($fields);
		$this->dbforge->add_key('broadcast_message_id', TRUE);
		$this->dbforge->create_table('broadcast_message', TRUE);
	}

	public function get_all_broadcast_user_list($message_id)
	{
		$this->db->select('users.user_id,
		                  users.nsu_id,
		                  users.first_name,
		                  users.last_name,
		                  users.profile_pic,
		                  broadcast_message.broadcast_message_id,
		                  broadcast_message.admin_message_id,
		                  broadcast_message.message_sent
		                  ');
		$this->db->from('broadcast_message');
		$this->db->join('users', 'users.user_id = broadcast_message.user_id');
		$this->db->where('broadcast_message.admin_message_id', $message_id);
		$q = $this->db->get();
		$details = $q->result_array();

		$this->db->where('admin_message_id', $message_id);
		$q = $this->db->get('broadcast_message');
		$temp_list = $q->result_array();

		$list = array();

		foreach ($temp_list as $key => $value) {
			array_push($list, $value['user_id']);
		}

		$result = array('details' => $details,
		                'list' => $list,
		                );
		jsonify($result);
	}

	public function broadcast($message_id = '')
	{

		if ($this->session->userdata('user_data')['role'] != 'admin') {
			$result = array('success' => false,
			                'message' => 'You are not allowed to send email! Only admins allowed.',
			                );
			jsonify($result);
		}

		if ($message_id == '') {
			$result = array('success' => false,
			                'message' => 'Select a message',
			                );
			jsonify($result);
		}


		// vd($this->session->all_userdata());
		// exit();

		$this->db->select('*');
		$this->db->from('broadcast_message');
		$this->db->join('users', 'broadcast_message.user_id = users.user_id');
		$this->db->join('admin_message', 'admin_message.admin_message_id = broadcast_message.admin_message_id');
		$this->db->where('admin_message.admin_message_id', $message_id);
		$this->db->where('broadcast_message.message_sent', 'not_sent');
		$this->db->limit(1);
		$q = $this->db->get();
		$result = $q->result_array();

		// pr($result);
		// exit();

		if (count($result) == 0) {
			$result = array('success' => true,
			                'message' => 'All Message Sent Successfully!',
			                );
			jsonify($result);
		}




		$config = Array(
		                'protocol' => 'smtp',
		                'smtp_host' => 'mail.nsubusinessalumni.org',
		                'smtp_port' => 26,
		                'smtp_timeout' =>'7',
		                'charset' => 'utf-8',
		                'newline' => "\r\n",
		                'smtp_user' => 'no-reply@nsubusinessalumni.org', 
		                'smtp_pass' => '.@ZJRn~yo6TC', 
		                'mailtype' => 'html',
		                'validation' => TRUE,
		                'wordwrap' => TRUE
		                );

		$this->load->library('email',$config);

		$this->email->from('alumni.association@nsubusinessalumni.org', 'NSU Business Alumni');
		$this->email->to($result[0]['email']);
		// $this->email->to('fahadbillah@yahoo.com');
			// $this->email->cc('another@example.com');
			// $this->email->bcc('and@another.com');
		$this->email->subject($result[0]['subject']);
		$this->email->message($result[0]['html_message']);

		$email_result = $this->email->send();


		if ($email_result == true) {
			$object = array(
			                'message_sent' => 'sent',
			                );
			$this->db->where('broadcast_message_id', $result[0]['broadcast_message_id']);
			$this->db->update('broadcast_message', $object);
			$return_data['success'] = $email_result;
			$return_data['message'] = 'Email Sent';
		}else{
			$return_data['success'] = false;
			$return_data['message'] = 'Email Send failed';
		}

		$return_data['email'] = $this->email->print_debugger();

		jsonify($return_data);
		

	}
}

/* offset of file user.php */
/* Location: ./application/controllers/user.php */