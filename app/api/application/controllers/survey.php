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
		$return_data['message'] = 'All message loaded successfully!';
		$return_data['questions'] = $questions;
		jsonify($return_data);
	}

	public function registration()
	{
		vd(get_post());
	}

}

/* End of file survey.php */
/* Location: ./application/controllers/survey.php */