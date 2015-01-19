<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Survey extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Survey_model');
	}

	public function index()
	{
		jsonify(array('csrf_test_name' => $this->input->cookie('XSRF-TOKEN')));
	}

	public function get_all_questions()
	{
		$questions = $this->Survey_model->get_all_questions();
		$return_data['success'] = true;
		$return_data['message'] = 'All questions loaded successfully!';
		$return_data['questions'] = $questions;
		$return_data['last_group_no'] = $this->Survey_model->get_last_group_no();
		jsonify($return_data);
	}

	public function insert_answer()
	{

		$user_id = $this->session->userdata('user_data');
		if (isset($user_id)) {
			$user_id = $this->session->userdata('user_data')['id'];
		} else {
			$return_data = array(
			                     'success' => false,
			                     'message' => 'Please login first!'
			                     );
			jsonify($return_data);
		}

		$post_data = get_post();
		$post_data['user_id'] = $user_id;

		$survey_question_id = null;
		$survey_answer_id = null;
		$other_answer = null;

		$value = $post_data['fieldValue'];
		$type = $post_data['fieldType'];
		$id = explode('_',$post_data['fieldName']);
		$survey_question_id = $id[1];

		switch ($post_data['fieldType']) {
			case 'text':
			case 'textarea':
			$other_answer = $post_data['fieldValue'];
			break;

			case 'radio':
			case 'checkbox':
			$survey_answer_id = $post_data['fieldValue'];
			break;
		}

		$question_answer = array(
		                         'user_id' => $user_id,
		                         'survey_question_id' => $survey_question_id ,
		                         'survey_answer_id' => $survey_answer_id,
		                         'other_answer' => $other_answer,
		                         );


		$result = $this->Survey_model->insert_answer($question_answer);

		if ($result) {	
			$return_data = array(
			                     'success' => true,
			                     'message' => 'Answer submitted successfully!',
			                     'return_data' => array(
			                                            'result' => $result,
			                                            'question_answer' => $question_answer,
			                                            )
			                     );
		} else {
			$return_data = array(
			                     'success' => false,
			                     'message' => 'Answer submit failed!',
			                     'return_data' => array(
			                                            'result' => $result,
			                                            'question_answer' => $question_answer,
			                                            )
			                     );
		}
		jsonify($return_data);
	}

	public function referral($referral_id)
	{
		$site_url = 'http://staging.nsuschoolofbusiness.org/#/survey/'.$referral_id;
		redirect($site_url, 'refresh');
	}


	public function get_all_occupations()
	{
		$this->load->model('User_model');
		$result = $this->User_model->get_all_occupations();

		if (count($result)>0) {
			$return_data['success'] = true;
			$return_data['message'] = 'Work types loaded successfully!';
			$return_data['occupations'] = $result;
		} else {
			$return_data['success'] = false;
			$return_data['message'] = 'Work types load failed!';
		}
		jsonify($return_data);
	}


	public function get_all_designations()
	{
		$this->load->model('User_model');
		$result = $this->User_model->get_all_designations();

		if (count($result)>0) {
			$return_data['success'] = true;
			$return_data['message'] = 'designations loaded successfully!';
			$return_data['designations'] = $result;
		} else {
			$return_data['success'] = false;
			$return_data['message'] = 'designations load failed!';
		}
		jsonify($return_data);
	}
}

/* End of file survey.php */
/* Location: ./application/controllers/survey.php */