<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		jsonify(array('success' => true, 'csrf_test_name' => ($this->input->cookie('XSRF-TOKEN') !== null)?$this->input->cookie('XSRF-TOKEN'): false));
	}

	public function login()
	{
		$post_data = get_post();
		$this->load->model('user_model');
		$result = $this->user_model->login_check($post_data);
		if ($result['success'] === true) {
			$session_data = array(
				'is_logged_in' => true,
				'user_data' => $result['user_data'][0],
				);
			
			$result['user_data'][0]['role'] = ($result['user_data'][0]['role'] == 1) ? 'admin' : 'user'; 

			$this->session->set_userdata($session_data);
			$return_data['id']  = $this->input->cookie('ci_session');
			$return_data['user'] = $result['user_data'][0];
			// $return_data['data'] = $result['user_data'][0];
			// $return_data['success'] = true;
			// $return_data['message'] = 'User login successfully!';
			// $return_data['user_data'] = $result['user_data'];
			// $return_data['redirect_to'] = ($result['user_data'][0]['role'] == true) ? '/admin' : '/profile';


			jsonify($return_data);

		} else {
			$return_data['success'] = false;
			$return_data['message'] = 'User login failed!';

			jsonify($return_data);
		}
		
	}
	
	public function logout()
	{
		$this->session->sess_destroy();

		$returned_data = array(
			'success' => true,
			'message' => 'Logout Successfully!'
			);
		jsonify($returned_data);
	}

}

/* End of file auth.php */
/* Location: ./application/controllers/auth.php */