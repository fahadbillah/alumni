-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 14, 2015 at 12:51 PM
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
('18c22d8e5470113e31e2af76e54cbf60', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36', 1421223916, ''),
('3c3b924531d7d29a8f9af7a0b5f8fa55', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36', 1421224046, ''),
('4a07ce5d24c64c9bcf946b989634875d', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36', 1421235136, ''),
('6fc06b1cbece4ed6654a563a47b77925', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36', 1421235354, ''),
('d7a9e17f22f45b6b6ba3d121dbbcfc19', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36', 1421235354, '');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email`, `nsu_id`, `password`, `token`, `about_me`, `phone`, `dob`, `create_date`, `update_date`, `facebook_link`, `twitter_link`, `linkedin_link`, `referral_link`, `profile_pic`, `admin`, `referer`) VALUES
(1, 'Fahad', 'Billah', 'fahadbillah@yahoo.com', 930527542, 'e56634f5dc0b8c94c3c5cd821d4b05cb1e1d6659', 'wwACZWLcraKrngKbKPtJ1YaYahvfEQKnrfBI1Bg6', NULL, '01966662623', NULL, '2015-01-14 06:29:47', NULL, NULL, NULL, NULL, 'luuTT0tUCK', NULL, NULL, NULL),
(2, 'new', 'user', 'fahadbillah@hotmail.com', 213324, 'ab79183da678135ebeec248868975f3fe3341453', '57nua7JXR2vdDXU4ttGTRG1wJbFiy3P3kUd9vQ2q', NULL, '2134243', NULL, '2015-01-14 07:00:59', NULL, NULL, NULL, NULL, '4q3dsLrnFs', NULL, NULL, NULL),
(3, 'asdf', 'safd', 'fahadbillah@yahoo.com', 234234, '37a45f631c7818e1ec5e1a54e4e63c065d634339', 'huPsWJBSpbiphxgxF3ld9pSWQQIEj5dPEkbstj0Y', NULL, '234234234', NULL, '2015-01-14 07:01:48', NULL, NULL, NULL, NULL, 'ReumqQ06ek', NULL, NULL, NULL),
(4, 'fa', 'fas', 'fahadbillah@yahoo.com', 32343444, 'b128ad5d957a28155d7bd4a21191397cf6bf7c5e', '1klk7UaV2yJ4vAwPJRvPrJ89R1omH4JBaK8q0n4X', NULL, '324234', NULL, '2015-01-14 07:03:17', NULL, NULL, NULL, NULL, 'pPvL6pUXkY', NULL, NULL, NULL),
(5, 'asdfasdf', 'adsfasdf', 'fahadbillah@yahoo.com', 4444, '2653d4e6091ed9531a56075a7423765951ffa6f8', 'OHztDsbEuhGxtlV6bpgPIFvGFQ277aG7FkN9pAca', NULL, '234234', NULL, '2015-01-14 07:15:36', NULL, NULL, NULL, NULL, 'WDfFlGNBeu', NULL, NULL, 1),
(6, 'Imrul', 'Hasan', 'fahadbillah@yahoo.com', 3432424, '317fc1df9b0f780d37aac67f92729dd474e49983', 'G06xhEwZdpDIBtjH1BSozZbMQmzjWWTYrques3b2', NULL, '432432', NULL, '2015-01-14 07:21:36', NULL, NULL, NULL, NULL, 'zxmSS6PIYs', NULL, NULL, NULL),
(7, 'asdfasdf', 'asdfasdf', 'aws@fullserivceplatform.com', 345345345, '7e488395ea3aebef00ca22588591775559cc61c8', 'xyhWgE8u2ml0lL7j9rcLVvMdEyB0LFSXfrkrzXai', NULL, '2342342', NULL, '2015-01-14 07:22:11', NULL, NULL, NULL, NULL, 'IQ6Q8amXOw', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_answers`
--

CREATE TABLE IF NOT EXISTS `user_answers` (
  `user_answer_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `survey_answer_id` int(11) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `servey_question_id` int(11) DEFAULT NULL,
  `other_answer` mediumtext,
  PRIMARY KEY (`user_answer_id`),
  KEY `user_id` (`user_id`),
  KEY `survey_answer_id` (`survey_answer_id`),
  KEY `servey_question_id` (`servey_question_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
  ADD CONSTRAINT `user_answers_ibfk_3` FOREIGN KEY (`servey_question_id`) REFERENCES `survey_questions` (`survey_question_id`),
  ADD CONSTRAINT `user_answers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `user_answers_ibfk_2` FOREIGN KEY (`survey_answer_id`) REFERENCES `survey_answers` (`survey_answer_id`);

--
-- Constraints for table `user_work_histories`
--
ALTER TABLE `user_work_histories`
  ADD CONSTRAINT `user_work_histories_ibfk_1` FOREIGN KEY (`type`) REFERENCES `work_types` (`work_type_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
