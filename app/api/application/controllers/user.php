<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		
	}

	public function get_user_info($user_id)
	{
		$session_data = $this->session->userdata('user_data');
		$user_id = ((int)$user_id == 0)? $session_data[0]['user_id'] : $user_id;

		$this->load->model('user_model');
		$user_data = $this->user_model->select_a_user_from_user_table_by_user_id($user_id);

		$returned_data = array(
			'success' => (count($user_data) == 0)? false:true,
			'message' => 'Logout Successfully!',
			'user_data' => $user_data,
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