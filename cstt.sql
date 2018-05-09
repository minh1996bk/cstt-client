-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 09, 2018 at 10:23 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cstt`
--

-- --------------------------------------------------------

--
-- Table structure for table `archive`
--

CREATE TABLE `archive` (
  `id` int(11) NOT NULL,
  `createdAt` bigint(20) DEFAULT NULL,
  `fromModel` varchar(255) DEFAULT NULL,
  `originalRecord` longtext,
  `originalRecordId` longtext
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`createdAt`, `updatedAt`, `id`, `name`, `type`) VALUES
(1525840675067, 1525840675067, 1, 'lá có vết đốm màu vàng cam', 'benh'),
(1525840769596, 1525840769596, 2, 'vết lan rộng ra toàn lá', 'benh'),
(1525840839050, 1525840839050, 3, 'bẹ lá có vết đốm', 'benh'),
(1525840885254, 1525840885254, 4, 'lá cây bị xoắn', 'benh'),
(1525840915076, 1525840915076, 5, 'trổ bông muộn', 'benh'),
(1525840970600, 1525840970600, 6, 'chậm phát triển', 'benh'),
(1525841148582, 1525841148582, 7, 'đốm màu xanh xám', 'benh'),
(1525841148654, 1525841148654, 8, 'đốm kích thước nhỏ', 'benh'),
(1525841496345, 1525841496345, 9, 'đốm hình thoi', 'benh'),
(1525841578366, 1525841578366, 10, 'các đốm lan ra', 'benh'),
(1525841609542, 1525841609542, 11, 'lá bị cháy khô', 'benh'),
(1525841771829, 1525841771829, 12, 'cây lúa bị lụi xuống', 'benh'),
(1525841954440, 1525841954440, 13, 'bọ giấy nhiều', 'benh'),
(1525842087797, 1525842087797, 14, 'bọ xuất hiện ở thân', 'benh'),
(1525842170164, 1525842170164, 15, 'thân lúa bị hút khô', 'benh'),
(1525842266886, 1525842266886, 16, 'thân chuyển sang màu nâu', 'benh'),
(1525842313476, 1525842313476, 17, 'lá bị sâu hút', 'benh'),
(1525842347306, 1525842347306, 18, 'cuốn làm tổ', 'benh'),
(1525842511683, 1525842511683, 19, 'lá bị khô héo, hỏng', 'benh'),
(1525842548560, 1525842548560, 20, 'lá lớn bị sâu làm tổ', 'benh'),
(1525842585737, 1525842585737, 21, 'cây bị gập lại', 'benh'),
(1525843415125, 1525843415125, 22, 'viện lúa ĐBSCL', 'giong'),
(1525843415234, 1525843415234, 23, 'Giống phổ biến nhất', 'giong'),
(1525843415351, 1525843415351, 24, 'Canh tác ĐBSCL', 'giong'),
(1525843415435, 1525843415435, 25, '3 vụ', 'giong'),
(1525843415551, 1525843415551, 26, 'chịu phèn, chịu mặn', 'giong'),
(1525843415693, 1525843415693, 27, 'chống rầy nâu', 'giong'),
(1525843415831, 1525843415831, 28, 'chống đạo ôn', 'giong'),
(1525843415898, 1525843415898, 29, 'ít bệnh', 'giong'),
(1525843415969, 1525843415969, 30, 'sản lượng trung bình', 'giong'),
(1525843416052, 1525843416052, 31, 'thời gian sinh trưởng trung bình', 'giong'),
(1525843416127, 1525843416127, 32, 'cơm có mùi thơm', 'giong'),
(1525843416202, 1525843416202, 33, 'cơm dẻo', 'giong'),
(1525843416283, 1525843416283, 34, 'hạt gạo dài', 'giong'),
(1525846163153, 1525846163153, 35, 'cứng cây', 'giong'),
(1525846163281, 1525846163281, 36, 'kháng bệnh', 'giong'),
(1525846163363, 1525846163363, 37, 'sản lượng cao', 'giong'),
(1525846163441, 1525846163441, 38, 'hàm lượng sắt cao', 'giong'),
(1525846163518, 1525846163518, 39, 'ít bạc bụng', 'giong'),
(1525846163594, 1525846163594, 40, 'thời gian sinh trưởng khá dài', 'giong'),
(1525846350430, 1525846350430, 41, 'đồng bằng sông cửu long', 'giong'),
(1525846350520, 1525846350520, 42, 'vỏ trấu mỏng', 'giong'),
(1525846350590, 1525846350590, 43, 'dễ bị cháy lá', 'giong'),
(1525846350670, 1525846350670, 44, 'chịu phèn nhẹ', 'giong'),
(1525846517797, 1525846517797, 45, 'đồng bằng sông cửu long và đông nam bộ', 'giong'),
(1525846517906, 1525846517906, 46, 'vụ hè thu', 'giong'),
(1525846518027, 1525846518027, 47, 'vụ đông', 'giong'),
(1525846518110, 1525846518110, 48, 'chịu mặn tương đối', 'giong'),
(1525846518186, 1525846518186, 49, 'chịu rầy nâu, đạo ôn bạc lá', 'giong'),
(1525846518268, 1525846518268, 50, 'sản lượng vừa', 'giong'),
(1525846518341, 1525846518341, 51, 'cơm thơm mềm', 'giong'),
(1525846518421, 1525846518421, 52, 'hạt dài giàu protein', 'giong'),
(1525846711537, 1525846711537, 53, 'đồng tháp', 'giong'),
(1525846711617, 1525846711617, 54, 'vụ đông xuân', 'giong'),
(1525846711696, 1525846711696, 55, 'chịu phèn khá', 'giong'),
(1525846711768, 1525846711768, 56, 'chịu rầy nâu', 'giong'),
(1525846834001, 1525846834001, 57, 'gạo tốt', 'giong'),
(1525847001233, 1525847001233, 58, 'thời gian sinh trưởng ngắn', 'giong'),
(1525847001331, 1525847001331, 59, 'chịu bệnh tốt', 'giong'),
(1525847440559, 1525847440559, 60, 'hạt trong', 'giong'),
(1525847546237, 1525847546237, 61, 'chịu phèn cao', 'giong'),
(1525847546342, 1525847546342, 62, 'gạo chắc', 'giong'),
(1525849566326, 1525849566326, 63, 'đặc sản', 'giong'),
(1525849681191, 1525849681191, 64, 'hạt nhỏ, dài', 'giong'),
(1525849808127, 1525849808127, 65, 'bảy núi an giang', 'giong'),
(1525849808249, 1525849808249, 66, 'sản lượng thấp', 'giong'),
(1525849808353, 1525849808353, 67, 'thời gian sinh trưởng dài', 'giong'),
(1525849808431, 1525849808431, 68, 'gạo chất lượng tốt', 'giong'),
(1525849808542, 1525849808542, 69, 'không sử dụng thuốc bảo vệ thực vật', 'giong'),
(1525850009458, 1525850009458, 70, 'đồng bằng sông hồng và trung bộ', 'giong'),
(1525850009547, 1525850009547, 71, 'đồng bằng sông hồng', 'giong'),
(1525850009603, 1525850009603, 72, 'trung bộ', 'giong'),
(1525850009673, 1525850009673, 73, 'vụ xuân', 'giong'),
(1525850009736, 1525850009736, 74, 'vụ mùa', 'giong'),
(1525850009797, 1525850009797, 75, 'chụi rét khá', 'giong'),
(1525850009859, 1525850009859, 76, 'nhiễm nhẹ đạo ôn', 'giong'),
(1525850009927, 1525850009927, 77, 'nhiễm vừa rầy nâu', 'giong'),
(1525850010038, 1525850010038, 78, 'nhiễm vừa bạc lá', 'giong'),
(1525850010167, 1525850010167, 79, 'gạo trong không bạc bụng', 'giong'),
(1525850139673, 1525850139673, 80, 'chiu rét khá', 'giong'),
(1525850139731, 1525850139731, 81, 'chịu nóng', 'giong'),
(1525850139811, 1525850139811, 82, 'chất lượng gạo khá', 'giong'),
(1525850295019, 1525850295019, 83, 'chống đổ trung bình', 'giong'),
(1525850295091, 1525850295091, 84, 'nhiễm nhẹ rầy nâu', 'giong'),
(1525850295155, 1525850295155, 85, 'nhiễm nhẹ bạc lá', 'giong'),
(1525850295224, 1525850295224, 86, 'ít nhiễm đạo ôn', 'giong'),
(1525850295301, 1525850295301, 87, 'cơm mềm dẻo', 'giong'),
(1525850295411, 1525850295411, 88, 'hạt gạo trong', 'giong'),
(1525850295517, 1525850295517, 89, 'gạo ít bạc bụng', 'giong'),
(1525850465868, 1525850465868, 90, 'bắc trung bộ', 'giong'),
(1525850465961, 1525850465961, 91, 'chịu rét', 'giong'),
(1525850466053, 1525850466053, 92, 'chống khô vằn', 'giong'),
(1525850466120, 1525850466120, 93, 'cơm thơm ngon', 'giong'),
(1525850687472, 1525850687472, 94, 'chống đổ', 'giong'),
(1525850687540, 1525850687540, 95, 'chịu đạo ôn', 'giong'),
(1525850687599, 1525850687599, 96, 'chống bạc lá', 'giong');

-- --------------------------------------------------------

--
-- Table structure for table `events_facts__fact_events`
--

CREATE TABLE `events_facts__fact_events` (
  `id` int(11) NOT NULL,
  `events_facts` int(11) DEFAULT NULL,
  `fact_events` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `events_results__result_events`
--

CREATE TABLE `events_results__result_events` (
  `id` int(11) NOT NULL,
  `events_results` int(11) DEFAULT NULL,
  `result_events` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events_results__result_events`
