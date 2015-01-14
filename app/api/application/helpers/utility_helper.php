<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Function Name
 *
 * Function description
 *
 * @access	public
 * @param	type	name
 * @return	type	
 */

if (! function_exists('generate_random_string'))
{
	function generate_random_string($length = 10){
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$charactersLength = strlen($characters);
		$randomString = '';
		for ($i = 0; $i < $length; $i++) {
			$randomString .= $characters[rand(0, $charactersLength - 1)];
		}
		return $randomString;
	}
}

/* End of file utility_helper.php */
/* Location: ./application/helpers/utility_helper.php */