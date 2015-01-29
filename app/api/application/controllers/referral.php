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

	public function send_referral_email($email='')
	{
		if ($email === '') {
			jsonify(array('success' => false));
		}


		$session_data = $this->session->userdata('user_data');
		$user_id = $session_data['id'];

		$this->load->model('User_model');

		$referer = $this->User_model->select_a_user_from_user_table_by_user_id($user_id);


		$config = Array(
		                'protocol' => 'smtp',
		                'smtp_host' => 'mail.nsubusinessalumni.org',
		                'smtp_port' => 26,
		                'smtp_timeout' =>'7',
		                'charset' => 'utf-8',
		                'newline' => "\r\n",
		                'smtp_user' => 'no-reply@nsubusinessalumni.org', 
		                'smtp_pass' => '.@ZJRn~yo6TC', 
		                'mailtype' => 'html',
		                'validation' => TRUE,
		                'wordwrap' => TRUE
		                );

		$this->load->library('email',$config);

		$this->email->from('no-reply@nsubusinessalumni.org', 'NSU Business Alumni');
		$this->email->to(urldecode($email));
		$html = '';
		$html .= 'You are invited to NSU alumnus by <strong>'.$referer[0]['first_name'].' '.$referer[0]['last_name'].'</strong><br>';
		$html .= 'NSU ID: <strong>'.$referer[0]['nsu_id'].'</strong><br>';
		$html .= 'URL: <a href="http://nsubusinessalumni.org/#/survey/'.$referer[0]['referral_link'].'">NSU Business Alumni</a><br>';
		$this->email->subject('Invitation to NSU Business Alumni');
		$this->email->message($html);

		$this->email->send();
		$return_data['success'] = true;
		jsonify($return_data);
	}

}

/* End of file referral.php */
/* Location: ./application/controllers/referral.php */