--

INSERT INTO `events_results__result_events` (`id`, `events_results`, `result_events`) VALUES
(1, 1, 1),
(2, 1, 1),
(3, 2, 1),
(4, 1, 1),
(5, 2, 1),
(6, 3, 1),
(7, 4, 2),
(8, 4, 2),
(9, 5, 2),
(10, 4, 2),
(11, 6, 2),
(12, 4, 2),
(13, 6, 2),
(14, 5, 2),
(15, 3, 3),
(16, 3, 3),
(17, 7, 3),
(18, 8, 3),
(19, 3, 3),
(20, 7, 3),
(21, 3, 3),
(22, 8, 3),
(23, 9, 4),
(24, 9, 4),
(25, 10, 4),
(26, 9, 4),
(27, 11, 4),
(28, 9, 4),
(29, 10, 4),
(30, 9, 4),
(31, 10, 4),
(32, 11, 4),
(33, 11, 4),
(34, 12, 4),
(35, 10, 4),
(36, 13, 5),
(37, 13, 5),
(38, 14, 5),
(39, 13, 5),
(40, 15, 5),
(41, 13, 5),
(42, 14, 5),
(43, 15, 5),
(44, 13, 5),
(45, 15, 5),
(46, 16, 5),
(47, 17, 6),
(48, 17, 6),
(49, 18, 6),
(50, 18, 6),
(51, 17, 6),
(52, 18, 6),
(53, 19, 6),
(54, 18, 6),
(55, 17, 6),
(56, 20, 7),
(57, 21, 7),
(58, 20, 7),
(59, 22, 8),
(60, 23, 8),
(61, 24, 8),
(62, 25, 8),
(63, 26, 8),
(64, 27, 8),
(65, 28, 8),
(66, 29, 8),
(67, 30, 8),
(68, 31, 8),
(69, 32, 8),
(70, 33, 8),
(71, 34, 8),
(72, 23, 9),
(73, 25, 9),
(74, 26, 9),
(75, 35, 9),
(76, 36, 9),
(77, 37, 9),
(78, 38, 9),
(79, 39, 9),
(80, 40, 9),
(81, 33, 9),
(82, 23, 10),
(83, 41, 10),
(84, 25, 10),
(85, 30, 10),
(86, 34, 10),
(87, 42, 10),
(88, 43, 10),
(89, 44, 10),
(90, 31, 10),
(91, 45, 11),
(92, 46, 11),
(93, 47, 11),
(94, 48, 11),
(95, 49, 11),
(96, 50, 11),
(97, 51, 11),
(98, 52, 11),
(99, 31, 11),
(100, 53, 12),
(101, 46, 12),
(102, 54, 12),
(103, 35, 12),
(104, 55, 12),
(105, 56, 12),
(106, 30, 12),
(107, 31, 12),
(108, 34, 12),
(109, 53, 13),
(110, 25, 13),
(111, 26, 13),
(112, 30, 13),
(113, 31, 13),
(114, 57, 13),
(115, 32, 13),
(116, 39, 13),
(117, 56, 13),
(118, 53, 14),
(119, 25, 14),
(120, 44, 14),
(121, 27, 14),
(122, 50, 14),
(123, 58, 14),
(124, 51, 14),
(125, 34, 14),
(126, 59, 14),
(127, 53, 15),
(128, 26, 15),
(129, 27, 15),
(130, 28, 15),
(131, 30, 15),
(132, 31, 15),
(133, 51, 15),
(134, 60, 15),
(135, 39, 15),
(136, 41, 16),
(137, 25, 16),
(138, 61, 16),
(139, 27, 16),
(140, 50, 16),
(141, 31, 16),
(142, 62, 16),
(143, 39, 16),
(144, 25, 17),
(145, 41, 17),
(146, 61, 17),
(147, 49, 17),
(148, 34, 17),
(149, 37, 17),
(150, 31, 17),
(151, 41, 11),
(152, 25, 11),
(153, 26, 11),
(154, 49, 11),
(155, 51, 11),
(156, 34, 11),
(157, 40, 11),
(158, 37, 11),
(159, 25, 18),
(160, 41, 18),
(161, 35, 18),
(162, 55, 18),
(163, 30, 18),
(164, 31, 18),
(165, 49, 18),
(166, 51, 18),
(167, 41, 19),
(168, 25, 19),
(169, 50, 19),
(170, 40, 19),
(171, 51, 19),
(172, 63, 19),
(173, 41, 20),
(174, 25, 20),
(175, 50, 20),
(176, 40, 20),
(177, 64, 20),
(178, 51, 20),
(179, 63, 20),
(180, 65, 21),
(181, 63, 21),
(182, 66, 21),
(183, 67, 21),
(184, 68, 21),
(185, 69, 21),
(186, 70, 22),
(187, 71, 22),
(188, 72, 22),
(189, 73, 22),
(190, 74, 22),
(191, 46, 22),
(192, 75, 22),
(193, 76, 22),
(194, 77, 22),
(195, 78, 22),
(196, 30, 22),
(197, 31, 22),
(198, 79, 22),
(199, 71, 23),
(200, 25, 23),
(201, 80, 23),
(202, 81, 23),
(203, 76, 23),
(204, 30, 23),
(205, 31, 23),
(206, 82, 23),
(207, 70, 24),
(208, 73, 24),
(209, 74, 24),
(210, 46, 24),
(211, 80, 24),
(212, 83, 24),
(213, 84, 24),
(214, 85, 24),
(215, 86, 24),
(216, 30, 24),
(217, 31, 24),
(218, 87, 24),
(219, 32, 24),
(220, 88, 24),
(221, 89, 24),
(222, 71, 25),
(223, 90, 25),
(224, 73, 25),
(225, 74, 25),
(226, 91, 25),
(227, 92, 25),
(228, 85, 25),
(229, 93, 25),
(230, 34, 25),
(231, 30, 25),
(232, 31, 25),
(233, 71, 26),
(234, 90, 26),
(235, 73, 26),
(236, 74, 26),
(237, 94, 26),
(238, 91, 26),
(239, 95, 26),
(240, 96, 26),
(241, 92, 26),
(242, 30, 26),
(243, 31, 26),
(244, 51, 26),
(245, 68, 26),
(246, 71, 27),
(247, 90, 27),
(248, 73, 27),
(249, 74, 27),
(250, 94, 27),
(251, 35, 27),
(252, 28, 27),
(253, 56, 27),
(254, 96, 27),
(255, 37, 27),
(256, 31, 27),
(257, 93, 27),
(258, 71, 28),
(259, 92, 28),
(260, 85, 28),
(261, 73, 28),
(262, 74, 28),
(263, 37, 28),
(264, 31, 28),
(265, 68, 28),
(266, 32, 28),
(267, 71, 29),
(268, 73, 29),
(269, 74, 29),
(270, 35, 29),
(271, 91, 29),
(272, 76, 29),
(273, 85, 29),
(274, 84, 29),
(275, 30, 29),
(276, 31, 29),
(277, 87, 29),
(278, 57, 29),
(279, 71, 30),
(280, 73, 30),
(281, 74, 30),
(282, 35, 30),
(283, 94, 30),
(284, 96, 30),
(285, 28, 30),
(286, 27, 30),
(287, 30, 30),
(288, 40, 30),
(289, 87, 30),
(290, 68, 30);

