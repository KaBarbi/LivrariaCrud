-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: livraria
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'teste','teste@gmail.com','novasenha','34522343412'),(2,'Maria das Dores','maria@email.com','654321','9876543210'),(3,'João da Silva','joao@email.com','123456','1234567890'),(19,'Camapars','campas@email.com','654321','987654321031312'),(21,'Ano Castelo ','boiadera@gmail.com','dasdsa',' 123');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empres`
--

DROP TABLE IF EXISTS `empres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_cliente` int NOT NULL,
  `id_livro` int NOT NULL,
  `data_emprestimo` date NOT NULL,
  `data_devolucao` date DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cliente` (`id_cliente`),
  KEY `fk_livro` (`id_livro`),
  CONSTRAINT `fk_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id`),
  CONSTRAINT `fk_livro` FOREIGN KEY (`id_livro`) REFERENCES `livros` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empres`
--

LOCK TABLES `empres` WRITE;
/*!40000 ALTER TABLE `empres` DISABLE KEYS */;
INSERT INTO `empres` VALUES (8,1,5,'2023-11-25','2023-12-25','emprestado'),(13,1,5,'2023-11-25','2023-12-25','emprestado'),(18,1,2,'2023-07-20','2023-07-27','aberto'),(19,1,2,'2023-07-20','2023-07-27','aberto'),(20,1,5,'2023-07-20','2023-07-27','aberto'),(21,1,5,'2023-11-25','2023-12-25','emprestado'),(22,19,2,'2023-07-20','2023-07-28','emprestado'),(23,1,5,'2023-11-25','2023-12-25','emprestado'),(24,1,5,'2020-07-05','2022-08-09','atrasado');
/*!40000 ALTER TABLE `empres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livros`
--

DROP TABLE IF EXISTS `livros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `livros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `autor` varchar(255) NOT NULL,
  `genero` varchar(255) NOT NULL,
  `ano_lancamento` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livros`
--

LOCK TABLES `livros` WRITE;
/*!40000 ALTER TABLE `livros` DISABLE KEYS */;
INSERT INTO `livros` VALUES (1,'O Senhor dos Anéis','J.R.R. Tolkien','Fantasia',1954),(2,'Harry Potter e a Pedra Filosofal','J.K. Rowling','Fantasia',1997),(3,'A Divina Comédia','Dante Alighieri','Poesia',1320),(5,'pequeno principe','barbi','bom ',2005);
/*!40000 ALTER TABLE `livros` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-28 18:00:16
