-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2015 at 08:47 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `nsu_sob_alumni`
--

-- --------------------------------------------------------

--
-- Table structure for table `ci_sessions`
--

CREATE TABLE IF NOT EXISTS `ci_sessions` (
  `session_id` varchar(40) NOT NULL DEFAULT '0',
  `ip_address` varchar(45) NOT NULL DEFAULT '0',
  `user_agent` varchar(120) NOT NULL,
  `last_activity` int(10) unsigned NOT NULL DEFAULT '0',
  `user_data` text NOT NULL,
  PRIMARY KEY (`session_id`),
  KEY `last_activity_idx` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ci_sessions`
--

INSERT INTO `ci_sessions` (`session_id`, `ip_address`, `user_agent`, `last_activity`, `user_data`) VALUES
('02a90e55ef1724abc5cbbcd7b7d27717', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 1422898638, ''),
('047fe692fed321fff6f36bc4a8477b2e', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 1422898638, 'a:2:{s:9:"user_data";a:17:{s:2:"id";s:1:"1";s:10:"first_name";s:5:"Fahad";s:9:"last_name";s:6:"Billah";s:5:"email";s:21:"fahadbillah@yahoo.com";s:6:"nsu_id";s:3:"123";s:8:"about_me";N;s:5:"phone";s:11:"01966662623";s:3:"dob";N;s:11:"create_date";s:19:"2015-01-14 12:29:47";s:11:"update_date";N;s:13:"facebook_link";N;s:12:"twitter_link";N;s:13:"linkedin_link";N;s:13:"referral_link";s:10:"luuTT0tUCK";s:11:"profile_pic";s:10:"yeoman.png";s:4:"role";s:4:"user";s:7:"referer";N;}s:12:"is_logged_in";b:1;}'),
('0a0ccc7e420b2e7052e49f3be0b68520', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 1422994160, ''),
('14442b927ed682cfa31e837ffc3671e0', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 1422994062, ''),
('1767f4f54d4980f69e3fc71819bb1631', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423250741, ''),
('22b60286a22f20629019bf1b8adba073', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423252911, ''),
('243cc0c50886fbca7893824c29c953ce', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423252911, ''),
('301583704e36ce310fb91a8af9a6ba35', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 1422994160, 'a:2:{s:9:"user_data";a:17:{s:2:"id";s:1:"1";s:10:"first_name";s:5:"Fahad";s:9:"last_name";s:6:"Billah";s:5:"email";s:21:"fahadbillah@yahoo.com";s:6:"nsu_id";s:3:"123";s:8:"about_me";N;s:5:"phone";s:11:"01966662623";s:3:"dob";N;s:11:"create_date";s:19:"2015-01-14 12:29:47";s:11:"update_date";N;s:13:"facebook_link";N;s:12:"twitter_link";N;s:13:"linkedin_link";N;s:13:"referral_link";s:10:"luuTT0tUCK";s:11:"profile_pic";s:10:"yeoman.png";s:4:"role";s:4:"user";s:7:"referer";N;}s:12:"is_logged_in";b:1;}'),
('3a436b8ce20405caf39dd245220c4da6', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423252911, ''),
('432a7b852b1705cf0c63bae56233081f', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 1422994062, ''),
('491754838a3f874ea9bb260c8798696e', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 1422994062, ''),
('4c4475d2abec18adf7880a4ccf191718', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423252911, ''),
('4e3e4176f14cc8a35085739e42b9a62c', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423250741, ''),
('532e3e059d214ffd59e9eddb163695fa', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423252984, 'a:2:{s:9:"user_data";a:17:{s:2:"id";s:1:"1";s:10:"first_name";s:5:"Fahad";s:9:"last_name";s:6:"Billah";s:5:"email";s:21:"fahadbillah@yahoo.com";s:6:"nsu_id";s:3:"123";s:8:"about_me";N;s:5:"phone";s:11:"01966662623";s:3:"dob";N;s:11:"create_date";s:19:"2015-01-14 12:29:47";s:11:"update_date";N;s:13:"facebook_link";N;s:12:"twitter_link";N;s:13:"linkedin_link";N;s:13:"referral_link";s:10:"luuTT0tUCK";s:11:"profile_pic";s:10:"yeoman.png";s:4:"role";s:5:"admin";s:7:"referer";N;}s:12:"is_logged_in";b:1;}'),
('599cccdcfd2b43b47443bd464789a2f3', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 1422897717, ''),
('65a68fbcfbfa45b5e95a09c9066ae07b', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 1422897717, ''),
('67367422fcf6caa1947507746e1a310d', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423252984, ''),
('6e663b748e5444cacb4aba87019a7a67', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 1422898291, ''),
('734ac94f2c1a636409635f55159eef89', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423252911, ''),
('747f6ca7451ae5b3e76f20cbc5aeb6cd', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423250741, ''),
('7dee8d0b19cc2818ff8634baf68d9f7d', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 1422897717, ''),
('84a60a4aa73502ba6e67e099a3f8b4c3', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423252911, ''),
('8892686bed2283cba173d4b759f69f87', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 1422994062, ''),
('8de4d1d56251f4bcc612a9aa76b97a9d', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 1422897717, ''),
('b41058bd491997c8f7384d6d1a0f2d7c', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 1422897717, ''),
('b68b0814a013dfe035c4d6a37be45711', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 1422898419, ''),
('bb8b6de3aa56a643834bf0f280817a75', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423252504, ''),
('c5f171c9e3f5a98034e0660291c64729', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 1422897968, ''),
('cb732a6668b509a935f6fa5cd32617d2', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423252911, ''),
('e0903a803bbb2ce2580524ecc7e5ef44', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423250741, ''),
('e624c285e4c47992773583b5590ef77c', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 1422994062, ''),
('e675ae431b0986b0fae0862e0ff939e4', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423252911, ''),
('eb5657b444ddcf25eb4c4ad519be7ae2', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423252911, ''),
('ec496cb1eb5d1b4bef009f7fa567f078', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423252911, ''),
('f2e1456e002a69f449936090b2ebb024', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423250741, ''),
('fb471dc219d62a62616039f7586cb93b', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423252911, ''),
('fd46a8b38c8122326d74b51c76bf3cc3', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 1423251997, '');

-- --------------------------------------------------------

--
-- Table structure for table `designations`
--

CREATE TABLE IF NOT EXISTS `designations` (
  `designation_id` int(11) NOT NULL AUTO_INCREMENT,
  `designation_name` varchar(200) NOT NULL,
  PRIMARY KEY (`designation_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;

--
-- Dumping data for table `designations`
--

INSERT INTO `designations` (`designation_id`, `designation_name`) VALUES
(1, 'Chief executive officer'),
(2, 'Chairman'),
(3, 'Vice Chairman'),
(4, 'Managing Director'),
(5, 'Sr. Vice president '),
(6, 'Vice President'),
(7, 'General Manager'),
(8, 'Joint General Manager'),
(9, 'Deputy General Manager'),
(10, 'Asst. General Manager'),
(11, 'Chief Manager'),
(12, 'Sr. Manager'),
(13, 'Manager'),
(14, 'Joint Manager'),
(15, 'Deputy Manager'),
(16, 'Asst. Manager'),
(17, 'Sr. Officer'),
(18, 'Officer'),
(19, 'Jr. Officer'),
(20, 'Sr. Associate'),
(21, 'Associate'),
(22, 'Jr. Associate'),
(23, 'Assistant'),
(24, 'Owner'),
(25, 'Founder');

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE IF NOT EXISTS `feedbacks` (
  `feedback_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` text NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`feedback_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `feedbacks`
--

INSERT INTO `feedbacks` (`feedback_id`, `name`, `email`, `message`, `date_created`) VALUES
(1, 'asdf', 'fahadbillah@yahoo.com', 'sdfasf', '2015-02-08 18:37:44'),
(2, 'Fahad Billah', 'fahadbillah@yahoo.com', 'Hi', '2015-02-08 19:21:37'),
(3, 'Fahad Billah', 'fahadbillah@yahoo.com', 'HI', '2015-02-08 19:21:53'),
(4, 'Fahad Billah', 'fahadbillah@yahoo.com', 'sdfasf', '2015-02-08 19:26:47');

-- --------------------------------------------------------

--
-- Table structure for table `survey_answers`
--

CREATE TABLE IF NOT EXISTS `survey_answers` (
  `survey_answer_id` int(11) NOT NULL AUTO_INCREMENT,
  `answer` mediumtext,
  `correct` tinyint(1) DEFAULT NULL,
  `survey_question_id` int(11) DEFAULT NULL,
  `answer_point` int(11) DEFAULT NULL,
  PRIMARY KEY (`survey_answer_id`),
  KEY `survey_question_id` (`survey_question_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `survey_answers`
--

INSERT INTO `survey_answers` (`survey_answer_id`, `answer`, `correct`, `survey_question_id`, `answer_point`) VALUES
(1, 'question 3 answer 1', NULL, 3, NULL),
(2, 'question 3 answer 2', NULL, 3, NULL),
(3, 'question 4 answer 1', NULL, 4, NULL),
(4, 'question 4 answer 2', NULL, 4, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `survey_questions`
--

CREATE TABLE IF NOT EXISTS `survey_questions` (
  `survey_question_id` int(11) NOT NULL AUTO_INCREMENT,
  `question` mediumtext,
  `type` varchar(30) DEFAULT NULL,
  `serial_no` int(11) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` datetime DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `group` int(11) DEFAULT NULL,
  PRIMARY KEY (`survey_question_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `survey_questions`
--

INSERT INTO `survey_questions` (`survey_question_id`, `question`, `type`, `serial_no`, `create_date`, `update_date`, `active`, `group`) VALUES
(1, 'Do you miss NSU?', 'textarea', 1, '2015-01-13 12:34:15', NULL, 1, 1),
(2, 'When did you last visit NSU?', 'input', 2, '2015-01-13 12:34:15', NULL, 1, 1),
(3, 'question 3', 'checkbox', 3, '2015-01-14 06:47:41', NULL, 1, 2),
(4, 'question 4', 'radio', 4, '2015-01-14 06:47:41', NULL, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `nsu_id` varchar(20) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `token` varchar(100) DEFAULT NULL,
  `about_me` mediumtext,
  `phone` varchar(30) DEFAULT NULL,
  `dob` datetime DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` datetime DEFAULT NULL,
  `facebook_link` mediumtext,
  `twitter_link` mediumtext,
  `linkedin_link` mediumtext,
  `referral_link` varchar(100) DEFAULT NULL,
  `profile_pic` varchar(200) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  `referer` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `referral_person_idx` (`referer`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=31 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email`, `nsu_id`, `password`, `token`, `about_me`, `phone`, `dob`, `create_date`, `update_date`, `facebook_link`, `twitter_link`, `linkedin_link`, `referral_link`, `profile_pic`, `admin`, `referer`) VALUES
(1, 'Fahad', 'Billah', 'fahadbillah@yahoo.com', '123', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'wwACZWLcraKrngKbKPtJ1YaYahvfEQKnrfBI1Bg6', NULL, '01966662623', NULL, '2015-01-14 06:29:47', NULL, NULL, NULL, NULL, 'luuTT0tUCK', 'yeoman.png', 1, NULL),
(2, 'new', 'user', 'fahadbillah@hotmail.com', '213324', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '57nua7JXR2vdDXU4ttGTRG1wJbFiy3P3kUd9vQ2q', NULL, '2134243', NULL, '2015-01-14 07:00:59', NULL, NULL, NULL, NULL, '4q3dsLrnFs', NULL, NULL, NULL),
(3, 'asdf', 'safd', 'fahadbillah@yahoo.com', '234234', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'huPsWJBSpbiphxgxF3ld9pSWQQIEj5dPEkbstj0Y', NULL, '234234234', NULL, '2015-01-14 07:01:48', NULL, NULL, NULL, NULL, 'ReumqQ06ek', NULL, NULL, NULL),
(4, 'fa', 'fas', 'fahadbillah@yahoo.com', '32343444', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '1klk7UaV2yJ4vAwPJRvPrJ89R1omH4JBaK8q0n4X', NULL, '324234', NULL, '2015-01-14 07:03:17', NULL, NULL, NULL, NULL, 'pPvL6pUXkY', NULL, NULL, NULL),
(5, 'asdfasdf', 'adsfasdf', 'fahadbillah@yahoo.com', '4444', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'OHztDsbEuhGxtlV6bpgPIFvGFQ277aG7FkN9pAca', NULL, '234234', NULL, '2015-01-14 07:15:36', NULL, NULL, NULL, NULL, 'WDfFlGNBeu', NULL, NULL, 1),
(6, 'Imrul', 'Hasan', 'fahadbillah@yahoo.com', '3432424', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'G06xhEwZdpDIBtjH1BSozZbMQmzjWWTYrques3b2', NULL, '432432', NULL, '2015-01-14 07:21:36', NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(7, 'asdfasdf', 'asdfasdf', 'aws@fullserivceplatform.com', '345345345', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'xyhWgE8u2ml0lL7j9rcLVvMdEyB0LFSXfrkrzXai', NULL, '2342342', NULL, '2015-01-14 07:22:11', NULL, NULL, NULL, NULL, 'IQ6Q8amXOw', NULL, NULL, 1),
(8, 'fahad', 'asdfasdf', 'fahadbillah@yahoo.com', '12311222', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'qt1RBbEMCEF4rsN4yIfBU0K3ZrweKAgvEydHGW4a', NULL, '90302930', NULL, '2015-01-15 06:49:11', NULL, NULL, NULL, NULL, 'jP5KvOWMIZ', NULL, NULL, NULL),
(9, 'fahad', 'asdfasdf', 'fahadbillah@yahoo.com', '3333333', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'MBQnGaSO4sL91Hjm9BTUwpkLJOYpT3GMBPMoWn7b', NULL, '90302930', NULL, '2015-01-15 06:54:08', NULL, NULL, NULL, NULL, 'up2Cm8oG9h', NULL, NULL, NULL),
(10, 'asdf', 'asdf', 'fahadbillah@yahoo.com', '23468', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'Qr6DkUj6Cqg7skqL4uMD9dMPWnpV9j810RUJdne8', NULL, '123123', NULL, '2015-01-15 07:09:41', NULL, NULL, NULL, NULL, 'ZG2O49OTFB', NULL, NULL, NULL),
(11, 'ddd', 'ddd', 'fahadbillah@yahoo.com', '33', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '46b6jzmzIf0CMfm5ta8lg5xc6Bj1tOEEljipbbrb', NULL, '333', NULL, '2015-01-15 07:52:19', NULL, NULL, NULL, NULL, 'X2Ph8XFxGy', NULL, NULL, NULL),
(12, 'dd', 'ddd', 'mush_iory@yahoo.com', '333', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'q6lbxCwUFuXwGEeKTBtN9jenOdCKIkfAc5b77s25', NULL, 'asdfas', NULL, '2015-01-15 08:03:50', NULL, NULL, NULL, NULL, 'NVTG6slDmw', NULL, NULL, NULL),
(13, 'sdfsd', 'slkfdj', 'fahadbillah@yahoo.com', '23', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '0gCvHGkaDADuTbmq3dQsdSXyZT2bsuUicnVokMWp', NULL, '23333', NULL, '2015-01-15 09:16:32', NULL, NULL, NULL, NULL, 'qpiQBuODrK', NULL, 1, NULL),
(14, 'djfdjdjjd', 'd', 'fahadbillah@yahoo.com', '34577', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '2l8pTKJweJZXh9RjJkPFP8RCiTqhksudEavwuRtO', NULL, '123222', NULL, '2015-01-15 09:29:13', NULL, NULL, NULL, NULL, 'zTQb56zcMP', NULL, NULL, NULL),
(19, 'fasdf', 'asdf', 'fahadbillah@yahoo.com', '111', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'nFrlWU55LUoyzZSPAZtwwhFIAFp1vwbwvGYNitdX', NULL, '12312', NULL, '2015-01-19 08:44:21', NULL, NULL, NULL, NULL, '7MTAETtN9H', NULL, NULL, NULL),
(20, '123', '123', 'fahadbillah@yahoo.com', '123123', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'jYyGktAQZAGC0Fj4BxqPuywXTzx3xUYeCrL4StpE', NULL, '123', NULL, '2015-01-19 09:32:05', NULL, NULL, NULL, NULL, 'wTRAh0BYmG', NULL, NULL, NULL),
(21, '2343', '234', 'fahadbillah@yahoo.com', '234', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'fZI93INuF5mIiWlpECfFWZ16Vn7MNDyjg5KNyBHO', NULL, '1234', NULL, '2015-01-19 09:34:01', NULL, NULL, NULL, NULL, 'owRs0Fdk6p', NULL, NULL, NULL),
(22, '12321221', '2121', 'fahadbillah@yahoo.com', '1212', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'ifvgsJqTwVtMlOfEeQQI30RH8LmPl4YP0pMTYKnK', NULL, '1231', NULL, '2015-01-19 09:36:46', NULL, NULL, NULL, NULL, 'AyQCHNNdDW', NULL, NULL, NULL),
(23, 'sdafsdf', 'asfasf', 'fahadbillah@yahoo.com', '66', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'UtbfbcXIFpkRuk6BdFFsWDQmhYYNiSUJB50DiN4s', NULL, '123', NULL, '2015-01-19 09:48:56', NULL, NULL, NULL, NULL, 'YKtHH84j6I', NULL, NULL, NULL),
(24, 'asdf', 'dd', 'fahadbillah@yahoo.com', '54', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'KOFsDGAZaby84C3YxS26ig0BAEU55ndD3gSPbGpN', NULL, '123123', NULL, '2015-01-22 21:39:33', NULL, NULL, NULL, NULL, 'HtJ7kYlSh1', NULL, NULL, NULL),
(25, 'fahad', 'billah', 'fahadbillah@yahoo.com', '989898', '979e5cd6888c5d8cae5248af19b67ac768599ebf', 'i0S7Jma6e1rTwkbyP7mGSKroR3pfwnHn5zjlfXHg', NULL, '213132', NULL, '2015-01-29 17:22:29', NULL, NULL, NULL, NULL, 'epPIKgbN3m', NULL, NULL, NULL),
(26, 'fahad', 'billah', 'fahadbillah@yahoo.com', '9898398', '586ae18af39bff0702e32882765b783f1c11fbdf', '9IxQeOVYqCAyWYv9ve9Tkdsm8iWD9jxk4AJx9ZtP', NULL, '213132', NULL, '2015-01-29 17:24:09', NULL, NULL, NULL, NULL, '4Pfk4Z2BRN', NULL, NULL, NULL),
(27, 'sdaf', 'dsgfsd', 'fahadbillah@yahoo.com', '357', '0485494b4f207f465ebbf715e5bff68984aea8e5', 'juvHMGZZiDZQcNDrm9vx59HkgMNxcvUnKiBAfB0n', NULL, '12123', NULL, '2015-01-29 17:30:50', NULL, NULL, NULL, NULL, 'zpHr1bL2tT', NULL, NULL, NULL),
(28, 'sdaf', 'dsgfsd', 'fahadbillah@yahoo.com', '3574', '145feb369945bfdff38ec5f800919eae0964c7e6', 'BXWuFnHFqwrWluo8nSgB0LgbbK8dpV4zCTNyiKy2', NULL, '12123', NULL, '2015-01-29 17:31:31', NULL, NULL, NULL, NULL, 'q41lrXslk1', NULL, NULL, NULL),
(29, 'asfasf', 'asf', 'fahadbillah@yahoo.com', '92020020', '3b03f7eb1edf92c540dbd205b0d618efbf296598', '7EwTtTvviSj2GNOqeoka2THdHZh2iUVCrnXpdBfn', NULL, '123132', NULL, '2015-02-01 16:25:52', NULL, NULL, NULL, NULL, 'ck60wJogKz', NULL, NULL, NULL),
(30, 'asf', 'asf', 'fahadbillah@yahoo.com', '093999399', 'e81f5c9f9856bcaca204b908fbca2bdbf34aabdc', '52QaM9jPG2JjDGGlZxg9zz4qKgcolAeNIZhPHsVe', NULL, '123', NULL, '2015-02-01 16:26:38', NULL, NULL, NULL, NULL, 'EsfcpXSsip', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_answers`
--

CREATE TABLE IF NOT EXISTS `user_answers` (
  `user_answer_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `survey_answer_id` int(11) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `survey_question_id` int(11) DEFAULT NULL,
  `other_answer` mediumtext,
  PRIMARY KEY (`user_answer_id`),
  KEY `user_id` (`user_id`),
  KEY `survey_answer_id` (`survey_answer_id`),
  KEY `servey_question_id` (`survey_question_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=104 ;

--
-- Dumping data for table `user_answers`
--

INSERT INTO `user_answers` (`user_answer_id`, `user_id`, `survey_answer_id`, `create_date`, `survey_question_id`, `other_answer`) VALUES
(100, 1, NULL, '2015-01-25 17:59:07', 1, 'fahad'),
(101, 1, NULL, '2015-01-25 17:59:17', 2, 'nonoo'),
(102, 1, 1, '2015-01-25 17:59:36', 3, NULL),
(103, 1, 4, '2015-01-25 17:59:40', 4, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_survey_answers`
--

CREATE TABLE IF NOT EXISTS `user_survey_answers` (
  `user_survey_answer_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `question_name` text NOT NULL,
  `question_answer` text NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_survey_answer_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=221 ;

--
-- Dumping data for table `user_survey_answers`
--

INSERT INTO `user_survey_answers` (`user_survey_answer_id`, `user_id`, `question_name`, `question_answer`, `date_added`) VALUES
(64, 1, 'personalInfoCompleted', 'true', '2015-01-31 19:11:07'),
(65, 1, 'name', 'Fahad Billah', '2015-01-31 19:11:07'),
(66, 1, 'nsuId', '0930527542', '2015-01-31 19:11:07'),
(67, 1, 'country', 'Bangladesh', '2015-01-31 19:11:07'),
(68, 1, 'address', 'badda', '2015-01-31 19:11:07'),
(69, 1, 'ugTitle', 'CSE', '2015-01-31 19:11:07'),
(70, 1, 'ugNsuOrOther', 'nsu', '2015-01-31 19:11:07'),
(71, 1, 'gTitle', '', '2015-01-31 19:11:07'),
(72, 1, 'gNsuOrOther', '', '2015-01-31 19:11:07'),
(73, 1, 'methodOfContact', 'Email', '2015-01-31 19:11:07'),
(74, 1, 'afterGraduationInfoCompleted', 'true', '2015-01-31 19:12:14'),
(75, 1, 'workingFullTime', 'true', '2015-01-31 19:12:14'),
(76, 1, 'workingPartTime', 'true', '2015-01-31 19:12:14'),
(77, 1, 'startJobNextMonth', 'false', '2015-01-31 19:12:14'),
(78, 1, 'furthurStudyTrainingResearch', 'false', '2015-01-31 19:12:14'),
(79, 1, 'partTimeStudyTrainingResearch', 'true', '2015-01-31 19:12:14'),
(80, 1, 'travelTime', 'false', '2015-01-31 19:12:14'),
(81, 1, 'unemployed', 'false', '2015-01-31 19:12:14'),
(82, 1, 'doElse', 'false', '2015-01-31 19:12:14'),
(83, 1, 'important', 'startJobNextMonth', '2015-01-31 19:12:14'),
(84, 1, 'jobNumber', 'Four', '2015-01-31 19:12:14'),
(85, 1, 'jobTitle', 'soft', '2015-01-31 19:12:14'),
(86, 1, 'jobResponsibility', 'Nothing', '2015-01-31 19:12:14'),
(87, 1, 'jobRelationToStudy', 'Yes, same field as major(s)', '2015-01-31 19:12:14'),
(88, 1, 'LAG2Completed', 'true', '2015-01-31 19:12:59'),
(89, 1, 'currentPositionStatus', 'On a permanent or open-ended contract', '2015-01-31 19:12:59'),
(90, 1, 'currentPositionStatusOther', '', '2015-01-31 19:12:59'),
(91, 1, 'jobQualification', 'Yes: the qualification was a formal requirement', '2015-01-31 19:12:59'),
(92, 1, 'jobDecisionA1', 'false', '2015-01-31 19:12:59'),
(93, 1, 'jobDecisionA2', 'false', '2015-01-31 19:12:59'),
(94, 1, 'jobDecisionA3', 'true', '2015-01-31 19:12:59'),
(95, 1, 'jobDecisionA4', 'false', '2015-01-31 19:12:59'),
(96, 1, 'jobDecisionA5', 'false', '2015-01-31 19:12:59'),
(97, 1, 'jobDecisionA6', 'false', '2015-01-31 19:12:59'),
(98, 1, 'jobDecisionA7', 'false', '2015-01-31 19:12:59'),
(99, 1, 'jobDecisionA8', 'false', '2015-01-31 19:12:59'),
(100, 1, 'jobSource', 'Other university/college source (e.g. lecturer, website)', '2015-01-31 19:12:59'),
(101, 1, 'jobSourceOther', '', '2015-01-31 19:12:59'),
(102, 1, 'nsuPrep', 'Adequately', '2015-01-31 19:12:59'),
(103, 1, 'eExpCompleted', 'true', '2015-01-31 19:14:21'),
(104, 1, 'writing', '1', '2015-01-31 19:14:21'),
(105, 1, 'teamwork', '3', '2015-01-31 19:14:21'),
(106, 1, 'punctuality', '5', '2015-01-31 19:14:21'),
(107, 1, 'ideas', '5', '2015-01-31 19:14:21'),
(108, 1, 'skill', '4', '2015-01-31 19:14:21'),
(109, 1, 'newSkill', '5', '2015-01-31 19:14:21'),
(110, 1, 'activityPrepA1', '5', '2015-01-31 19:14:21'),
(111, 1, 'activityPrepA1DnA', 'true', '2015-01-31 19:14:21'),
(112, 1, 'activityPrepA2', '3', '2015-01-31 19:14:21'),
(113, 1, 'activityPrepA2DnA', 'false', '2015-01-31 19:14:21'),
(114, 1, 'activityPrepA3', '4', '2015-01-31 19:14:21'),
(115, 1, 'activityPrepA3DnA', 'false', '2015-01-31 19:14:21'),
(116, 1, 'activityPrepA4', '3', '2015-01-31 19:14:21'),
(117, 1, 'activityPrepA4DnA', 'true', '2015-01-31 19:14:21'),
(118, 1, 'activityPrepA5', '3', '2015-01-31 19:14:21'),
(119, 1, 'activityPrepA5DnA', 'false', '2015-01-31 19:14:21'),
(120, 1, 'activityPrepA6', '1', '2015-01-31 19:14:21'),
(121, 1, 'activityPrepA6DnA', 'false', '2015-01-31 19:14:21'),
(122, 1, 'activityPrepA7', '5', '2015-01-31 19:14:21'),
(123, 1, 'activityPrepA7DnA', 'false', '2015-01-31 19:14:21'),
(124, 1, 'activityPrepA8', '1', '2015-01-31 19:14:21'),
(125, 1, 'activityPrepA8DnA', 'true', '2015-01-31 19:14:21'),
(126, 1, 'coCurriculam', '', '2015-01-31 19:14:21'),
(127, 1, 'yearGap', '11 or more years later', '2015-01-31 19:14:21'),
(128, 1, 'leadership', '2', '2015-01-31 19:14:21'),
(129, 1, 'encourage', 'Probably Would NOT', '2015-01-31 19:14:21'),
(130, 1, 'finance', 'No, definitely not', '2015-01-31 19:14:21'),
(131, 1, 'connected', 'Not very connected', '2015-01-31 19:14:21'),
(132, 1, 'pplConnection', 'Yes, with, with my advisor(s)', '2015-01-31 19:14:21'),
(133, 1, 'commentCompleted', 'true', '2015-02-02 17:22:26'),
(134, 1, 'q1', 'test', '2015-02-02 17:22:26'),
(135, 1, 'q2', 'teste', '2015-02-02 17:22:26'),
(136, 1, 'q3', 'test', '2015-02-02 17:22:26'),
(137, 20, 'personalInfoCompleted', 'true', '2015-02-02 17:26:40'),
(138, 20, 'name', '123 123', '2015-02-02 17:26:40'),
(139, 20, 'nsuId', '123123', '2015-02-02 17:26:40'),
(140, 20, 'country', 'asfd', '2015-02-02 17:26:40'),
(141, 20, 'address', 'sdagf', '2015-02-02 17:26:40'),
(142, 20, 'ugTitle', 'sdgq', '2015-02-02 17:26:40'),
(143, 20, 'ugNsuOrOther', 'nsu', '2015-02-02 17:26:40'),
(144, 20, 'gTitle', 'dsgsd', '2015-02-02 17:26:40'),
(145, 20, 'gNsuOrOther', 'other', '2015-02-02 17:26:40'),
(146, 20, 'methodOfContact', 'By_post', '2015-02-02 17:26:40'),
(147, 20, 'afterGraduationInfoCompleted', 'true', '2015-02-02 17:27:04'),
(148, 20, 'workingFullTime', 'true', '2015-02-02 17:27:04'),
(149, 20, 'workingPartTime', 'false', '2015-02-02 17:27:04'),
(150, 20, 'startJobNextMonth', 'false', '2015-02-02 17:27:04'),
(151, 20, 'furthurStudyTrainingResearch', 'false', '2015-02-02 17:27:04'),
(152, 20, 'partTimeStudyTrainingResearch', 'false', '2015-02-02 17:27:04'),
(153, 20, 'travelTime', 'false', '2015-02-02 17:27:04'),
(154, 20, 'unemployed', 'false', '2015-02-02 17:27:04'),
(155, 20, 'doElse', 'true', '2015-02-02 17:27:04'),
(156, 20, 'important', 'startJobNextMonth', '2015-02-02 17:27:04'),
(157, 20, 'jobNumber', 'More than five', '2015-02-02 17:27:04'),
(158, 20, 'jobTitle', 'asf', '2015-02-02 17:27:04'),
(159, 20, 'jobResponsibility', 'sdgf', '2015-02-02 17:27:04'),
(160, 20, 'jobRelationToStudy', 'No, not related', '2015-02-02 17:27:04'),
(161, 20, 'LAG2Completed', 'true', '2015-02-02 17:29:24'),
(162, 20, 'currentPositionStatus', 'Other', '2015-02-02 17:29:24'),
(163, 20, 'currentPositionStatusOther', 'fsaf', '2015-02-02 17:29:24'),
(164, 20, 'jobQualification', 'No: the qualification was not required', '2015-02-02 17:29:24'),
(165, 20, 'jobDecisionA1', 'true', '2015-02-02 17:29:24'),
(166, 20, 'jobDecisionA2', 'true', '2015-02-02 17:29:24'),
(167, 20, 'jobDecisionA3', 'true', '2015-02-02 17:29:24'),
(168, 20, 'jobDecisionA4', 'true', '2015-02-02 17:29:24'),
(169, 20, 'jobDecisionA5', 'true', '2015-02-02 17:29:24'),
(170, 20, 'jobDecisionA6', 'true', '2015-02-02 17:29:24'),
(171, 20, 'jobDecisionA7', 'true', '2015-02-02 17:29:24'),
(172, 20, 'jobDecisionA8', 'true', '2015-02-02 17:29:24'),
(173, 20, 'jobDecisionA9', 'sadflsajk', '2015-02-02 17:29:24'),
(174, 20, 'jobSource', 'Other', '2015-02-02 17:29:24'),
(175, 20, 'jobSourceOther', 'sfsdf', '2015-02-02 17:29:24'),
(176, 20, 'nsuPrep', 'Less than adequately', '2015-02-02 17:29:24'),
(177, 20, 'eExpCompleted', 'true', '2015-02-02 17:30:47'),
(178, 20, 'writing', '1', '2015-02-02 17:30:47'),
(179, 20, 'teamwork', '1', '2015-02-02 17:30:47'),
(180, 20, 'punctuality', '1', '2015-02-02 17:30:47'),
(181, 20, 'ideas', '1', '2015-02-02 17:30:47'),
(182, 20, 'skill', '1', '2015-02-02 17:30:47'),
(183, 20, 'newSkill', '1', '2015-02-02 17:30:47'),
(184, 20, 'activityPrepA1', '2', '2015-02-02 17:30:47'),
(185, 20, 'activityPrepA1DnA', 'true', '2015-02-02 17:30:47'),
(186, 20, 'activityPrepA2', '3', '2015-02-02 17:30:47'),
(187, 20, 'activityPrepA2DnA', 'true', '2015-02-02 17:30:47'),
(188, 20, 'activityPrepA3', '1', '2015-02-02 17:30:47'),
(189, 20, 'activityPrepA3DnA', 'true', '2015-02-02 17:30:47'),
(190, 20, 'activityPrepA4', '5', '2015-02-02 17:30:47'),
(191, 20, 'activityPrepA4DnA', 'true', '2015-02-02 17:30:47'),
(192, 20, 'activityPrepA5', '3', '2015-02-02 17:30:47'),
(193, 20, 'activityPrepA5DnA', 'true', '2015-02-02 17:30:47'),
(194, 20, 'activityPrepA6', '4', '2015-02-02 17:30:47'),
(195, 20, 'activityPrepA6DnA', 'true', '2015-02-02 17:30:47'),
(196, 20, 'activityPrepA7', '3', '2015-02-02 17:30:47'),
(197, 20, 'activityPrepA7DnA', 'true', '2015-02-02 17:30:47'),
(198, 20, 'activityPrepA8', '2', '2015-02-02 17:30:47'),
(199, 20, 'activityPrepA8DnA', 'true', '2015-02-02 17:30:47'),
(200, 20, 'coCurriculam', 'sfsaf', '2015-02-02 17:30:47'),
(201, 20, 'yearGap', '4 to 6 years later', '2015-02-02 17:30:47'),
(202, 20, 'leadership', '1', '2015-02-02 17:30:47'),
(203, 20, 'encourage', 'Probably Would NOT', '2015-02-02 17:30:47'),
(204, 20, 'finance', 'No, definitely not', '2015-02-02 17:30:47'),
(205, 20, 'connected', 'Some what connected', '2015-02-02 17:30:47'),
(206, 20, 'pplConnection', 'Yes, with my  professors/lecturers or the staffs', '2015-02-02 17:30:47'),
(207, 20, 'commentCompleted', 'true', '2015-02-02 17:30:53'),
(208, 20, 'q1', 'asfasf', '2015-02-02 17:30:53'),
(209, 20, 'q2', 'alsfj', '2015-02-02 17:30:53'),
(210, 20, 'q3', 'lkjsaflkjsa', '2015-02-02 17:30:53'),
(211, 19, 'personalInfoCompleted', 'true', '2015-02-02 17:32:53'),
(212, 19, 'name', 'fasdf asdf', '2015-02-02 17:32:53'),
(213, 19, 'nsuId', '111', '2015-02-02 17:32:53'),
(214, 19, 'country', 'ssdfsdf', '2015-02-02 17:32:53'),
(215, 19, 'address', 'sdfsd', '2015-02-02 17:32:53'),
(216, 19, 'ugTitle', 'sdfsd', '2015-02-02 17:32:53'),
(217, 19, 'ugNsuOrOther', 'nsu', '2015-02-02 17:32:53'),
(218, 19, 'gTitle', 'sdf', '2015-02-02 17:32:53'),
(219, 19, 'gNsuOrOther', 'other', '2015-02-02 17:32:53'),
(220, 19, 'methodOfContact', 'Phone', '2015-02-02 17:32:53');

-- --------------------------------------------------------

--
-- Table structure for table `user_work_histories`
--

CREATE TABLE IF NOT EXISTS `user_work_histories` (
  `user_work_history_id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `office` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `from` datetime DEFAULT NULL,
  `to` datetime DEFAULT NULL,
  `job_description` mediumtext,
  `current` varchar(10) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` datetime DEFAULT NULL,
  `office_phone` varchar(50) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_work_history_id`),
  KEY `type` (`type`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `user_work_histories`
--

INSERT INTO `user_work_histories` (`user_work_history_id`, `type`, `office`, `designation`, `from`, `to`, `job_description`, `current`, `create_date`, `update_date`, `office_phone`, `user_id`) VALUES
(1, '1', NULL, '2', NULL, NULL, NULL, NULL, '2015-01-19 08:44:21', NULL, NULL, 19),
(2, '2', NULL, '21', NULL, NULL, NULL, NULL, '2015-01-19 09:32:05', NULL, NULL, 20),
(3, '1', NULL, '11', NULL, NULL, NULL, NULL, '2015-01-19 09:34:01', NULL, NULL, 21),
(4, '1', NULL, '23', NULL, NULL, NULL, NULL, '2015-01-19 09:36:46', NULL, NULL, 22),
(5, '2', NULL, '18', NULL, NULL, NULL, NULL, '2015-01-19 09:48:56', NULL, NULL, 23),
(6, 'sdfsdf', NULL, '23', NULL, NULL, NULL, NULL, '2015-01-22 21:39:33', NULL, NULL, 24);

-- --------------------------------------------------------

--
-- Table structure for table `visitors`
--

CREATE TABLE IF NOT EXISTS `visitors` (
  `visitor_id` int(11) NOT NULL AUTO_INCREMENT,
  `visitor_ip` varchar(30) NOT NULL,
  `first_visit` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_visit` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`visitor_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=100 ;

--
-- Dumping data for table `visitors`
--

INSERT INTO `visitors` (`visitor_id`, `visitor_ip`, `first_visit`, `last_visit`) VALUES
(1, '::1', '2015-02-03 21:40:37', '0000-00-00 00:00:00'),
(2, '::1', '2015-02-03 21:43:49', '0000-00-00 00:00:00'),
(3, '::1', '2015-02-03 21:44:00', '0000-00-00 00:00:00'),
(4, '::1', '2015-02-03 21:48:21', '0000-00-00 00:00:00'),
(5, '::1', '2015-02-03 21:48:25', '0000-00-00 00:00:00'),
(6, '::1', '2015-02-03 21:48:39', '0000-00-00 00:00:00'),
(7, '::1', '2015-02-06 19:25:41', '0000-00-00 00:00:00'),
(8, '::1', '2015-02-06 19:31:20', '0000-00-00 00:00:00'),
(9, '::1', '2015-02-06 19:34:46', '0000-00-00 00:00:00'),
(10, '::1', '2015-02-06 19:34:57', '0000-00-00 00:00:00'),
(11, '::1', '2015-02-06 19:45:56', '0000-00-00 00:00:00'),
(12, '::1', '2015-02-06 19:46:01', '0000-00-00 00:00:00'),
(13, '::1', '2015-02-06 19:46:31', '0000-00-00 00:00:00'),
(14, '::1', '2015-02-06 19:47:47', '0000-00-00 00:00:00'),
(15, '::1', '2015-02-06 19:48:22', '0000-00-00 00:00:00'),
(16, '::1', '2015-02-06 19:53:25', '0000-00-00 00:00:00'),
(17, '::1', '2015-02-06 19:53:34', '0000-00-00 00:00:00'),
(18, '::1', '2015-02-06 19:54:45', '0000-00-00 00:00:00'),
(19, '::1', '2015-02-06 19:54:52', '0000-00-00 00:00:00'),
(20, '::1', '2015-02-06 19:56:30', '0000-00-00 00:00:00'),
(21, '::1', '2015-02-06 19:56:50', '0000-00-00 00:00:00'),
(22, '::1', '2015-02-06 19:57:26', '0000-00-00 00:00:00'),
(23, '::1', '2015-02-06 19:58:07', '0000-00-00 00:00:00'),
(24, '::1', '2015-02-06 19:59:29', '0000-00-00 00:00:00'),
(25, '::1', '2015-02-06 20:01:24', '0000-00-00 00:00:00'),
(26, '::1', '2015-02-06 20:01:46', '0000-00-00 00:00:00'),
(27, '::1', '2015-02-06 20:01:51', '0000-00-00 00:00:00'),
(28, '::1', '2015-02-06 20:04:05', '0000-00-00 00:00:00'),
(29, '::1', '2015-02-06 20:04:26', '0000-00-00 00:00:00'),
(30, '::1', '2015-02-06 20:04:34', '0000-00-00 00:00:00'),
(31, '::1', '2015-02-06 20:06:12', '0000-00-00 00:00:00'),
(32, '::1', '2015-02-06 20:20:20', '0000-00-00 00:00:00'),
(33, '::1', '2015-02-06 20:21:03', '0000-00-00 00:00:00'),
(34, '::1', '2015-02-06 20:28:37', '0000-00-00 00:00:00'),
(35, '::1', '2015-02-06 20:29:44', '0000-00-00 00:00:00'),
(36, '::1', '2015-02-06 20:29:45', '0000-00-00 00:00:00'),
(37, '::1', '2015-02-06 20:29:57', '0000-00-00 00:00:00'),
(38, '::1', '2015-02-06 20:30:42', '0000-00-00 00:00:00'),
(39, '::1', '2015-02-06 20:31:22', '0000-00-00 00:00:00'),
(40, '::1', '2015-02-06 20:31:57', '0000-00-00 00:00:00'),
(41, '::1', '2015-02-06 20:32:38', '0000-00-00 00:00:00'),
(42, '::1', '2015-02-06 21:07:07', '0000-00-00 00:00:00'),
(43, '::1', '2015-02-06 21:09:38', '0000-00-00 00:00:00'),
(44, '::1', '2015-02-06 21:17:13', '0000-00-00 00:00:00'),
(45, '::1', '2015-02-06 21:18:24', '0000-00-00 00:00:00'),
(46, '::1', '2015-02-06 21:21:20', '0000-00-00 00:00:00'),
(47, '::1', '2015-02-06 21:21:29', '0000-00-00 00:00:00'),
(48, '::1', '2015-02-06 21:22:20', '0000-00-00 00:00:00'),
(49, '::1', '2015-02-06 21:24:47', '0000-00-00 00:00:00'),
(50, '::1', '2015-02-06 21:25:55', '0000-00-00 00:00:00'),
(51, '::1', '2015-02-06 21:26:36', '0000-00-00 00:00:00'),
(52, '::1', '2015-02-06 21:28:11', '0000-00-00 00:00:00'),
(53, '::1', '2015-02-08 15:20:51', '0000-00-00 00:00:00'),
(54, '::1', '2015-02-08 15:21:04', '0000-00-00 00:00:00'),
(55, '::1', '2015-02-08 15:46:04', '0000-00-00 00:00:00'),
(56, '::1', '2015-02-08 15:46:49', '0000-00-00 00:00:00'),
(57, '::1', '2015-02-08 15:47:02', '0000-00-00 00:00:00'),
(58, '::1', '2015-02-08 15:48:05', '0000-00-00 00:00:00'),
(59, '::1', '2015-02-08 15:53:41', '0000-00-00 00:00:00'),
(60, '::1', '2015-02-08 16:03:58', '0000-00-00 00:00:00'),
(61, '::1', '2015-02-08 16:04:26', '0000-00-00 00:00:00'),
(62, '::1', '2015-02-08 16:10:03', '0000-00-00 00:00:00'),
(63, '::1', '2015-02-08 16:17:41', '0000-00-00 00:00:00'),
(64, '::1', '2015-02-08 16:18:22', '0000-00-00 00:00:00'),
(65, '::1', '2015-02-08 16:18:36', '0000-00-00 00:00:00'),
(66, '::1', '2015-02-08 16:19:52', '0000-00-00 00:00:00'),
(67, '::1', '2015-02-08 16:20:33', '0000-00-00 00:00:00'),
(68, '::1', '2015-02-08 16:21:35', '0000-00-00 00:00:00'),
(69, '::1', '2015-02-08 16:25:24', '0000-00-00 00:00:00'),
(70, '::1', '2015-02-08 16:25:56', '0000-00-00 00:00:00'),
(71, '::1', '2015-02-08 16:26:11', '0000-00-00 00:00:00'),
(72, '::1', '2015-02-08 18:34:54', '0000-00-00 00:00:00'),
(73, '::1', '2015-02-08 18:35:24', '0000-00-00 00:00:00'),
(74, '::1', '2015-02-08 18:36:53', '0000-00-00 00:00:00'),
(75, '::1', '2015-02-08 18:49:41', '0000-00-00 00:00:00'),
(76, '::1', '2015-02-08 18:50:32', '0000-00-00 00:00:00'),
(77, '::1', '2015-02-08 18:50:55', '0000-00-00 00:00:00'),
(78, '::1', '2015-02-08 18:51:59', '0000-00-00 00:00:00'),
(79, '::1', '2015-02-08 18:53:51', '0000-00-00 00:00:00'),
(80, '::1', '2015-02-08 18:54:21', '0000-00-00 00:00:00'),
(81, '::1', '2015-02-08 18:55:38', '0000-00-00 00:00:00'),
(82, '::1', '2015-02-08 18:58:24', '0000-00-00 00:00:00'),
(83, '::1', '2015-02-08 18:59:46', '0000-00-00 00:00:00'),
(84, '::1', '2015-02-08 19:02:15', '0000-00-00 00:00:00'),
(85, '::1', '2015-02-08 19:02:25', '0000-00-00 00:00:00'),
(86, '::1', '2015-02-08 19:07:37', '0000-00-00 00:00:00'),
(87, '::1', '2015-02-08 19:08:24', '0000-00-00 00:00:00'),
(88, '::1', '2015-02-08 19:08:56', '0000-00-00 00:00:00'),
(89, '::1', '2015-02-08 19:09:04', '0000-00-00 00:00:00'),
(90, '::1', '2015-02-08 19:12:49', '0000-00-00 00:00:00'),
(91, '::1', '2015-02-08 19:13:16', '0000-00-00 00:00:00'),
(92, '::1', '2015-02-08 19:13:41', '0000-00-00 00:00:00'),
(93, '::1', '2015-02-08 19:14:15', '0000-00-00 00:00:00'),
(94, '::1', '2015-02-08 19:14:50', '0000-00-00 00:00:00'),
(95, '::1', '2015-02-08 19:15:02', '0000-00-00 00:00:00'),
(96, '::1', '2015-02-08 19:15:12', '0000-00-00 00:00:00'),
(97, '::1', '2015-02-08 19:15:19', '0000-00-00 00:00:00'),
(98, '::1', '2015-02-08 19:20:08', '0000-00-00 00:00:00'),
(99, '::1', '2015-02-08 19:26:39', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `work_types`
--

CREATE TABLE IF NOT EXISTS `work_types` (
  `work_type_id` int(2) NOT NULL AUTO_INCREMENT,
  `work_name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`work_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `work_types`
--

INSERT INTO `work_types` (`work_type_id`, `work_name`) VALUES
(1, 'Job'),
(2, 'Business');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `survey_answers`
--
ALTER TABLE `survey_answers`
  ADD CONSTRAINT `survey_answers_ibfk_1` FOREIGN KEY (`survey_question_id`) REFERENCES `survey_questions` (`survey_question_id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `referral_person` FOREIGN KEY (`referer`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `user_answers`
--
ALTER TABLE `user_answers`
  ADD CONSTRAINT `user_answers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `user_answers_ibfk_2` FOREIGN KEY (`survey_answer_id`) REFERENCES `survey_answers` (`survey_answer_id`),
  ADD CONSTRAINT `user_answers_ibfk_3` FOREIGN KEY (`survey_question_id`) REFERENCES `survey_questions` (`survey_question_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