-- --------------------------------------------------------

--
-- Table structure for table `events_rules__rule_events`
--

CREATE TABLE `events_rules__rule_events` (
  `id` int(11) NOT NULL,
  `events_rules` int(11) DEFAULT NULL,
  `rule_events` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events_rules__rule_events`
--

INSERT INTO `events_rules__rule_events` (`id`, `events_rules`, `rule_events`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 2),
(4, 1, 3),
(5, 2, 3),
(6, 3, 3),
(7, 4, 4),
(8, 4, 5),
(9, 5, 5),
(10, 4, 6),
(11, 6, 6),
(12, 4, 7),
(13, 6, 7),
(14, 5, 7),
(15, 3, 8),
(16, 3, 9),
(17, 7, 9),
(18, 8, 9),
(19, 3, 10),
(20, 7, 10),
(21, 3, 11),
(22, 8, 11),
(23, 9, 12),
(24, 9, 13),
(25, 10, 13),
(26, 9, 14),
(27, 11, 14),
(28, 9, 15),
(29, 10, 15),
(30, 9, 16),
(31, 10, 16),
(32, 11, 16),
(33, 11, 17),
(34, 12, 17),
(35, 10, 17),
(36, 13, 18),
(37, 13, 19),
(38, 14, 19),
(39, 13, 20),
(40, 15, 20),
(41, 13, 21),
(42, 14, 21),
(43, 15, 21),
(44, 13, 22),
(45, 15, 22),
(46, 16, 22),
(47, 17, 23),
(48, 17, 24),
(49, 18, 24),
(50, 18, 25),
(51, 17, 26),
(52, 18, 26),
(53, 19, 27),
(54, 18, 27),
(55, 17, 27),
(56, 20, 28),
(57, 21, 29),
(58, 20, 29),
(59, 22, 30),
(60, 23, 30),
(61, 24, 30),
(62, 25, 30),
(63, 26, 30),
(64, 27, 30),
(65, 28, 30),
(66, 29, 30),
(67, 30, 30),
(68, 31, 30),
(69, 32, 30),
(70, 33, 30),
(71, 34, 30),
(72, 23, 31),
(73, 25, 31),
(74, 26, 31),
(75, 35, 31),
(76, 36, 31),
(77, 37, 31),
(78, 38, 31),
(79, 39, 31),
(80, 40, 31),
(81, 33, 31),
(82, 23, 32),
(83, 41, 32),
(84, 25, 32),
(85, 30, 32),
(86, 34, 32),
(87, 42, 32),
(88, 43, 32),
(89, 44, 32),
(90, 31, 32),
(91, 45, 33),
(92, 46, 33),
(93, 47, 33),
(94, 48, 33),
(95, 49, 33),
(96, 50, 33),
(97, 51, 33),
(98, 52, 33),
(99, 31, 33),
(100, 53, 34),
(101, 46, 34),
(102, 54, 34),
(103, 35, 34),
(104, 55, 34),
(105, 56, 34),
(106, 30, 34),
(107, 31, 34),
(108, 34, 34),
(109, 53, 35),
(110, 25, 35),
(111, 26, 35),
(112, 30, 35),
(113, 31, 35),
(114, 57, 35),
(115, 32, 35),
(116, 39, 35),
(117, 56, 35),
(118, 53, 36),
(119, 25, 36),
(120, 44, 36),
(121, 27, 36),
(122, 50, 36),
(123, 58, 36),
(124, 51, 36),
(125, 34, 36),
(126, 59, 36),
(127, 53, 37),
(128, 26, 37),
(129, 27, 37),
(130, 28, 37),
(131, 30, 37),
(132, 31, 37),
(133, 51, 37),
(134, 60, 37),
(135, 39, 37),
(136, 41, 38),
(137, 25, 38),
(138, 61, 38),
(139, 27, 38),
(140, 50, 38),
(141, 31, 38),
(142, 62, 38),
(143, 39, 38),
(144, 25, 39),
(145, 41, 39),
(146, 61, 39),
(147, 49, 39),
(148, 34, 39),
(149, 37, 39),
(150, 31, 39),
(151, 41, 40),
(152, 25, 40),
(153, 26, 40),
(154, 49, 40),
(155, 51, 40),
(156, 34, 40),
(157, 40, 40),
(158, 37, 40),
(159, 25, 41),
(160, 41, 41),
(161, 35, 41),
(162, 55, 41),
(163, 30, 41),
(164, 31, 41),
(165, 49, 41),
(166, 51, 41),
(167, 41, 42),
(168, 25, 42),
(169, 50, 42),
(170, 40, 42),
(171, 51, 42),
(172, 63, 42),
(173, 41, 43),
(174, 25, 43),
(175, 50, 43),
(176, 40, 43),
(177, 64, 43),
(178, 51, 43),
(179, 63, 43),
(180, 65, 44),
(181, 63, 44),
(182, 66, 44),
(183, 67, 44),
(184, 68, 44),
(185, 69, 44),
(186, 70, 45),
(187, 71, 45),
(188, 72, 45),
(189, 73, 45),
(190, 74, 45),
(191, 46, 45),
(192, 75, 45),
(193, 76, 45),
(194, 77, 45),
(195, 78, 45),
(196, 30, 45),
(197, 31, 45),
(198, 79, 45),
(199, 71, 46),
(200, 25, 46),
(201, 80, 46),
(202, 81, 46),
(203, 76, 46),
(204, 30, 46),
(205, 31, 46),
(206, 82, 46),
(207, 70, 47),
(208, 73, 47),
(209, 74, 47),
(210, 46, 47),
(211, 80, 47),
(212, 83, 47),
(213, 84, 47),
(214, 85, 47),
(215, 86, 47),
(216, 30, 47),
(217, 31, 47),
(218, 87, 47),
(219, 32, 47),
(220, 88, 47),
(221, 89, 47),
(222, 71, 48),
(223, 90, 48),
(224, 73, 48),
(225, 74, 48),
(226, 91, 48),
(227, 92, 48),
(228, 85, 48),
(229, 93, 48),
(230, 34, 48),
(231, 30, 48),
(232, 31, 48),
(233, 71, 49),
(234, 90, 49),
(235, 73, 49),
(236, 74, 49),
(237, 94, 49),
(238, 91, 49),
(239, 95, 49),
(240, 96, 49),
(241, 92, 49),
(242, 30, 49),
(243, 31, 49),
(244, 51, 49),
(245, 68, 49),
(246, 71, 50),
(247, 90, 50),
(248, 73, 50),
(249, 74, 50),
(250, 94, 50),
(251, 35, 50),
(252, 28, 50),
(253, 56, 50),
(254, 96, 50),
(255, 37, 50),
(256, 31, 50),
(257, 93, 50),
(258, 71, 51),
(259, 92, 51),
(260, 85, 51),
(261, 73, 51),
(262, 74, 51),
(263, 37, 51),
(264, 31, 51),
(265, 68, 51),
(266, 32, 51),
(267, 71, 52),
(268, 73, 52),
(269, 74, 52),
(270, 35, 52),
(271, 91, 52),
(272, 76, 52),
(273, 85, 52),
(274, 84, 52),
(275, 30, 52),
(276, 31, 52),
(277, 87, 52),
(278, 57, 52),
(279, 71, 53),
(280, 73, 53),
(281, 74, 53),
(282, 35, 53),
(283, 94, 54),
(284, 96, 54),
(285, 28, 54),
(286, 27, 54),
(287, 30, 54),
(288, 40, 54),
(289, 87, 54),
(290, 68, 54);

-- --------------------------------------------------------

--
-- Table structure for table `event_facts__fact_events`
--

CREATE TABLE `event_facts__fact_events` (
  `id` int(11) NOT NULL,
  `event_facts` int(11) DEFAULT NULL,
  `fact_events` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `event_rules__rule_events`
--

CREATE TABLE `event_rules__rule_events` (
  `id` int(11) NOT NULL,
  `event_rules` int(11) DEFAULT NULL,
  `rule_events` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `fact`
--

CREATE TABLE `fact` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `newevent` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `contact` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fact`
--

INSERT INTO `fact` (`createdAt`, `updatedAt`, `id`, `type`, `newevent`, `contact`) VALUES
(1525842629116, 1525842629116, 1, 'benh', 'cây bị gập lại', ''),
(1525852332915, 1525852332915, 2, 'benh', 'vết lan rộng ra toàn lá', '');

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `solution` longtext CHARACTER SET utf8 COLLATE utf8_vietnamese_ci
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`createdAt`, `updatedAt`, `id`, `name`, `type`, `solution`) VALUES
(1525840674987, 1525851638517, 1, 'vàng lá lúa', 'benh', 'Sử dụng các giống lúa cứng cây, tán lá thẳng.\r+ Các ruộng cọ bị bệnh cần được vệ sinh sạch nguồn rơm rạ hoặc đốt sau khi thu hoạch.\r+ Bón phân cân đối NPK và không bón quá nhiều phân đạm.\r+Sử dụng một số loại thuốc trị nấm bệnh ở giai đoạn trước khi trổ hoặc khi vết bệnh mới xuất hiện.\r+Các thuốc hóa học có thể hạn chế sự gây hại của bệnh vàng lá gồm Benlate, Anvil, Derosal và copper B.'),
(1525840885187, 1525851700325, 2, 'lùn xoắn lá', 'benh', 'Sử dụng các giống lúa kháng rầy nâu.\r+Khi bệnh mới xuất hiện cần nhổ bỏ để tránh lây lan.\r+Vệ sinh đồng ruộng, cày ải diệt lúa chét vì là nguồn bệnh cho vụ sau.\r+Thời vụ sạ đồng loạt cây lúa sinh trưởng đồng đều hạn chế sự di chuyển của côn trùng môi giới.\r+Bố trí sản xuất luân canh hai lúa một màu.\r+Phân bón cân đối hợp lý.\r+Dùng các biện pháp hoá học phòng trị rầy nâu như applaud, Bassa, Mipcin. Áp dụng tiêu chuẩn 4 đúng trong bảo vệ thực vật.'),
(1525841085395, 1525851769347, 3, 'bệnh đốm vằn', 'benh', 'Làm cỏ xung quanh ruộng, trong ruộng và kênh mương dẫn nước.\r+Gieo sạ với mật độ thích hợp (150-200 kg/ha sạ bằng tay, 80-100 kg/ha sạ bằng máy sạ hàng).\r+Sử dụng phân bón thích hợp (dùng bảng so màu là lúa, bón phân cân đối theo quy trình bón phân).\r+Sử dụng thuốc hóa học: Validamycin 3DD, 5 DD (SL); Bonanza 100 DD (SL); Monceren 25BTN(WP)'),
(1525841488552, 1525851809844, 4, 'Bệnh đạo ôn', 'benh', 'Phải ngưng bón đạm, không để ruộng bị khô nước. Đồng thời tiến hành phun xịt thuốc ngay.\r+Các loại thuốc sủ dụng : Vifusi 40ND; Fuji-one 40EC; Vihino 40ND; Vikita 50ND,…'),
(1525841954370, 1525851854382, 5, 'bệnh rầy nâu', 'benh', 'Sử dụng giống kháng rầy nâu.\r+Cấy dày vừa phải, bón phân cân đối, thả vịt vào ruộng lúa diệt rầy. Khi mật độ rầy cám từ 18- 27 con/khóm lúa cần phun thuốc diệt rầy.\r+Dùng các loại thuốc Bassa 50EC, Regent 800WP, Trebon 20ND, Mipcin 20WP, rạch hàng lúa để phun. Nếu dùng Actara 25WG thì không cần rạch hàng nhưng vẫn phải phun tập trung vào gốc lúa.'),
(1525842313363, 1525851903461, 6, 'sâu cuốn lá nhỏ', 'benh', 'Vệ sinh đồng ruộng, diệt trừ cỏ dại là nơi trú ngụ qua đông.\r+Cấy dày vừa phải. Chăm sóc bón phân hợp lý.\r+Bẫy đèn diệt bướm. Thường xuyên kiểm tra đồng ruộng. Khi sâu non có mật độ 9-12 con/m2 (giai đoạn lúa đẻ nhánh), 6-9 con/m2 (lúa làm đòng) cần phun thuốc.\r+Dùng các loại thuốc Padan 95SP, Regent 800WP, Sumithion 50EC, Karate 2.5EC... phun khi sâu còn tuổi 1-2, sâu đã lớn cần phá bao lá trước khi phun mới có hiệu quả.'),
(1525842545633, 1525851926059, 7, 'sâu cuốn lá lớn', 'benh', 'Gieo cấy mật độ vừa phải; chăm sóc bón phân hợp lý.\r+Ruộng bị hại nặng có thể dùng rào tre kéo phá vỡ tổ rồi phun thuốc Regent 800WG, Padan 95SP hoặc Karate 25EC để diệt sâu non. Sau khi phun thuốc chăm sóc tốt để lúa nhanh hồi phục.'),
(1525843415029, 1525853172077, 8, 'OM5451', 'giong', 'Chỉ tiêu\r+OM 5451\r+TGST (ngày)\r+90 – 95\r+Chiều cao (cm)\r+95 – 100\r+Đạo ôn\r+Trung bình\r+Rầy nâu\r+Trung bình\r+Năng suất (tấn/ha)\r+ĐX: 6-8\r+HT: 5-6\r+Đổ ngã\r+Ít\r+Đặc tính khác\r+Chịu phèn mặn khá, ít bệnh vàng lùn, lùn xoắn lá. Thích hợp cả 3 vụ trong năm. Vào gạo tốt.\r+Phẩm chất gạo\r+Gạo dài, trắng, đẹp; cơm có mùi thơm nhẹ, mềm, có độ dẻo.'),
(1525846163057, 1525853181034, 9, 'OM6976', 'giong', 'Giống lúa OM6976 được lai tạo từ tổ hợp lai IR68144/OM997//OM2718///OM2868. Đây là giống có hàm lượng vi chất dinh dưỡng sắt khá cao trong hạt gạo. OM6976 là giống có TGST khoảng 95-97 ngày đối với lúa sạ và 100-105 ngày khi cấy. Giống OM6976 chiều cao cây 100-110 cm, đặc biệt rất cứng cây (cấp 1). Khả năng đẻ nhánh khỏe, đạt 9-11 chồi hữu hiệu/bụi. OM 6976 có bông dài trung bình, từ 25-28 cm, số hạt chắc/bông đạt từ 150-200, đóng hạt dày, hơi dai hạt, hạt thon dài, trọng lượng 1000 hạt khoảng 25-26 gram. Hạt gạo giống lúa OM 6976  đẹp, thon dài,  hàm lượng amylose 24-25%. Điểm nổi bậc về chất lượng gạo của OM6976 là có hàm sắt trong gạo cao (7 mg/kg gạo trắng). Giống lúa OM 6976 có khả năng kháng trung bình rầy nâu (cấp 3-5) và đạo ôn  (cấp 3-5 ), ít bị bệnh VL-LXL. Khả năng chống chịu mặn  3-4 ‰, khả năng  chống chịu phèn khá tốt. Tiềm năng năng suất cao, có thể đạt 9 tấn/ha.'),
(1525846350339, 1525853190907, 10, 'OM4218', 'giong', ' \r+NGUỒN GỐC\r+Giống lúa OM 4218 được chọn từ tổ hợp lai OM 2031/MTL250.\r+Giống được công nhận chính thức theo quyết định số 457/QĐ-TT-CLT ngày 05/11/2010.\r+Thời gian sinh trưởng\r+88 - 92 ngày\r+Chiều cao cây\r+85 - 95 cm\r+Chiều dài hạt\r+7,32 mm\r+Trọng lượng 1000 hạt\r+25 – 26 gram\r+Phẩm chất gạo\r+Hạt gạo dài, trong, vỏ trấu mỏng, tỷ lệ gạo nguyên cao, mềm cơm,\r+Sâu Bệnh\r+Hơi nhiễm bệnh cháy lá (cấp 5), nhiễm rầy nâu (cấp 5 - 7).\r+Năng suất\r+6 – 8 tấn/ha\r+Đặc tính khác\r+Đẻ nhánh khá, dạng hình đẹp; bông dài, hơi giấu bông, lá cờ nhỏ, ngắn.\r+'),
(1525846517712, 1525853437975, 11, 'OM4900', 'giong', 'Giống OM 4900 có thời gian sinh trưởng từ 95-100 ngày, cao 114 cm, thân rạ cứng, khả năng đẻ nhánh khá, số bông trên khóm biến thiên từ 8 đến 12, số hạt chắc trên bông là 156. Trọng lượng 1.000 hạt là 29,8 gram; chiều dài hạt gạo từ 7 đến 7,3 mm; độ bạc bụng cấp 0 (đánh cấp từ 0-9); hàm lượng amylose từ 16- 16,8%; tỷ lê protein đạt 8,4%, có mùi thơm nhẹ. Giống tương đối chịu mặn; chống chịu khá tốt với rầy nâu, đạo ôn và bạc lá. Giống trồng được trong cả vụ hè thu và đông xuân, phù hợp cho vùng đồng bằng sông Cửu Long và Đông Nam bộ, năng suất biến thiên từ 5-7 tấn/ha, gia tăng 10-15% so với các giống đối chứng đang được trồng phổ biến trong vùng'),
(1525846711461, 1525853209748, 12, 'OM6377', 'giong', '1. Nguồn gốc:\r+Giống lúa OM 6377 do Viện Lúa ĐBSCL tạo chọn, có nguồn gốc từ tổ hợp lai IR64/TYPE3-123, từ đó dòng triển vọng được chọn bằng marker. Đây là giống lúa triển vọng mới được giới thiệu.\r+2. Đặc tính:\r+- Thời gian sinh trưởng: 95 -100 ngày.\r+- Chiều cao cây : 85 - 90 cm. Cứng cây, đẻ nhánh khá; lá cờ trung bình, thẳng; bông dài, hơi khoe bông.\r+- Nhiễm Rầy nâu (cấp 4 - 3), hơi kháng cháy lá, kháng vàng lùn.\r+- Năng suất trung bình vụ Đông Xuân: 6- 8 tấn/ ha, Hè Thu: 4,0 - 5,0 tấn/ ha.\r+- Trọng lượng 1000 hạt: 28-29 g.\r+- Hạt dài 7,1 mm; hàm lượng amylose 24,3%. Hạt gạo dài, trong, ít bạc bụng; tỷ lệ hạt chắc cao, gạo đẹp.\r+- Thích nghi cả 2 vụ Đông Xuân và Hè Thu'),
(1525846833904, 1525853218968, 13, 'OM4101', 'giong', 'Nguồn gốc: Tổ hợp lai: OM997/IR56279Thời gian sinh trưởng: 88-92 ngàyĐặc tính nông học: Đẻ nhánh: khá, Dạng hình: đẹp, cao cây: 90-95 cmTính kháng: Rầy nâu: Hơi kháng, đạo ôn: Hơi nhiễm, Năng suất: 6 – 8 tấn/ha.Phẩm chất hạt:  Tốt, ít bạc bụng, tỉ lệ gạo nguyên cao, mềm cơm, đạt tiêu chuẩn xuất khẩu. Tính thích nghi và nhược điểm: Trồng được các vụ trong năm, cứng cây, chống chịu vàng lùn, lùn xoắn lá, nhiễm đạo ôn. '),
(1525847001134, 1525853228420, 14, 'OM5472', 'giong', 'Giống lúa OM 5472: Được chọn từ tổ hợp lai OM 2718/Jasmine85 và mới được được Bộ NN & PTNT công nhận là giống lúa sản xuất thử tại các tỉnh ĐBSCl và Trung bộ trong năm 2009. Giống OM 5472 thích nghi rộng và đã được canh tác nhiều tại các vùng trồng lúa ĐBSCL. Giống OM 5472 có thời gian sinh trưởng của lúa sạ khoảng 90 - 93 ngày trong vụ đông xuân (ĐX), 93-95 ngày trong vụ hè thu (HT), trổ tập trung, chiều cao cây 95 - 105cm. Đây là giống lúa có dạng hình đẹp, tương đối cứng cây, khả năng đẻ nhánh khá, bông đóng hạt dầy, tỉ lệ lép thấp, trọng lượng nghìn hạt từ 26 - 27g, gạo có mùi thơm nhẹ, hạt dài, trong, ít bạc bụng, cơm mềm. Giống OM 5472 chống chịu rầy nâu (RN) và bệnh đạo ôn trung bình. Trong vụ HT 2009 giống OM 5472 bị nhiễm nhẹ bệnh đạo ôn ở đầu vụ, chống chịu bệnh vàng lùn-lùn xoắn lá (VL - LXL) khá. Tiềm năng năng suất của lúa này khá cao và ổn định trong cả hai vụ ĐX và HT, đạt từ 5 đến 8 tấn/ha.'),
(1525847440452, 1525852849197, 15, 'OM5490', 'giong', 'giống lúa rất có triển vọng phát triển tốt ở tỉnh Ðồng Tháp về năng suất, tính chống chịu rầy nâu và bệnh vàng lùn, lợi nhuận thu được từ 18- 22 triệu/ha. Nghiên cứu và xác định được giống lúa thích hợp cho vùng phèn, mặn của tỉnh Trà Vinh, đưa năng suất lúa vùng này từ 2 tấn/ha lên 5 tấn/ha. thời gian sinh trưởng 90-100 ngày phù hợp vùng đầu nguồn lũ, giúp tỉnh tăng khả năng cạnh tranh xuất khẩu lúa gạo.'),
(1525847546148, 1525853239348, 16, 'OM4498', 'giong', 'Chiều cao cây: 110 cm.\r+Thời gian sinh trưởng: 95 ngày. \r+ Đông xuân: 95 ngàv. \r+ Hè thu: 100 ngày\r+Thuộc dạng hình thâm canh cao\r+Khá năng chống chịu sâu bệnh chủ yếu (cấp): Rầy nâu: 5 Đạo ôn: 3\r+Khả năng chống chịu các điều kiện bất thuận, thuộc dạng cây trung bình, chịu phèn cao\r+Năng suất (tấn/ha) : \r+ Cao nhất: 8 t/ha \r+ Trung bình: 5,5 t/ha\r+Chiều dài bông: 26 cm.\r+Số hạt chắc/bông: 100 - 110 -Tỷ lệ lép: 15 - 16%\r+Trọng lượng 1000 hạt: 26 - 26,5 g\r+Dạng hạt thon dài: 7,3 mm \r+ Mầu sắc vỏ trấu: Vàng\r+Dài/rộng: 3,10      - \r+ Độ bạc bụng: 1\r+Tỷ lệ gạo nguyên: 52,4%\r+ Chất lượng gạo xét về hàm lượng amylose cao 24,3%. Độ trở hồ cấp 3 và độ bền gel 43,3 mm. Tỷ lệ gạo nguyên cao.'),
(1525849157146, 1525853251506, 17, 'OM5930', 'giong', 'Thời gian sinh trưởng từ 95 – 100 ngày; chiều cao cây trung bình từ 105 – 110 cm; thân rạ cứng, khả năng đẻ nhánh khá, hạt chắc/ bông cao (150), khối lượng 1.000 hạt 25 – 26 gram; hạt gạo thon dài, chiều dài hạt gạo 7,0 – 7,3 mm, bạc bụng cấp 0, hàm lượng amylose trung bình (22,0 - 22,5 %); tỉ lệ xay xát khá cao, gạo trắng đạt khoảng 70% và gạo nguyên đạt xung quanh 50%. Năng suất trung bình đạt từ 5,0 – 7,0 tấn/ ha; thâm canh cao có thể đạt 7 – 8 tấn/ ha. Kháng cao rầy nâu (cấp 1), hơi kháng đạo ôn (cấp 3).'),
(1525849464021, 1525853449251, 18, 'OM6161', 'giong', 'Giống có thời gian sinh trưởng tương đối ngắn (95-100 ngày); chiều cao cây 102cm; khả năng đẻ nhánh tốt; cứng cây; trọng lượng 1.000 hạt là 27,5gr; đạt năng suất cao (5-7 tấn/ ha); chất lượng gạo tốt, đạt tiêu chuẩn xuất khẩu (hạt gạo thon dài, tỉ lệ bạc bụng rất thấp; tỉ lệ xay chà và gạo nguyên cao; hàm lượng amylose là 19,91% (thấp hơn giống Jasmine 85), cơm dẻo và có mùi thơm nhẹ; phản ứng đối với rầy nâu cấp 3, đối với bệnh đạo ôn cấp 3- 5.\r+\r+ Ưu điểm: khả năng đẻ nhánh tốt; cứng cây; chống chịu rầy nâu và bệnh vàng lùn khá; chất lượng gạo tốt, ngon cơm và có mùi thơm.\r+\r+ Nhược điểm chính: thời gian trổ dài.\r+\r+ Khả năng ứng dụng (thời vụ, vùng gieo trồng thích hợp): giống OM 6161 thích hợp gieo trồng ở cả 2 vụ Đông Xuân và Hè Thu trên nhiều loại đất khác nhau. Giống phát huy tốt tiềm năng năng suất ở những vùng đất phù sa ngọt kể cả những nơi nhiễm phèn nhẹ.'),
(1525849566231, 1525853457781, 19, 'nàng Thơm Chợ Đào', 'giong', 'Giống Nàng Thơm Chợ Đào là giống lúa địa phương trồng trên xã Mỹ Lệ nên còn có tên là Nàng thơm Mỹ Lệ thuộc tỉnh Long An được chọn lọc và giữ giống lâu đời của nông dân vùng đất Long An.\r+Giống Nàng Thơm có ba nhóm. Nàng Thơm sớm, Nàng Thơm lỡ và Nàng Thơm muộn.\r+Giống Nàng Thơm Chợ đào có thời gian sinh trương dài từ 155 đến 165, có tính cảm quang.\r+Chiều cao cây 145 cm.\r+Số bông trên bụi là 11 và độ dài bông 24,6 cm.\r+Giống này có thể trồng trên đất có pH = 5-5,2. Tuy nhiên trên một số vùng đất có độ phì nhiêu thì số hạt chắc trên bông cũng như nàng suất cao hơn, tán lá dài rũ, xòe, đẻ nhánh trung bình.\r+Mùi thơm thay đổ từ cấp 1 đến cấp 5. Cơm mềm, dẻo.\r+Chiều dài 6,3 cm và tỉ lệ dài/ rộng là 2 cm.\r+Hàm lượng amylose 21,26%.\r+Năng suất đạt 3 tấn/ha, trong điều kiện thâm canh, lấp vụ Hè thu, làm chiều cao cây thấp lại, năng suất có thể cao hơn.'),
(1525849681101, 1525853467309, 20, 'Nanh Chồn', 'giong', 'đặc điểm sinh trưởng và tính chống chịu sâu bệnh. Đặc điểm chung của các dòng giống lúa này là thời gian sinh trưởng 152-162 ngày, cao 150-160 cm, gốc thân hơi xòe, yếu rạ, ít nhiễm đạo ôn, nhiễm rầy nâu và bệnh vàng lùn, bông dài 25-27 cm, hạt nhỏ, đuôi hạt nhọn và cong, gạo bạc bụng trung bình, cơm mềm, xốp, có mùi thơm nhẹ.'),
(1525849808050, 1525853502360, 21, 'Nàng Nhen', 'giong', 'Hạt lúa nàng Nhen có màu từ vàng sậm đến vàng có khía nâu, hạt lúa nhỏ, cứng, không bắt mắt. So với các giống lúa khác thu hoạch cùng thời điểm, lúa nàng Nhen thơm Bảy Núi ít bị chim, chuột phá hoại, vì đây là giống lúa bản địa có mùi thơm trên thân lá, giúp kháng sâu bệnh hại, nông dân đỡ vất vả trong khâu thu hoạch và bảo quản.\r+Lúa nàng Nhen thơm Bảy Núi là giống ít có sự thay đổi về: kích thước (tỷ lệ dài/rộng xấp xỉ 3 lần), trọng lượng của 1000 hạt, số bông/bụi và số hạt chắc/bông,… dù có áp dụng chế độ phân bón khác nhau.'),
(1525850009393, 1525853511733, 22, 'PC6', 'giong', '- Thời gian sinh trưởng: Vụ xuân 102-125 ngày , vụ mùa 90-95 ngày.\r+- Chiều cao cây 95-100 cm, chiều dài bông 23.5 cm, số hạt chắc trên bông trung bình đạt 110 hạt. Khối lượng 1000 hạt 22.3 gam. Tỷ lệ gạo xát 68,5%, gạo trong không bac bụng, chiều dài hạt gạo 6,7mm, hàm lượng amylase 18-19%.\r+- Năng suất trung bình đạt 55-60 tạ/ha.\r+- Giống PC6 có khả năng chịu rét khá (điểm 3), nhiễm nhẹ đạo ôn (điểm 3), nhiễm vừa rầy nâu (điểm 5) và bạc lá (điểm 5).'),
(1525850139603, 1525853522409, 23, 'P6ĐB', 'giong', '- P6ĐB là giống lúa cực ngắn ngày, thời gian sinh trưởng: Vụ Mùa: 75-85 ngày; vụ xuân:105-110 ngày.\r+- Chiều cao cây: 85 – 90cm, có dạng hình gọn, thân đứng, lá có màu xanh đậm.\r+- P6ĐB có tốc độ sinh trưởng và thời gian vào chắc đến chín hạt nhanh, số hạt/bông đạt (115-150), tỷ lệ lép thấp (8-10%), khối lượng 1000 hạt 26-27g. P6ĐB có chất lượng gạo khá, chiều dài hạt gạo 7,12mm, hàm lượng amyloza thấp (15,5%).\r+- Năng suất khoảng 50- 55 tạ/ha, thâm canh tốt có thể đạt 60tạ/ha.\r+- Giống có khả năng chịu rét, chịu nóng và chống đổ khá. Nhiễm nhẹ bệnh đạo ôn trong vụ xuân.'),
(1525850294859, 1525853533521, 24, 'Gia Lộc 102', 'giong', 'Giống lúa Gia Lộc 102 là giống cực ngắn ngày, đặc biệt là có thể giải phóng đất tr­ước 10/9 để có thể canh tác các cây vụ đông sớm (ngô, bí xanh, hành, tỏi...).\r+-  Thời gian sinh trưởng:\r+\r+ Vụ mùa: 90 - 95 ngày.\r+\r+ Vụ hè thu: 85 – 90 ngày\r+     \r+ Vụ xuân 120 - 125 ngày\r+-  Chiều cao cây: 90 - 95 cm, màu lá xanh, bông trung bình, góc độ lá đòng nhỏ, hạt có màu vàng sáng, dạng hạt thon dài, chiều dài hạt gạo 7,2 mm, tỷ lệ dài/rộng = 3,7. Khối lượng 1000 hạt 21 - 22g, số hạt/bông 150 ± 10 hạt, tỷ lệ lép 12 - 18%.\r+-  Gia Lộc 102 có khả  năng chịu rét khá, chống đổ trung bình, ít nhiễm đạo ôn, nhiễm nhẹ bạc lá và rầy nâu.\r+-  Giống lúa Gia Lộc 102 có năng suất  53 - 57 tạ/ha (vụ Xuân),  50 - 55 tạ/ha (vụ Mùa)\r+-  Gia Lộc 102 là giống lúa chất lượng, hạt gạo trong, không bạc bụng, cơm mềm, dẻo, có mùi thơm.\r+'),
(1525850465781, 1525850465781, 25, 'AC5', 'giong', ''),
(1525850687388, 1525850687388, 26, 'HT9', 'giong', ''),
(1525850836509, 1525850836509, 27, 'HT6', 'giong', ''),
(1525850957835, 1525850957835, 28, 'T10', 'giong', ''),
(1525851113802, 1525851113802, 29, 'HDT8', 'giong', ''),
(1525851187683, 1525851187683, 30, 'Trân Châu Hương - SH8', 'giong', '');

