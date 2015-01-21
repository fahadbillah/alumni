-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2015 at 12:13 PM
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
  `user_agent` varchar(200) NOT NULL,
  `last_activity` int(10) unsigned NOT NULL DEFAULT '0',
  `user_data` text NOT NULL,
  PRIMARY KEY (`session_id`),
  KEY `last_activity_idx` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ci_sessions`
--

INSERT INTO `ci_sessions` (`session_id`, `ip_address`, `user_agent`, `last_activity`, `user_data`) VALUES
('0b3a5c7b6638cc99a9db66b8dcb7643f', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36', 1421815990, ''),
('1ceac5351c3f4888df2d873c0b177a3c', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36', 1421821999, ''),
('328a4274f5ae9a427615f793a2fbbc15', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36', 1421815989, ''),
('336f84b15e9f3ba0b2fab0be7cfc3fe4', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36', 1421815990, ''),
('3946ffd636f0573fbabf18e1767aa841', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36', 1421815990, ''),
('3cc21db6862dafe5368b3a5f77892b4e', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36', 1421816008, ''),
('4808d299afa2a07c4b12e66fe2ec235f', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36', 1421816008, ''),
('70ca58a1f25095e5ab18c272ffb5ca03', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36', 1421838771, ''),
('9a28b10a77442dbd203601ac3898be01', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36', 1421815990, ''),
('c3068811dbecaa689a9e6218667fc8ef', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36', 1421816008, ''),
('d7308b3cb920157592c4fb29163e2fa5', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36', 1421816008, '');

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
  `nsu_id` int(11) DEFAULT NULL,
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email`, `nsu_id`, `password`, `token`, `about_me`, `phone`, `dob`, `create_date`, `update_date`, `facebook_link`, `twitter_link`, `linkedin_link`, `referral_link`, `profile_pic`, `admin`, `referer`) VALUES
(1, 'Fahad', 'Billah', 'fahadbillah@yahoo.com', 123, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'wwACZWLcraKrngKbKPtJ1YaYahvfEQKnrfBI1Bg6', NULL, '01966662623', NULL, '2015-01-14 06:29:47', NULL, NULL, NULL, NULL, 'luuTT0tUCK', 'yeoman.png', NULL, NULL),
(2, 'new', 'user', 'fahadbillah@hotmail.com', 213324, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '57nua7JXR2vdDXU4ttGTRG1wJbFiy3P3kUd9vQ2q', NULL, '2134243', NULL, '2015-01-14 07:00:59', NULL, NULL, NULL, NULL, '4q3dsLrnFs', NULL, NULL, NULL),
(3, 'asdf', 'safd', 'fahadbillah@yahoo.com', 234234, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'huPsWJBSpbiphxgxF3ld9pSWQQIEj5dPEkbstj0Y', NULL, '234234234', NULL, '2015-01-14 07:01:48', NULL, NULL, NULL, NULL, 'ReumqQ06ek', NULL, NULL, NULL),
(4, 'fa', 'fas', 'fahadbillah@yahoo.com', 32343444, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '1klk7UaV2yJ4vAwPJRvPrJ89R1omH4JBaK8q0n4X', NULL, '324234', NULL, '2015-01-14 07:03:17', NULL, NULL, NULL, NULL, 'pPvL6pUXkY', NULL, NULL, NULL),
(5, 'asdfasdf', 'adsfasdf', 'fahadbillah@yahoo.com', 4444, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'OHztDsbEuhGxtlV6bpgPIFvGFQ277aG7FkN9pAca', NULL, '234234', NULL, '2015-01-14 07:15:36', NULL, NULL, NULL, NULL, 'WDfFlGNBeu', NULL, NULL, 1),
(6, 'Imrul', 'Hasan', 'fahadbillah@yahoo.com', 3432424, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'G06xhEwZdpDIBtjH1BSozZbMQmzjWWTYrques3b2', NULL, '432432', NULL, '2015-01-14 07:21:36', NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(7, 'asdfasdf', 'asdfasdf', 'aws@fullserivceplatform.com', 345345345, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'xyhWgE8u2ml0lL7j9rcLVvMdEyB0LFSXfrkrzXai', NULL, '2342342', NULL, '2015-01-14 07:22:11', NULL, NULL, NULL, NULL, 'IQ6Q8amXOw', NULL, NULL, 1),
(8, 'fahad', 'asdfasdf', 'fahadbillah@yahoo.com', 12311222, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'qt1RBbEMCEF4rsN4yIfBU0K3ZrweKAgvEydHGW4a', NULL, '90302930', NULL, '2015-01-15 06:49:11', NULL, NULL, NULL, NULL, 'jP5KvOWMIZ', NULL, NULL, NULL),
(9, 'fahad', 'asdfasdf', 'fahadbillah@yahoo.com', 3333333, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'MBQnGaSO4sL91Hjm9BTUwpkLJOYpT3GMBPMoWn7b', NULL, '90302930', NULL, '2015-01-15 06:54:08', NULL, NULL, NULL, NULL, 'up2Cm8oG9h', NULL, NULL, NULL),
(10, 'asdf', 'asdf', 'fahadbillah@yahoo.com', 23468, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'Qr6DkUj6Cqg7skqL4uMD9dMPWnpV9j810RUJdne8', NULL, '123123', NULL, '2015-01-15 07:09:41', NULL, NULL, NULL, NULL, 'ZG2O49OTFB', NULL, NULL, NULL),
(11, 'ddd', 'ddd', 'fahadbillah@yahoo.com', 33, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '46b6jzmzIf0CMfm5ta8lg5xc6Bj1tOEEljipbbrb', NULL, '333', NULL, '2015-01-15 07:52:19', NULL, NULL, NULL, NULL, 'X2Ph8XFxGy', NULL, NULL, NULL),
(12, 'dd', 'ddd', 'mush_iory@yahoo.com', 333, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'q6lbxCwUFuXwGEeKTBtN9jenOdCKIkfAc5b77s25', NULL, 'asdfas', NULL, '2015-01-15 08:03:50', NULL, NULL, NULL, NULL, 'NVTG6slDmw', NULL, NULL, NULL),
(13, 'sdfsd', 'slkfdj', 'fahadbillah@yahoo.com', 23, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '0gCvHGkaDADuTbmq3dQsdSXyZT2bsuUicnVokMWp', NULL, '23333', NULL, '2015-01-15 09:16:32', NULL, NULL, NULL, NULL, 'qpiQBuODrK', NULL, 1, NULL),
(14, 'djfdjdjjd', 'd', 'fahadbillah@yahoo.com', 34577, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '2l8pTKJweJZXh9RjJkPFP8RCiTqhksudEavwuRtO', NULL, '123222', NULL, '2015-01-15 09:29:13', NULL, NULL, NULL, NULL, 'zTQb56zcMP', NULL, NULL, NULL),
(19, 'fasdf', 'asdf', 'fahadbillah@yahoo.com', 111, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'nFrlWU55LUoyzZSPAZtwwhFIAFp1vwbwvGYNitdX', NULL, '12312', NULL, '2015-01-19 08:44:21', NULL, NULL, NULL, NULL, '7MTAETtN9H', NULL, NULL, NULL),
(20, '123', '123', 'fahadbillah@yahoo.com', 123123, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'jYyGktAQZAGC0Fj4BxqPuywXTzx3xUYeCrL4StpE', NULL, '123', NULL, '2015-01-19 09:32:05', NULL, NULL, NULL, NULL, 'wTRAh0BYmG', NULL, NULL, NULL),
(21, '2343', '234', 'fahadbillah@yahoo.com', 234, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'fZI93INuF5mIiWlpECfFWZ16Vn7MNDyjg5KNyBHO', NULL, '1234', NULL, '2015-01-19 09:34:01', NULL, NULL, NULL, NULL, 'owRs0Fdk6p', NULL, NULL, NULL),
(22, '12321221', '2121', 'fahadbillah@yahoo.com', 1212, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'ifvgsJqTwVtMlOfEeQQI30RH8LmPl4YP0pMTYKnK', NULL, '1231', NULL, '2015-01-19 09:36:46', NULL, NULL, NULL, NULL, 'AyQCHNNdDW', NULL, NULL, NULL),
(23, 'sdafsdf', 'asfasf', 'fahadbillah@yahoo.com', 66, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'UtbfbcXIFpkRuk6BdFFsWDQmhYYNiSUJB50DiN4s', NULL, '123', NULL, '2015-01-19 09:48:56', NULL, NULL, NULL, NULL, 'YKtHH84j6I', NULL, NULL, NULL);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=95 ;

--
-- Dumping data for table `user_answers`
--

INSERT INTO `user_answers` (`user_answer_id`, `user_id`, `survey_answer_id`, `create_date`, `survey_question_id`, `other_answer`) VALUES
(33, 13, NULL, '2015-01-15 09:23:14', 1, 'yes'),
(34, 13, NULL, '2015-01-15 09:23:14', 2, 'no'),
(35, 13, 2, '2015-01-15 09:23:25', 3, NULL),
(36, 13, 1, '2015-01-15 09:23:25', 3, NULL),
(37, 13, 3, '2015-01-15 09:23:25', 4, NULL),
(38, 13, 4, '2015-01-15 09:23:25', 4, NULL),
(39, 13, NULL, '2015-01-15 09:25:37', 2, 'sdf'),
(40, 13, NULL, '2015-01-15 09:25:37', 1, 'asdf'),
(41, 13, 4, '2015-01-15 09:28:12', 4, NULL),
(42, 13, 3, '2015-01-15 09:28:12', 4, NULL),
(43, 13, 1, '2015-01-15 09:28:12', 3, NULL),
(45, 14, NULL, '2015-01-15 09:29:35', 1, 'as'),
(46, 14, NULL, '2015-01-15 09:31:12', 1, 'as'),
(47, 14, NULL, '2015-01-15 09:31:17', 2, 'ddd'),
(48, 14, NULL, '2015-01-15 09:31:17', 1, 'sdf'),
(49, 14, 3, '2015-01-15 09:32:22', 4, NULL),
(50, 14, 2, '2015-01-15 09:32:22', 3, NULL),
(51, 14, NULL, '2015-01-15 09:32:56', 1, 'sdf'),
(52, 14, NULL, '2015-01-15 09:32:56', 2, 'dd'),
(53, 14, 4, '2015-01-15 09:33:27', 4, NULL),
(54, 14, 2, '2015-01-15 09:33:27', 3, NULL),
(55, 14, NULL, '2015-01-15 09:44:24', 1, 'sdf'),
(56, 14, NULL, '2015-01-15 09:44:24', 2, 'd'),
(57, 14, 2, '2015-01-15 09:44:39', 3, NULL),
(58, 14, 3, '2015-01-15 09:44:39', 4, NULL),
(59, 14, NULL, '2015-01-15 09:45:13', 2, 'dd'),
(60, 14, NULL, '2015-01-15 09:45:13', 1, 'sdf'),
(61, 14, 2, '2015-01-15 09:45:17', 3, NULL),
(62, 14, 4, '2015-01-15 09:45:17', 4, NULL),
(63, 14, NULL, '2015-01-15 10:18:11', 2, 'ddd'),
(64, 14, NULL, '2015-01-15 10:18:11', 1, 'sss'),
(65, 14, 4, '2015-01-15 10:18:14', 4, NULL),
(66, 14, 2, '2015-01-15 10:18:14', 3, NULL),
(67, 14, NULL, '2015-01-15 10:18:30', 1, 'sd'),
(68, 14, NULL, '2015-01-15 10:18:30', 2, 'dd'),
(69, 14, NULL, '2015-01-15 10:20:22', 1, 'sdfsd'),
(70, 14, NULL, '2015-01-15 10:20:22', 2, 'eee'),
(71, 14, 1, '2015-01-15 10:20:37', 3, NULL),
(72, 14, 4, '2015-01-15 10:20:37', 4, NULL),
(73, 14, NULL, '2015-01-15 10:20:49', 2, 'dd'),
(74, 14, NULL, '2015-01-15 10:20:49', 1, 'sdf'),
(75, 14, 3, '2015-01-15 10:20:55', 4, NULL),
(76, 14, 2, '2015-01-15 10:20:55', 3, NULL),
(77, 14, NULL, '2015-01-15 10:21:27', 2, 'd'),
(78, 14, NULL, '2015-01-15 10:21:27', 1, 'd'),
(79, 14, 2, '2015-01-15 10:21:30', 3, NULL),
(80, 14, 4, '2015-01-15 10:21:30', 4, NULL),
(81, 14, NULL, '2015-01-15 10:22:10', 1, 'sdf'),
(82, 14, NULL, '2015-01-15 10:22:10', 2, 'd'),
(83, 14, 2, '2015-01-15 10:22:13', 3, NULL),
(84, 14, 3, '2015-01-15 10:22:13', 4, NULL),
(85, 14, NULL, '2015-01-15 11:04:14', 1, 'Yeah'),
(86, 14, NULL, '2015-01-15 11:04:14', 2, 'yesterday'),
(87, 14, 2, '2015-01-15 11:04:27', 3, NULL),
(88, 14, 1, '2015-01-15 11:04:27', 3, NULL),
(89, 14, 3, '2015-01-15 11:04:27', 4, NULL),
(90, 14, NULL, '2015-01-15 12:20:25', 1, 'dodood'),
(91, 14, NULL, '2015-01-15 12:20:25', 2, 'dooddoo'),
(92, 14, 1, '2015-01-15 12:20:32', 3, NULL),
(93, 14, 2, '2015-01-15 12:20:32', 3, NULL),
(94, 14, 3, '2015-01-15 12:20:32', 4, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_work_histories`
--

CREATE TABLE IF NOT EXISTS `user_work_histories` (
  `user_work_history_id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(2) DEFAULT NULL,
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `user_work_histories`
--

INSERT INTO `user_work_histories` (`user_work_history_id`, `type`, `office`, `designation`, `from`, `to`, `job_description`, `current`, `create_date`, `update_date`, `office_phone`, `user_id`) VALUES
(1, 1, NULL, '2', NULL, NULL, NULL, NULL, '2015-01-19 08:44:21', NULL, NULL, 19),
(2, 2, NULL, '21', NULL, NULL, NULL, NULL, '2015-01-19 09:32:05', NULL, NULL, 20),
(3, 1, NULL, '11', NULL, NULL, NULL, NULL, '2015-01-19 09:34:01', NULL, NULL, 21),
(4, 1, NULL, '23', NULL, NULL, NULL, NULL, '2015-01-19 09:36:46', NULL, NULL, 22),
(5, 2, NULL, '18', NULL, NULL, NULL, NULL, '2015-01-19 09:48:56', NULL, NULL, 23);

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

--
-- Constraints for table `user_work_histories`
--
ALTER TABLE `user_work_histories`
  ADD CONSTRAINT `user_work_histories_ibfk_1` FOREIGN KEY (`type`) REFERENCES `work_types` (`work_type_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
