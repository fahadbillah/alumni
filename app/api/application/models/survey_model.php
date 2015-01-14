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

}

/* End of file survey_model.php */
 /* Location: ./application/models/survey_model.php */