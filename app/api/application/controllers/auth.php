<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		jsonify(array('success' => true,'csrf_test_name' => ($this->input->cookie('XSRF-TOKEN') !== null)?$this->input->cookie('XSRF-TOKEN'): false));
	}

	public function login()
	{
		$post_data = get_post();
		$this->load->model('user_model');
		$result = $this->user_model->login_check($post_data);
		if ($result['success'] === true) {
			$result['user_data'][0]['role'] = ($result['user_data'][0]['role'] == 1) ? 'admin' : 'user'; 
			$session_data = array(
			                      'is_logged_in' => true,
			                      'user_data' => $result['user_data'][0],
			                      );
			$this->session->set_userdata($session_data);
			$return_data['success'] = true;
			$return_data['message'] = 'User login successfull!';
			$return_data['user'] = $this->session->userdata('user_data');
			jsonify($return_data);
		} else {
			$return_data['success'] = false;
			$return_data['message'] = 'User login failed!';

			jsonify($return_data);
		}	
	}


	public function registration()
	{
		$post_data = get_post();
		// pr($post_data);
		// exit();
		$password = generate_random_string(8);
		$post_data['password'] = sha1($password);
		// $post_data['password'] = sha1(generate_random_string(8));
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

		/*$post_data['work_type'] = ($post_data['work_type'] =='not available') ? $post_data['other_work_type'] : $post_data['work_type'];

		$post_data['designation'] = ($post_data['designation'] =='not available') ? $post_data['other_designation'] : $post_data['designation'];

		$work['type'] = $post_data['work_type'];
		$work['designation'] = $post_data['designation'];
		unset($post_data['work_type']);
		unset($post_data['other_work_type']);
		unset($post_data['designation']);
		unset($post_data['other_designation']);*/

		$result = $this->User_model->insert_user($post_data);

		$this->load->library('mailchimp_library');
		$this->mailchimp_library->call('lists/subscribe', array(
		                               'id'                => '550b6fd5cf',
		                               'email'             => array('email'=>$post_data['email']),
		                               'merge_vars'        => array('FNAME'=>$post_data['first_name'], 'LNAME'=>$post_data['last_name']),
		                               'double_optin'      => false,
		                               'update_existing'   => true,
		                               'replace_interests' => false,
		                               'send_welcome'      => false,
		                               ));

		if ($result['success'] === true) {

			$result['last_inserted_data'][0]['role'] = ($result['last_inserted_data'][0]['role'] == 1) ? 'admin' : 'user'; 


			$session_data = array(
			                      'is_logged_in' => true,
			                      'user_data' => $result['last_inserted_data'][0]
			                      );
			// $work['user_id'] =  $result['last_inserted_data'][0]['id'];

			// $work_result = $this->User_model->insert_user_work_history($work);

			// pr($post_data);
			// pr($work);
			// pr($result);
			// pr($work_result);
			// exit();
			$this->session->set_userdata( $session_data );


			

			// $config = Array(
			// 	'protocol' => 'smtp',
			// 	'smtp_host' => 'mail.nsubusinessalumni.org',
			// 	'smtp_port' => 26,
			// 	'smtp_timeout' =>'7',
			// 	'charset' => 'utf-8',
			// 	'newline' => "\r\n",
			// 	'smtp_user' => 'no-reply@nsubusinessalumni.org', 
			// 	'smtp_pass' => '.@ZJRn~yo6TC', 
			// 	'mailtype' => 'html',
			// 	'wordwrap' => TRUE
			// 	);

			// $this->load->library('email',$config);

			// $this->email->from('no-reply@nsubusinessalumni.org', 'NSU Business Alumni');
			// $this->email->to($post_data['email']);
			// // $this->email->cc('another@example.com');
			// // $this->email->bcc('and@another.com');
			// $html = '';
			// $html .= 'NSU ID: <strong>'.$post_data['nsu_id'].'</strong><br>';
			// $html .= 'Password: <strong>'.$password.'</strong><br>';
			// $html .= 'URL: <a href="http://nsubusinessalumni.org/#/login">NSU Business Alumni</a><br>';
			// $this->email->subject('Login informaiton for www.nsubusinessalumni.org');
			// $this->email->message($html);

			// $this->email->send();

			

			error_reporting(0);
			$msg = array(
			             "html" => "",
			             "text" => null,
			             "from_email" => "no-reply@nsubusinessalumni.org",
			             "from_name" => "NSU Business Alumni",
			             "subject" => "Login informaiton for www.nsubusinessalumni.org",
			             "to" => array(array("email" => $post_data['email'])),
			             "track_opens" => true,
			             "track_clicks" => true,
			             "auto_text" => true
			             );


			$msg['html'] .= 'NSU ID: <strong>'.$post_data['nsu_id'].'</strong><br>';
			$msg['html'] .= 'Password: <strong>'.$password.'</strong><br>';
			$msg['html'] .= 'URL: <a href="http://nsubusinessalumni.org/#/login">NSU Business Alumni</a><br>';

			$this->load->library('Mandrill', array("Ux-hKu4KpAS6w0EOJUkg5g"));
			$mandrill = $this->mandrill->messages->send($msg, true);
		// $this->email->send()
		// if ($mandrill[0]['status'] == 'sent') {

			$return_data['success'] = true;
			$return_data['message'] = 'User registration successfull!';
			$return_data['user'] = $result['last_inserted_data'][0];
			// $return_data['user_work_info'] = $work_result['last_inserted_data'][0];
			$return_data['email'] = $mandrill;

			jsonify($return_data);
		}
		else{
			$return_data['success'] = false;
			$return_data['message'] = 'User registration failed!';
			jsonify($return_data);
		}
	}

	

	public function check_if_logged_in()
	{

		$visitor['visitor_ip'] = $this->input->ip_address();

		$this->db->insert('visitors', $visitor);
		$returned_data['visitor_count'] = $this->db->insert_id();


		if ($this->session->userdata('is_logged_in') !== false) {
			$returned_data['success'] = true;
			$returned_data['message'] = 'You are logged in!';
			$returned_data['user'] = $this->session->userdata('user_data');
			jsonify($returned_data);
		}else{
			$returned_data['success'] = false;
			$returned_data['message'] = 'You are not logged in!';
			jsonify($returned_data);
		}
	}


	public function logout()
	{
		$this->session->sess_destroy();
		$returned_data = array(
		                       'success' => true,
		                       'message' => 'Logout Successfully!'
		                       );
		jsonify($returned_data);
	}

	public function test()
	{
		pr($this->db->query(
		   'SELECT `items`.`item_name`, 
		   SUM(`buys`.`buy_amount`) as `buy`, 
		   SUM(`sells`.`sell_amount`) as `sell` 
		   FROM `items` 
		   JOIN `buys` ON (`items`.`item_id` = `buys`.`item_id`) 
		   JOIN `sells` ON (`items`.`item_id` = `sells`.`item_id`) 
		   GROUP BY items.item_id, items.item_name'
		   )->result_array());

		// $this->db->select('
		//                   items.item_id,
		//                   items.item_name,
		//                   SUM(buys.buy_amount) as total_buy,
		//                   buys.buy_rate,
		//                   SUM(sells.sell_amount) as total_sell,
		//                   sells.sell_rate,
		//                   ');
		// $this->db->from('items');
		// $this->db->join('buys', 'buys.item_id = items.item_id', 'left');
		// $this->db->join('sells', 'sells.item_id = items.item_id', 'left');

		// $this->db->group_by('items.item_id');

		// pr($this->db->get()->result_array());
		vd($this->db->last_query());
		exit();
		error_reporting(0);
		$msg = array(
		             "html" => "Thanks for your registration!",
		             "text" => null,
		             "from_email" => "no-reply@nsubusinessalumni.org",
		             "from_name" => "NSU Business Alumni",
		             "subject" => "Login informaiton for www.nsubusinessalumni.org",
		             "to" => array(array("email" => "fahadbillah@yahoo.com")),
		             "track_opens" => true,
		             "track_clicks" => true,
		             "auto_text" => true
		             );

		// require_once APPPATH.'libraries/Mandrill.php';
		// $mandrill = new Mandrill('Ux-hKu4KpAS6w0EOJUkg5g');
		// var_dump($mandrill->messages->send($msg, true));
		//var_dump($mandrill->users->ping());


$this->load->library('Mandrill', array("Ux-hKu4KpAS6w0EOJUkg5g")); //load mandrill and provide apikey
var_dump($this->mandrill->messages->send($msg, true));
//var_dump($this->mandrill->users->ping());
exit();
$this->load->model('User_model');
vd($this->User_model->get_referer_user_id('zTQb56zcMP'));
exit();
vd($_SERVER);

vd($this->input->is_ajax_request());

		// $config = Array(
		//                 'protocol' => 'smtp',
		//                 'smtp_host' => 'mail.nsubusinessalumni.org',
		//                 'smtp_port' => 26,
		//                 'smtp_timeout' =>'7',
		//                 'charset' => 'utf-8',
		//                 'newline' => "\r\n",
		//                 'smtp_user' => 'no-reply@nsubusinessalumni.org', 
		//                 'smtp_pass' => '.@ZJRn~yo6TC', 
		//                 'mailtype' => 'html',
		//                 'validation' => TRUE,
		//                 'wordwrap' => TRUE
		//                 );

		// $this->load->library('email',$config);

		// $this->email->from('no-reply@nsubusinessalumni.org', 'NO-REPLY');
		// $this->email->to('fahadbillah@yahoo.com');
		// 	// $this->email->cc('another@example.com');
		// 	// $this->email->bcc('and@another.com');

		// $html = 'Password: <strong>PASSWORD</strong>';
		// $this->email->subject('Login informaiton for www.nsubusinessalumni.org');
		// $this->email->message($html);

		// $this->email->send();
}

