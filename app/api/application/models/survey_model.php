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
 		$this->db->join('survey_answers', 'survey_answers.survey_question_id = survey_questions.survey_question_id', 'left');
 		$this->db->where('active', 1);
 		$q = $this->db->get();
 		return $q->result_array();
 	}
 
 }
 
 /* End of file survey_model.php */
 /* Location: ./application/models/survey_model.php */