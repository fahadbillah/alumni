<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

function get_post()
{
	$processed_data = array();
	$data = explode('&', file_get_contents("php://input"));
	foreach ($data as $key => $value) {
		$splid_data = explode('=', $value);
		if (in_array('csrf_test_name', $splid_data)) 
			continue;
		$processed_data[urldecode($splid_data[0])] = urldecode($splid_data[1]);
	}
	return $processed_data;
}

/* End of file input_helper.php */
/* Location: ./application/helpers/input_helper.php */