<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User_model extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}

	public function insert_user($user_data)
	{
		$result = $this->db->insert('users', $user_data);

		return array(
			'success' => $result,
			'last_inserted_data' => ($result)? $this->select_a_user_from_user_table_by_user_id($this->db->insert_id()) : "",
			);
	}

	public function select_a_user_from_user_table_by_user_id($user_id)
	{
		$this->db->select('
			user_id as id,
			first_name,
			last_name,
			email,
			nsu_id,
			about_me,
			phone,
			dob,
			create_date,
			update_date,
			facebook_link,
			twitter_link,
			linkedin_link,
			referral_link,
			profile_pic,
			admin as role,
			referer
			');
		$this->db->from('users');
		$this->db->where('user_id', $user_id);
		$q = $this->db->get();
		$user_data = $q->result_array();

		return $user_data;
	}

	public function get_referral_count($user_id)
	{
		$this->db->where('referer', $user_id);
		$this->db->from('users');
		return $this->db->count_all_results();
	}

	public function get_referer_user_id($referral_link)
	{
		return $this->db->select('user_id')->from('users')->where('referral_link',$referral_link)->get()->result_array()[0]['user_id'];
	}

	public function check_if_nsu_id_already_exists($nsu_id)
	{
		if(count($this->db->select('user_id')->from('users')->where('nsu_id',$nsu_id)->get()->result_array())>0)
			return true;
		else
			return false;
	}

	public function login_check($login_data)
	{
		$this->db->select('
			user_id as id,
			first_name,
			last_name,
			email,
			nsu_id,
			about_me,
			phone,
			dob,
			create_date,
			update_date,
			facebook_link,
			twitter_link,
			linkedin_link,
			referral_link,
			profile_pic,
			admin as role,
			referer
			');
		$this->db->from('users');
		$this->db->where('nsu_id', (int) $login_data['nsu_id']);
		$this->db->where('password', sha1($login_data['password']));
		$q = $this->db->get();
		$result = $q->result_array();

		if (count($result)>0) {
			return array(
				'success' => true,
				'user_data' => $result
				);
		}else{
			return array(
				'success' => false,
				);
		}
	}

	public function get_referral_link($user_id)
	{
		$this->db->select('referral_link');	
		$this->db->from('users');
		$this->db->where('user_id', $user_id);
		$q = $this->db->get();
		return $q->result_array()[0]['referral_link'];
	}

	public function get_all_occupations()
	{
		return $this->db->select('*')->from('work_types')->get()->result_array();
	}
	public function get_all_designations()
	{
		return $this->db->select('*')->from('designations')->get()->result_array();
	}

	public function insert_user_work_history($work)
	{
		$result = $this->db->insert('user_work_histories', $work);

		return array(
			'success' => $result,
			'last_inserted_data' => ($result == true) ? $this->get_user_work_histories(array('id' => $this->db->insert_id())) : '',
			);
	}

	public function get_user_work_histories($id)
	{
		$this->db->select('*');
		$this->db->from('user_work_histories');
		if (isset($id['id'])) {
			$this->db->where('user_work_history_id', $id['id']);
		} else {
			$this->db->where('user_id', $id['user_id']);
		}
		return $this->db->get()->result_array();
	}

	public function get_alumni_list()
	{
		return $this->db->select('user_id,first_name,last_name,nsu_id')->from('users')->get()->result_array();
	}

	public function get_all_referral($user_id)
	{
		$this->db->select('create_date');
		$this->db->from('users');
		$this->db->where('referer', $user_id);
		$q = $this->db->get();
		return $q->result_array();
	}

	public function insert_feedback($data)
	{
		return $this->db->insert('feedbacks', $data);
	}
}

/* End of file user.php */
/* Location: ./application/models/user.php */