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
			user_id,
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
			profile_pic
			');
		$this->db->from('users');
		$this->db->where('user_id', $user_id);
		$q = $this->db->get();
		$user_data = $q->result_array();

		if (count($user_data) > 0) {
			$user_data[0]['total_point'] = $this->get_user_point($user_id);
		}
		return $user_data;

	}

	public function get_user_point($user_id)
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

}

/* End of file user.php */
/* Location: ./application/models/user.php */