public function sink()
{
	$this->load->view('sink');
}

public function resend_password()
{
	$post_data = get_post();
	$this->db->select('nsu_id,email');
	$this->db->from('users');
	$this->db->where('nsu_id', $post_data['nsu_id']);
	$q = $this->db->get();
	$result = $q->result_array();

		// vd(count($result));
		// exit();
	if (count($result)>0) {

		$password = generate_random_string(8);
		$data['password'] = sha1($password);
		$condition['nsu_id'] = $post_data['nsu_id'];
		$this->db->update('users', $data, $condition);

		// $config = Array(
		// 	'protocol' => 'smtp',
		// 	'smtp_host' => 'mail.nsubusinessalumni.org',
		// 	'smtp_port' => 26,
		// 	'smtp_timeout' =>'7',
		// 	'charset' => 'utf-8',
		// 	'newline' => "\r\n",
		// 	'smtp_user' => 'no-reply@nsubusinessalumni.org', 
		// 	'smtp_pass' => '.@ZJRn~yo6TC', 
		// 	'mailtype' => 'html',
		// 	'validation' => TRUE,
		// 	'wordwrap' => TRUE
		// 	);

		// $this->load->library('email',$config);

		// $this->email->from('no-reply@nsubusinessalumni.org', 'NSU Business Alumni');
		// $this->email->to($result[0]['email']);
			// $this->email->cc('another@example.com');
			// $this->email->bcc('and@another.com');
		// $html = '';
		// $html .= 'NSU ID: <strong>'.$result[0]['nsu_id'].'</strong><br>';
		// $html .= 'Password: <strong>'.$password.'</strong><br>';
		// $html .= 'URL: <a href="http://nsubusinessalumni.org/#/login">NSU Business Alumni</a><br>';
		// $this->email->subject('Login informaiton for www.nsubusinessalumni.org');
		// $this->email->message($html);


		error_reporting(0);
		$msg = array(
		             "html" => "",
		             "text" => null,
		             "from_email" => "no-reply@nsubusinessalumni.org",
		             "from_name" => "NSU Business Alumni",
		             "subject" => "Login informaiton for www.nsubusinessalumni.org",
		             "to" => array(array("email" => $result[0]['email'])),
		             "track_opens" => true,
		             "track_clicks" => true,
		             "auto_text" => true
		             );


		$msg['html'] .= 'NSU ID: <strong>'.$result[0]['nsu_id'].'</strong><br>';
		$msg['html'] .= 'Password: <strong>'.$password.'</strong><br>';
		$msg['html'] .= 'URL: <a href="http://nsubusinessalumni.org/#/login">NSU Business Alumni</a><br>';

		$this->load->library('Mandrill', array("Ux-hKu4KpAS6w0EOJUkg5g"));
		$mandrill = $this->mandrill->messages->send($msg, true);
		// $this->email->send()
		if ($mandrill[0]['status'] == 'sent') {

			$returned_data = array(
			                       'success' => true,
			                       'message' => 'Email resend to your email! Please check spam if not found in inbox.'
			                       );
		}else{
			$returned_data = array(
			                       'success' => false,
			                       'message' => 'Email send failed!'
			                       );
		}

			// $returned_data['email'] = $this->email->print_debugger();
		jsonify($returned_data);
	} else {
		$returned_data = array(
		                       'success' => false,
		                       'message' => 'Email not found!'
		                       );
		jsonify($returned_data);
	}

}

