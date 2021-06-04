-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04-Jun-2021 às 01:28
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dt3`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadeira`
--

CREATE TABLE `cadeira` (
  `id` int(11) NOT NULL,
  `modelo` varchar(255) NOT NULL,
  `preco` float NOT NULL,
  `urlImg` varchar(255) NOT NULL,
  `disponivel` tinyint(4) NOT NULL DEFAULT 1,
  `descricao` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cadeira`
--

INSERT INTO `cadeira` (`id`, `modelo`, `preco`, `urlImg`, `disponivel`, `descricao`) VALUES
(2, 'Cadeira Gamer DT3sports Royce Tecido', 2.699, 'https://www.dt3sports.com.br/wp-content/uploads/2019/11/cadeira-gamer-royce.space-grey-01.jpg', 1, '• Apoio de braço 4D ajustável.\n<br>\n• Estrutura 100% de aço reforçado para suportar maior peso.\n<br>\n• Estofamento de Tecido de algodão e malha .\n<br>\n• Rodas especiais de 75mm super resistentes para piso ou carpete.\n<br>\n• Almofada XL inclusa para apoio lombar.\n<br>\n• Mecanismo Frog com trava do sistema rocking.'),
(3, 'Cadeira Gamer DT3sports Mizano Tecido', 1.709, 'https://www.dt3sports.com.br/wp-content/uploads/2018/10/Mizano-Fabric-2_0005_Red.jpg', 0, '• Apoio de braço 3D ajustável.\n<br>\n• Estrutura 100% de aço reforçado para suportar maior peso.\n<br>\n• Revestimento de tecido.\n<br>\n• Rodas especiais de 65mm super resistentes para piso ou carpete.\n<br>\n• Duas almofadas inclusas para apoio lombar e pescoço. Ambas com logos bordados.'),
(4, 'Cadeira Gamer DT3sports GT', 872, 'https://www.dt3sports.com.br/wp-content/uploads/2019/01/GT-red-1.jpg', 1, '• Couro PU mesclado com tecido.\n<br>\n• Apoio de braço acolchoado.\n<br>\n• Base de aço com pintura eletroestática.\n<br>\n• Rodas especiais de 65mm super resistentes para piso ou carpete.\n<br>\n• Cilindro de gás classe 4.\n<br>\n• Função Rocking, que possibilita balanço em até 12º.'),
(5, 'Cadeira Gamer DT3sports Orion', 2.609, 'https://www.dt3sports.com.br/wp-content/uploads/2018/08/Orion-Red-2-2.jpg', 1, '• Apoio de braço 4D ajustável.\n<br>\n• Estrutura 100% de aço reforçado para suportar maior peso.\n<br>\n• Estofamento de couro sintético PU “Premium Label Edition” com maior espessura.\n<br>\n• Rodas especiais de 75mm super resistentes para piso ou carpete, com revestimento de poliuretano.\n<br>\n• Duas almofadas inclusas para apoio lombar e pescoço. Ambas com logos bordados.\n<br>\n• Mecanismo Frog com trava do sistema rocking.'),
(6, 'Cadeira Gamer DT3sports Rhino', 2.699, 'https://www.dt3sports.com.br/wp-content/uploads/2018/10/Rhino-red2.jpg', 0, '• Apoio de braço 4D ajustável.\n<br>\n• Estrutura 100% de aço reforçado para suportar maior peso.\n<br>\n• Estofamento de couro sintético PU “Premium Label Edition” com maior espessura.\n<br>\n• Rodas especiais de 75mm super resistentes para piso ou carpete.\n<br>\n• Duas almofadas inclusas para apoio lombar e pescoço. Ambas com logos bordados.\n<br>\n• Mecanismo Frog com trava do sistema rocking.'),
(7, 'Cadeira Gamer DT3sports Prime EVO', 2.582, 'https://www.dt3sports.com.br/wp-content/uploads/2018/09/PNG-Prime-EVO-Red-2.jpg', 0, '• Apoio de braço 4D ajustável.\n<br>\n• Estrutura 100% de aço reforçado para suportar maior peso.\n<br>\n• Estofamento de couro sintético PU “Premium Label Edition” com maior espessura e fibra de carbono sintética.\n<br>\n• Rodas especiais de 75mm super resistentes para piso ou carpete, com revestimento de poliuretano.\n<br>\n• Duas almofadas inclusas para apoio lombar e pescoço. Ambas com logos bordados.\n<br>\n• Mecanismo Frog com trava do sistema rocking.'),
(8, 'Cadeira Gamer DT3sports RGB Estelar', 1.619, 'https://www.dt3sports.com.br/wp-content/uploads/2019/09/Cadeira-Gamer-RGB-DT3sports-Estelar-2-1.jpg', 1, '• Apoio de braço 2D ajustável.\n<br>\n• Estrutura de aço reforçado para suportar maior peso.\n<br>\n• Estofamento de couro sintético PU.\n<br>\n• Rodas especiais de 65mm super resistentes para piso ou carpete.\n<br>\n• Duas almofadas inclusas para apoio lombar e pescoço. Ambas com logos bordados.\n<br>\n• Base Reforçada');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cadeira`
--
ALTER TABLE `cadeira`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cadeira`
--
ALTER TABLE `cadeira`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
