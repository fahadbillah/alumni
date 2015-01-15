<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Survey extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Survey_model');
	}

	public function index()
	{
		jsonify(array('success' => true, 'csrf_test_name' => $this->input->cookie('XSRF-TOKEN')));
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

			$session_data = array(
			                      'is_logged_in' => true,
			                      'user_data' => $result['last_inserted_data']
			                      );
			
			$this->session->set_userdata( $session_data );

			$return_data['success'] = true;
			$return_data['message'] = 'User registration successfull!';
			$return_data['user_info'] = $result['last_inserted_data'];
		}
		jsonify($return_data);
	}

	public function insert_answer()
	{

		$user_id = $this->session->userdata('user_data');
		if (isset($user_id)) {
			$user_id = $this->session->userdata('user_data')[0]['user_id'];
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

}

/* End of file survey.php */
/* Location: ./application/controllers/survey.php */