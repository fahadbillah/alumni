<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Referral extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index($referral_id)
	{
	}

	public function referral_id($referral_id)
	{
		$data['site_url'] = 'http://nsubusinessalumni.org/#/survey/'.$referral_id;
		$this->load->view('redirecting_page', $data);
	}

	public function show_referral($user_id = 0)
	{
		$session_data = $this->session->userdata('user_data');
		$user_id = ((int)$user_id == 0)? $session_data['id'] : $user_id;
		if ($session_data['id'] == $user_id) {
			jsonify(array('success' => true));
		} else {
			jsonify(array('success' => false));
		}
	}

}

/* End of file referral.php */
/* Location: ./application/controllers/referral.php */