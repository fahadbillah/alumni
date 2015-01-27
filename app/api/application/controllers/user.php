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
		$result['site_url'] = 'http://staging.nsuschoolofbusiness.org/api/index.php/referral/referral_id/';
		$result['referral_link'] = $this->user_model->get_referral_link($user_id);

		$this->load->view('social_share', $result);

	}

	public function get_alumni_list()
	{
		$returned_data['list'] = $this->user_model->get_alumni_list();
		$returned_data['success'] = true;
		$returned_data['message'] = 'all alumni data loaded';

		jsonify($returned_data);
	}
}

/* End of file user.php */
/* Location: ./application/controllers/user.php */