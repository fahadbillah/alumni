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
		$data['site_url'] = 'http://staging.nsuschoolofbusiness.org/#/survey/'.$referral_id;
		$this->load->view('redirecting_page', $data);
	}

}

/* End of file referral.php */
/* Location: ./application/controllers/referral.php */