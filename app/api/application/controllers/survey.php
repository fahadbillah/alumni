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

	public function get_all_user_answers()
	{
		$user_id = $this->get_user_id_from_session();
		
		$questions = $this->Survey_model->get_all_questions();
		$answers = $this->Survey_model->get_all_user_answers($user_id);

		$user_question_answers = array();

		$survey_answer_id = '';
		$other_answer = '';

		foreach ($questions as $key => $value) {
			// echo "questions";
			foreach ($answers as $k => $v) {
				if ($value['survey_question_id'] == $v['survey_question_id']) {
					$survey_answer_id = $v['survey_answer_id'];
					$other_answer = $v['other_answer'];
				}
			}
			$user_question_answers[$value['survey_question_id']][] = array(
			                                                               'survey_answer_id' => $survey_answer_id,
			                                                               'other_answer' => $other_answer,
			                                                               );
			$survey_answer_id = '';
			$other_answer = '';
		}
		// pr($user_question_answers);
		jsonify($user_question_answers);
	}

	public function insert_answer()
	{
		$user_id = $this->get_user_id_from_session();

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
		$site_url = 'http://nsubusinessalumni.org/#/survey/'.$referral_id;
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

	public function personalInfo()
	{
		$post_data = get_post();
		$prepared_data = [];

		$user_id = $this->get_user_id_from_session();
		
		foreach ($post_data as $key => $value) {

			$string = substr($key, stripos($key, '[')+1);
			$string = substr($string, 0, stripos($string, ']'));


			$temp['user_id'] = $user_id;
			$temp['question_name'] = $string;
			$temp['question_answer'] = $value;

			array_push($prepared_data, $temp);
		}


		// pr($prepared_data);
		// exit();
		$result = $this->Survey_model->insert_batch_answer($prepared_data);

		if ($result) {
			$return_data['success'] = true;
			$return_data['message'] = 'Personal info submitted successfully!';
		} else {
			$return_data['success'] = false;
			$return_data['message'] = 'Personal info submition failed!';
		}
		jsonify($return_data);
		

	}

	public function after_graduation_info()
	{

		$post_data = get_post();
		$prepared_data = [];

		$user_id = $this->get_user_id_from_session();
		
		foreach ($post_data as $key => $value) {

			$string = substr($key, stripos($key, '[')+1);
			$string = substr($string, 0, stripos($string, ']'));


			$temp['user_id'] = $user_id;
			$temp['question_name'] = $string;
			$temp['question_answer'] = $value;

			array_push($prepared_data, $temp);
		}


		// pr($prepared_data);
		// exit();
		$result = $this->Survey_model->insert_batch_answer($prepared_data);

		if ($result) {
			$return_data['success'] = true;
			$return_data['message'] = 'Answer submitted successfully!';
		} else {
			$return_data['success'] = false;
			$return_data['message'] = 'Answer submition failed!';
		}
		jsonify($return_data);
		
	}

	public function after_graduation_info_part_2()
	{

		$post_data = get_post();
		$prepared_data = [];

		$user_id = $this->get_user_id_from_session();

		foreach ($post_data as $key => $value) {

			$string = substr($key, stripos($key, '[')+1);
			$string = substr($string, 0, stripos($string, ']'));


			$temp['user_id'] = $user_id;
			$temp['question_name'] = $string;
			$temp['question_answer'] = $value;

			array_push($prepared_data, $temp);
		}


		// pr($prepared_data);
		// exit();
		$result = $this->Survey_model->insert_batch_answer($prepared_data);

		if ($result) {
			$return_data['success'] = true;
			$return_data['message'] = 'Answer submitted successfully!';
		} else {
			$return_data['success'] = false;
			$return_data['message'] = 'Answer submition failed!';
		}
		jsonify($return_data);
		
	}

	public function next_form()
	{
		$all_forms = ['personalInfoCompleted','afterGraduationInfoCompleted','LAG2Completed','eExpCompleted','commentCompleted'];
		$this->db->select('question_name');
		$this->db->from('user_survey_answers');
		$this->db->where_in($all_forms);
		$this->db->where('user_id',$this->get_user_id_from_session());
		$q = $this->db->get();
		$result = $q->result_array();

		$personal = true;
		$after_graduation_part_1 = true;
		$after_graduation_part_2 = true;
		$educational_experience = true;
		$comment = true;

		foreach ($result as $key => $value) {


			if ($value['question_name'] == 'personalInfoCompleted') {
				$personal = false;
			}

			if ($value['question_name'] == 'afterGraduationInfoCompleted') {
				$after_graduation_part_1 = false;
			}

			if ($value['question_name'] == 'LAG2Completed') {
				$after_graduation_part_2 = false;
			}

			if ($value['question_name'] == 'eExpCompleted') {
				$educational_experience = false;
			}

			if ($value['question_name'] == 'commentCompleted') {
				$comment = false;
			}

		}

		if ($personal) {
			echo "personal";
			exit();
		}
		if ($after_graduation_part_1) {
			echo "after_graduation_part_1";
			exit();
		}
		if ($after_graduation_part_2) {
			echo "after_graduation_part_2";
			exit();
		}
		if ($educational_experience) {
			echo "educational_experience";
			exit();
		}
		if ($comment) {
			echo "comment";
			exit();
		}

		echo "all_completed";
		exit();
	}


	public function survey_completion_level($id)
	{
		$all_forms = ['personalInfoCompleted','afterGraduationInfoCompleted','LAG2Completed','eExpCompleted','commentCompleted'];
		$this->db->select('*');
		$this->db->from('user_survey_answers');
		$this->db->where_in($all_forms);
		$this->db->where('user_id',$id);
		$q = $this->db->get();
		$result = $q->result_array();
		$count = 0;

		foreach ($result as $key => $value) {


			if ($value['question_name'] == 'personalInfoCompleted' && $count < 2) {
				$count = 1;
			}

			if ($value['question_name'] == 'afterGraduationInfoCompleted' && $count < 3) {
				$count = 2;
			}

			if ($value['question_name'] == 'LAG2Completed' && $count < 4) {
				$count = 3;
			}

			if ($value['question_name'] == 'eExpCompleted' && $count < 5) {
				$count = 4;
			}

			if ($value['question_name'] == 'commentCompleted' && $count < 6) {
				$count = 5;
			}

		}
		return $count;
	}

	public function get_user_id_from_session()
	{
		$user_id = $this->session->userdata('user_data');
		if ($user_id != '') {
			$user_id = $this->session->userdata('user_data')['id'];
		} else {
			$return_data = array(
			                     'success' => false,
			                     'message' => 'Please login first!'
			                     );
			jsonify($return_data);
		}
		return $user_id;
	}

	public function test()
	{

		exit();
		$all_forms = ['personalInfoCompleted','afterGraduationInfoCompleted','LAG2Completed','eExpCompleted','commentCompleted'];
		$this->db->select('question_name');
		$this->db->from('user_survey_answers');
		$this->db->where_in($all_forms);
		$this->db->where('user_id',$this->get_user_id_from_session());
		$q = $this->db->get();
		$result = $q->result_array();
		pr($result);

		$personal = true;
		$after_graduation_part_1 = true;
		$after_graduation_part_2 = true;
		$educational_experience = true;
		$comment = true;

		vd(in_array('personalInfoCompleted', $result));
		vd(in_array('afterGraduationInfoCompleted', $result));
		vd(in_array('LAG2Completed', $result));
		vd(in_array('eExpCompleted', $result));
		vd(in_array('commentCompleted', $result));

		foreach ($result as $key => $value) {


			if ($value['question_name'] == 'personalInfoCompleted') {
				$personal = false;
			}

			if ($value['question_name'] == 'afterGraduationInfoCompleted') {
				$after_graduation_part_1 = false;
			}

			if ($value['question_name'] == 'LAG2Completed') {
				$after_graduation_part_2 = false;
			}

			if ($value['question_name'] == 'eExpCompleted') {
				$educational_experience = false;
			}

			if ($value['question_name'] == 'commentCompleted') {
				$comment = false;
			}

		}

		if ($personal) {
			echo "personal";
			exit();
		}
		if ($after_graduation_part_1) {
			echo "after_graduation_part_1";
			exit();
		}
		if ($after_graduation_part_2) {
			echo "after_graduation_part_2";
			exit();
		}
		if ($educational_experience) {
			echo "educational_experience";
			exit();
		}
		if ($comment) {
			echo "comment";
			exit();
		}
	}

	public function get_all_user_survey()
	{
		if ($this->session->userdata('is_logged_in') == false || $this->session->userdata('user_data')['role'] != 'admin') {
			jsonify(array(
			        'success' => false, 
			        'message' => 'Please login to see details'
			        ));
		}
		$result = $this->Survey_model->get_all_user_survey();

		if (count($result) === 0) {

			jsonify(array(
			        'success' => false, 
			        'message' => 'No data available!'
			        ));
		}

		$this->load->model('User_model');

		jsonify(array(
		        'success' => true, 
		        'data' => $result,
		        'totalAlumni' => $this->User_model->get_total_alumni_count(),
		        ));

	}

	public function get_survey_completion_stat()
	{

		$allAlumni = $this->db->select('user_id')->get('users')->result_array();
		$completion_level_by_user_count = array(
		                                        'personalInfo' => 0,
		                                        'lag1' => 0,
		                                        'lag2' => 0,
		                                        'exp' => 0,
		                                        'comment' => 0,
		                                        );
		foreach ($allAlumni as $key => $value) {
			
			switch ($this->survey_completion_level($value['user_id'])) {
				case 1:
				$completion_level_by_user_count['personalInfo']++;
				break;
				case 2:
				$completion_level_by_user_count['lag1']++;
				break;
				case 3:
				$completion_level_by_user_count['lag2']++;
				break;
				case 4:
				$completion_level_by_user_count['exp']++;
				break;
				case 5:
				$completion_level_by_user_count['comment']++;
				break;
			}
		}

		$this->load->model('User_model');

		jsonify(array(
		        'success' => true, 
		        'completionStatistics' => $completion_level_by_user_count,
		        ));
	}

	public function completed_type()
	{


		$this->db->select('user_id');
		$this->db->from('users');
		$q = $this->db->get();
		$user_id = $q->result_array();
		$partial = 0;
		$full = 0;

		foreach ($user_id as $key => $value) {
			$all_forms = ['personalInfoCompleted','afterGraduationInfoCompleted','LAG2Completed','eExpCompleted','commentCompleted'];
			$this->db->select('user_id,question_name');
			$this->db->from('user_survey_answers');
			$this->db->where('user_id',$value['user_id']);
			$this->db->where_in('question_name', $all_forms);
			// $this->db->distinct();
			// $this->db->group_by('user_id');
			$q = $this->db->get();
			$result = $q->result_array();

			// echo count($result);
			// echo "<br>";

			if (count($result) == 5) {
				$full++;
			} else {
				$partial++;
			}
		}

		


		jsonify(array(
		        'full' => $full, 
		        'partial' => $partial,
		        ));
	}
}

/* End of file survey.php */
/* Location: ./application/controllers/survey.php */