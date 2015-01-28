<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		jsonify(array('success' => true, 'csrf_test_name' => ($this->input->cookie('XSRF-TOKEN') !== null)?$this->input->cookie('XSRF-TOKEN'): false));
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

		$post_data['work_type'] = ($post_data['work_type'] =='not available') ? $post_data['other_work_type'] : $post_data['work_type'];

		$post_data['designation'] = ($post_data['designation'] =='not available') ? $post_data['other_designation'] : $post_data['designation'];

		$work['type'] = $post_data['work_type'];
		$work['designation'] = $post_data['designation'];
		unset($post_data['work_type']);
		unset($post_data['other_work_type']);
		unset($post_data['designation']);
		unset($post_data['other_designation']);

		$result = $this->User_model->insert_user($post_data);


		if ($result['success'] === true) {

			$result['last_inserted_data'][0]['role'] = ($result['last_inserted_data'][0]['role'] == 1) ? 'admin' : 'user'; 


			$session_data = array(
			                      'is_logged_in' => true,
			                      'user_data' => $result['last_inserted_data'][0]
			                      );
			$work['user_id'] =  $result['last_inserted_data'][0]['id'];

			$work_result = $this->User_model->insert_user_work_history($work);

			// pr($post_data);
			// pr($work);
			// pr($result);
			// pr($work_result);
			// exit();
			$this->session->set_userdata( $session_data );


			

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

			$this->email->from('no-reply@nsubusinessalumni.org', 'NO-REPLY');
			$this->email->to($post_data['email']);
			// $this->email->cc('another@example.com');
			// $this->email->bcc('and@another.com');
			$html = '';
			$html .= 'NSU ID: <strong>'.$post_data['nsu_id'].'</strong><br>';
			$html .= 'Password: <strong>'.$password.'</strong><br>';
			$html .= 'URL: <a href="http://nsubusinessalumni.org/#/login">NSU Business Alumni</a><br>';
			$this->email->subject('Login informaiton for www.nsubusinessalumni.org');
			$this->email->message($html);

			$this->email->send();

			$return_data['success'] = true;
			$return_data['message'] = 'User registration successfull!';
			$return_data['user'] = $result['last_inserted_data'][0];
			$return_data['user_work_info'] = $work_result['last_inserted_data'][0];
			$return_data['email'] = $this->email->print_debugger();

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
}

/* End of file auth.php */
/* Location: ./application/controllers/auth.php */