<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Survey_model extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();

	}

	public function get_all_questions()
	{
		$this->db->select('*');
		$this->db->from('survey_questions');
		$this->db->where('active', 1);
		$this->db->order_by('group', 'asc');
		$q = $this->db->get();
		$questions = $q->result_array();

		foreach ($questions as $key => $value) {
			$this->db->select('*');
			$this->db->from('survey_answers');
			$this->db->where('survey_question_id', $value['survey_question_id']);
			$q = $this->db->get();
			$questions[$key]['answers'] = $q->result_array();
		}
		return $questions;
	}

	public function get_all_user_answers($user_id)
	{
		$this->db->select('*');
		$this->db->from('user_answers');
		// $this->db->join('survey_questions','survey_questions.survey_question_id = user_answers.survey_question_id');
		$this->db->where('user_answers.user_id',$user_id);
		// $this->db->group_by('survey_questions.survey_question_id');
		$q = $this->db->get();
		return $q->result_array();
		// $this->db->join('table', 'table1.field = table2.field', 'left');
	}

	public function get_last_group_no()
	{
		return	$this->db->select_max('group','last_group_no')->from('survey_questions')->get()->result_array()[0]['last_group_no'];
	}

	public function insert_answer($question_answer)
	{
		return $this->db->insert('user_answers', $question_answer);
	}

}

/* End of file survey_model.php */
 /* Location: ./application/models/survey_model.php */