public function feedback()
{
	$feedback = get_post();
	$this->load->model('user_model');
	if ($this->user_model->insert_feedback($feedback)) {
		$returned_data['success'] = 'true';
		$returned_data['message'] = 'Thanks for your help.';
	} else {
		$returned_data['success'] = 'false';
		$returned_data['message'] = 'Failed to submit data.';
	}


	jsonify($returned_data);
}

public function contactus()
{
	error_reporting(0);
	$contact = $this->input->post();
	$this->load->model('user_model');
	if ($this->user_model->insert_contactus($contact)) {

		$msg = array(
		             "html" => "",
		             "text" => null,
		             "from_email" => $contact['email'],
		             "from_name" => $contact['name'],
		             "subject" => $contact['name']." sent a message.",
		             "to" => array(array("email" => "info@nsubusinessalumni.org")),
		             "track_opens" => true,
		             "track_clicks" => true,
		             "auto_text" => true
		             );


		$msg['html'] .= 'Name: <strong>'.$contact['name'].'</strong><br>';
		$msg['html'] .= 'Organization: <strong>'.$contact['organization'].'</strong><br>';
		$msg['html'] .= 'Designation: <strong>'.$contact['designation'].'</strong><br>';
		$msg['html'] .= 'Contact Number : <strong>'.$contact['contactno'].'</strong><br>';
		$msg['html'] .= 'Email: <strong>'.$contact['email'].'</strong><br>';
		$msg['html'] .= 'NSU ID: <strong>'.$contact['nsuid'].'</strong><br>';
		$msg['html'] .= 'Area of interest: <strong>'.$contact['interest'].'</strong><br>';
		$msg['html'] .= 'Message: <br>'.$contact['nsuid'].'<br>';
		$msg['html'] .= 'URL: <a href="http://nsubusinessalumni.org/#/login">NSU Business Alumni</a><br>';

		$this->load->library('Mandrill', array("Ux-hKu4KpAS6w0EOJUkg5g"));
		$mandrill = $this->mandrill->messages->send($msg, true);



		$returned_data['success'] = 'true';
		$returned_data['message'] = 'Thanks for your message.';
	} else {
		$returned_data['success'] = 'false';
		$returned_data['message'] = 'Failed to submit message.';
	}
	jsonify($returned_data);
}

}
/* End of file auth.php */
/* Location: ./application/controllers/auth.php */