<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		
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

/* End of file user.php */
/* Location: ./application/controllers/user.php */