-- --------------------------------------------------------

--
-- Table structure for table `rule`
--

CREATE TABLE `rule` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `rate` double DEFAULT NULL,
  `result` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rule`
--

INSERT INTO `rule` (`createdAt`, `updatedAt`, `id`, `type`, `rate`, `result`) VALUES
(1525840675251, 1525840675251, 1, 'benh', 70, 1),
(1525840769743, 1525840769743, 2, 'benh', 80, 1),
(1525840839169, 1525840839169, 3, 'benh', 95, 1),
(1525840885455, 1525840885455, 4, 'benh', 70, 2),
(1525840915217, 1525840915217, 5, 'benh', 78, 2),
(1525840970756, 1525840970756, 6, 'benh', 80, 2),
(1525841022733, 1525841022733, 7, 'benh', 90, 2),
(1525841085733, 1525841085733, 8, 'benh', 60, 3),
(1525841148838, 1525841148838, 9, 'benh', 90, 3),
(1525841183342, 1525841183342, 10, 'benh', 80, 3),
(1525841228140, 1525841228140, 11, 'benh', 75, 3),
(1525841496498, 1525841496498, 12, 'benh', 50, 4),
(1525841578503, 1525841578503, 13, 'benh', 66, 4),
(1525841609728, 1525841609728, 14, 'benh', 85, 4),
(1525841641185, 1525841641185, 15, 'benh', 92, 4),
(1525841713886, 1525841713886, 16, 'benh', 92, 4),
(1525841771953, 1525841771953, 17, 'benh', 100, 4),
(1525841954585, 1525841954585, 18, 'benh', 55, 5),
(1525842087972, 1525842087972, 19, 'benh', 62, 5),
(1525842170300, 1525842170300, 20, 'benh', 81, 5),
(1525842204315, 1525842204315, 21, 'benh', 100, 5),
(1525842267041, 1525842267041, 22, 'benh', 96, 5),
(1525842313705, 1525842313705, 23, 'benh', 50, 6),
(1525842347459, 1525842347459, 24, 'benh', 70, 6),
(1525842372864, 1525842372864, 25, 'benh', 57, 6),
(1525842407685, 1525842407685, 26, 'benh', 98, 6),
(1525842511827, 1525842511827, 27, 'benh', 98, 6),
(1525842548710, 1525842548710, 28, 'benh', 63, 7),
(1525842585928, 1525842585928, 29, 'benh', 91, 7),
(1525843416435, 1525843416435, 30, 'giong', 100, 8),
(1525846163840, 1525846163840, 31, 'giong', 100, 9),
(1525846350808, 1525846350808, 32, 'giong', 100, 10),
(1525846518560, 1525846518560, 33, 'giong', 100, 11),
(1525846712004, 1525846712004, 34, 'giong', 100, 12),
(1525846834166, 1525846834166, 35, 'giong', 100, 13),
(1525847001510, 1525847001510, 36, 'giong', 100, 14),
(1525847440705, 1525847440705, 37, 'giong', 100, 15),
(1525847546478, 1525847546478, 38, 'giong', 100, 16),
(1525849157362, 1525849157362, 39, 'giong', 100, 17),
(1525849336955, 1525849336955, 40, 'giong', 100, 11),
(1525849464176, 1525849464176, 41, 'giong', 100, 18),
(1525849566439, 1525849566439, 42, 'giong', 100, 19),
(1525849681317, 1525849681317, 43, 'giong', 100, 20),
(1525849808715, 1525849808715, 44, 'giong', 100, 21),
(1525850010352, 1525850010352, 45, 'giong', 100, 22),
(1525850139926, 1525850139926, 46, 'giong', 100, 23),
(1525850295644, 1525850295644, 47, 'giong', 100, 24),
(1525850466245, 1525850466245, 48, 'giong', 100, 25),
(1525850687749, 1525850687749, 49, 'giong', 100, 26),
(1525850836681, 1525850836681, 50, 'giong', 100, 27),
(1525850958060, 1525850958060, 51, 'giong', 100, 28),
(1525851114007, 1525851114007, 52, 'giong', 100, 29),
(1525851187825, 1525851187825, 53, 'giong', 100, 30),
(1525851305710, 1525851305710, 54, 'giong', 100, 30);

-- --------------------------------------------------------

--
-- Table structure for table `url`
--

CREATE TABLE `url` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  `result` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `url`
--

INSERT INTO `url` (`createdAt`, `updatedAt`, `id`, `value`, `result`) VALUES
(1525851472292, 1525851472362, 1, '/images/f73329d-1601-47f2-8168-208514c7090a.jpeg', 1),
(1525851486268, 1525851486329, 2, '/images/57ddae92-2574-4457-9c25-f314a8513b4f.jpg', 1),
(1525851700400, 1525851700462, 3, '/images/dc3da40e-eb3d-4115-b825-f9fb34d76800.jpg', 2),
(1525851760178, 1525851760248, 4, '/images/c838e636-8154-4877-abf1-981ea49f24a9.png', 3),
(1525851769409, 1525851769494, 5, '/images/32233a10-b314-4711-a3d8-25bc3e217af2.jpg', 3),
(1525851800424, 1525851800500, 6, '/images/a9112e72-f2a0-4e04-b490-56a56725d546.png', 4),
(1525851809915, 1525851809987, 7, '/images/7dc7569a-ce99-4527-9ced-1149b06729cb.jpg', 4),
(1525851841809, 1525851841891, 8, '/images/5141be77-4b92-4260-81c6-63f5fc6328f8.jpg', 5),
(1525851854444, 1525851854504, 9, '/images/7c0dafad-d41c-440b-90d3-e401d9b88b51.jpg', 5),
(1525851891963, 1525851892032, 10, '/images/09366cab-da46-4217-b796-f86dfcea0a17.jpg', 6),
(1525851903516, 1525851903587, 11, '/images/a0bf715b-7cae-4ec8-927f-1523b84d9c01.gif', 6),
(1525851926117, 1525851926177, 12, '/images/682f9284-fdc1-43a1-acc9-be2ec0a48810.jpg', 7),
(1525853172141, 1525853172221, 13, '/images/56bd45d9-fe5d-48b6-9380-a147e0595422.jpg', 8),
(1525853181096, 1525853181167, 14, '/images/f099ba26-fb0c-4f8c-a800-a66db384d0aa.jpg', 9),
(1525853190970, 1525853191037, 15, '/images/a9085d0c-ef4d-40bb-8bbc-2c055d83375c.jpg', 10),
(1525853200580, 1525853200641, 16, '/images/ef5a9b21-b935-4f03-8f9c-62cdcbbcb931.jpg', 11),
(1525853209812, 1525853209873, 17, '/images/17a0816b-dfee-4649-a7f7-4461f18d1747.jpg', 12),
(1525853219031, 1525853219098, 18, '/images/fe12729d-edc4-4532-9750-18bb8d454153.jpg', 13),
(1525853228495, 1525853228567, 19, '/images/ca2de260-1216-4d45-a9ff-9f65c8f07ad0.jpg', 14),
(1525853239430, 1525853239503, 20, '/images/98e2c068-d1df-4adf-9c77-3da29698a437.jpg', 16),
(1525853251591, 1525853251663, 21, '/images/e8f4298a-5b18-4d63-a268-4f67ff9a0b3b.jpg', 17),
(1525853438044, 1525853438113, 22, '/images/0c01899a-a6d9-492c-8faa-f3ca06dc22a7.jpg', 11),
(1525853449330, 1525853449401, 23, '/images/dad13d09-fdf7-493b-b9a1-a19077dec74c.jpg', 18),
(1525853457848, 1525853457909, 24, '/images/0e795a59-1395-47d5-849d-6aa2b7d3e050.jpg', 19),
(1525853467378, 1525853467437, 25, '/images/74a97248-2aee-410d-a6c7-632bd0dcccd1.jpg', 20),
(1525853502418, 1525853502481, 26, '/images/c12ea71b-a8c1-4c34-a27a-aaf7cd90670c.jpg', 21),
(1525853511805, 1525853511873, 27, '/images/2967057b-445c-4bf1-9600-729ac687bf38.jpg', 22),
(1525853522481, 1525853522553, 28, '/images/5c91c365-3748-4745-a745-d2107d604eca.jpg', 23),
(1525853533577, 1525853533653, 29, '/images/41a6caa9-12c7-4e6b-96a1-ddc130062217.jpg', 24);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `archive`
--
ALTER TABLE `archive`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `events_facts__fact_events`
--
ALTER TABLE `events_facts__fact_events`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `events_results__result_events`
--
ALTER TABLE `events_results__result_events`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `events_rules__rule_events`
--
ALTER TABLE `events_rules__rule_events`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `event_facts__fact_events`
--
ALTER TABLE `event_facts__fact_events`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `event_rules__rule_events`
--
ALTER TABLE `event_rules__rule_events`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `fact`
--
ALTER TABLE `fact`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `result`
--
ALTER TABLE `result`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `rule`
--
ALTER TABLE `rule`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `url`
--
ALTER TABLE `url`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `archive`
--
ALTER TABLE `archive`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;
--
-- AUTO_INCREMENT for table `events_facts__fact_events`
--
ALTER TABLE `events_facts__fact_events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `events_results__result_events`
--
ALTER TABLE `events_results__result_events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=291;
--
-- AUTO_INCREMENT for table `events_rules__rule_events`
--
ALTER TABLE `events_rules__rule_events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=291;
--
-- AUTO_INCREMENT for table `event_facts__fact_events`
--
ALTER TABLE `event_facts__fact_events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `event_rules__rule_events`
--
ALTER TABLE `event_rules__rule_events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `fact`
--
ALTER TABLE `fact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `rule`
--
ALTER TABLE `rule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
--
-- AUTO_INCREMENT for table `url`
--
ALTER TABLE `url`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
