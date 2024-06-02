-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Cze 02, 2024 at 02:25 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cityplanner_pro`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `budget`
--

CREATE TABLE `budget` (
  `id` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `sector` varchar(50) NOT NULL,
  `amount` decimal(15,2) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `buildings`
--

CREATE TABLE `buildings` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `type` enum('mieszkalny','komercyjny','służby','inne') NOT NULL,
  `cost` int(11) NOT NULL,
  `valueOfEffect` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `buildTime` int(11) NOT NULL,
  `waterUsage` int(11) DEFAULT NULL,
  `electricityUsage` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buildings`
--

INSERT INTO `buildings` (`id`, `name`, `type`, `cost`, `valueOfEffect`, `description`, `buildTime`, `waterUsage`, `electricityUsage`) VALUES
(1, 'house', 'mieszkalny', 1000, 6, 'small and cheap one-family house', 45, 8, 12),
(2, 'flats_block', 'mieszkalny', 7500, 50, 'high and expensive block of flats', 1800, 25, 40),
(3, 'hospital', 'służby', 10000, 300, 'the place to keep your civilians healthy', 1200, 20, 45),
(4, 'bank', 'inne', 25000, NULL, 'this is the place where you can do huj-wie-co', 600, 12, 10),
(5, 'factory', 'komercyjny', 2000, 30, 'building where people work and you get the money from', 900, 35, 10),
(6, 'power_station', 'służby', 750, 100, 'building that produces electricity, it\'s an essential resource for your city', 400, 0, 0),
(7, 'water_tower', 'służby', 500, 100, 'here you can produce water for your city, water is essetnial for your buildings to work', 360, 0, 0),
(8, 'park', 'inne', 3000, 50, 'here your people can rest and enjoy the view', 600, 5, 30);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `locations`
--

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `building_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`) VALUES
(1, 'stefanek', 'stefanek@gmail.com', '$2y$10$eA8pLMyM7VDjFejfTShK2.NRsPjXrdVGTSTu4hle8UPDXNzIERG5G', '2024-05-18 15:04:02');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `budget`
--
ALTER TABLE `budget`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_budget_user` (`user_id`);

--
-- Indeksy dla tabeli `buildings`
--
ALTER TABLE `buildings`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_locations_user` (`user_id`),
  ADD KEY `locations` (`building_id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `budget`
--
ALTER TABLE `budget`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `buildings`
--
ALTER TABLE `buildings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `budget`
--
ALTER TABLE `budget`
  ADD CONSTRAINT `fk_budget_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `fk_locations_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `locations` FOREIGN KEY (`building_id`) REFERENCES `buildings` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
