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

	public function get_alumni_list()
	{
		$returned_data['list'] = $this->user_model->get_alumni_list();
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
		$result = $this->user_model->get_alumni_list();

		foreach ($result as $key => $value) {
			$points[] = $this->user_point($value['user_id']);
			$result[$key]['total_point'] = $this->user_point($value['user_id']);
		}


		jsonify($points);
		jsonify($result);
	}
}

/* End of file user.php */
/* Location: ./application/controllers/user.php */