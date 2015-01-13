<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

function jsonify($data)
{
	echo json_encode($data);
}

function vd($data){
	echo "<pre>";
	var_dump($data);
	echo "</pre>";
}

function pr($data){
	echo "<pre>";
	print_r($data);
	echo "</pre>";
}

/* End of file output_helper.php */
/* Location: ./application/helpers/output_helper.php */