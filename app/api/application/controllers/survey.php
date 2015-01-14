<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Survey extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		jsonify(array('success' => true, 'csrf_test_name' => $this->input->cookie('XSRF-TOKEN')));
	}

	public function get_all_questions()
	{
		$this->load->model('Survey_model');
		$questions = $this->Survey_model->get_all_questions();
		$return_data['success'] = true;
		$return_data['message'] = 'All questions loaded successfully!';
		$return_data['questions'] = $questions;
		jsonify($return_data);
	}

	public function registration()
	{
		$post_data = get_post();
		$post_data['password'] = sha1(generate_random_string(8));
		$post_data['token'] = generate_random_string(40);
		$post_data['referral_link'] = generate_random_string(10);

		if(in_array('', $post_data)){
			$return_data['success'] = false;
			$return_data['message'] = 'Blank field. Please fill the form properly.';
			jsonify($return_data);
		}
		$this->load->model('User_model');

		if ($this->User_model->check_if_nsu_id_already_exists($post_data['nsu_id'])) {
			$return_data['success'] = false;
			$return_data['message'] = 'This NSU ID already exist. Please login.';
			jsonify($return_data);
		}

		$post_data['referer'] = ($post_data['referer'] =='not available') ? null : $this->User_model->get_referer_user_id($post_data['referer']);

		$result = $this->User_model->insert_user($post_data);

		if ($result['success'] === true) {
			$return_data['success'] = true;
			$return_data['message'] = 'User registration successfull!';
			$return_data['user_info'] = $result['last_inserted_data'];
		}
		jsonify($return_data);
	}

}

/* End of file survey.php */
/* Location: ./application/controllers/survey.php */