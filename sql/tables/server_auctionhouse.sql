-- phpMyAdmin SQL Dump
-- version 3.3.8
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Sam 24 Décembre 2011 à 14:06
-- Version du serveur: 6.0.0
-- Version de PHP: 5.2.9-2

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `xidb`
--

-- --------------------------------------------------------

--
-- Structure de la table `server_auctionhouse`
--

DROP TABLE IF EXISTS `server_auctionhouse`;
CREATE TABLE IF NOT EXISTS `server_auctionhouse` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `itemid` smallint(5) unsigned NOT NULL DEFAULT '0',
  `stack` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `seller` int(10) unsigned NOT NULL DEFAULT '0',
  `seller_name` varchar(15) DEFAULT NULL,
  `date` int(10) unsigned NOT NULL DEFAULT '0',
  `price` int(10) unsigned NOT NULL DEFAULT '0',
  `buyer_name` varchar(15) DEFAULT NULL,
  `sale` int(10) unsigned NOT NULL DEFAULT '0',
  `sell_date` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `itemid` (`itemid`),
  KEY `charid` (`seller`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Contenu de la table `server_auctionhouse`
--
