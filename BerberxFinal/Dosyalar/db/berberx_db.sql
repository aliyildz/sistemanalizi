-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 10 Haz 2023, 15:20:25
-- Sunucu sürümü: 10.4.28-MariaDB
-- PHP Sürümü: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `berberx_db`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `ayarlar`
--

CREATE TABLE `ayarlar` (
  `id` int(11) NOT NULL,
  `site_link` varchar(530) DEFAULT NULL,
  `site_baslik` varchar(530) DEFAULT NULL,
  `site_aciklama` text DEFAULT NULL,
  `site_logo` varchar(530) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `ayarlar`
--

INSERT INTO `ayarlar` (`id`, `site_link`, `site_baslik`, `site_aciklama`, `site_logo`) VALUES
(1, 'http://localhost:8080/randevu_takip', 'BerberX', 'Randevu Takip Sistemi', '4902settings.png');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `kullanicilar`
--

CREATE TABLE `kullanicilar` (
  `kul_id` int(11) NOT NULL,
  `kul_isim` varchar(120) NOT NULL,
  `kul_mail` varchar(100) NOT NULL,
  `kul_sifre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `kullanicilar`
--

INSERT INTO `kullanicilar` (`kul_id`, `kul_isim`, `kul_mail`, `kul_sifre`) VALUES
(1, 'Hüseyin Ahmetoğlu', 'huseyin@artuklu.com', '202cb962ac59075b964b07152d234b70');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `musteri`
--

CREATE TABLE `musteri` (
  `musteri_id` int(11) NOT NULL,
  `musteri_isim` varchar(530) DEFAULT NULL,
  `musteri_mail` varchar(250) DEFAULT NULL,
  `musteri_telefon` varchar(25) DEFAULT NULL,
  `musteri_adres` varchar(530) DEFAULT NULL,
  `musteri_tc` varchar(20) DEFAULT NULL,
  `musteri_detay` text DEFAULT NULL,
  `eklenme_tarihi` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `musteri`
--

INSERT INTO `musteri` (`musteri_id`, `musteri_isim`, `musteri_mail`, `musteri_telefon`, `musteri_adres`, `musteri_tc`, `musteri_detay`, `eklenme_tarihi`) VALUES
(142, 'Hüseyin Ahmetoğlu', 'huseyin@artuklu.com', '123124124234', 'Lorem İpsum Test ', '111111111111', '', '2023-06-10 14:12:03'),
(143, 'Muhammet Ali Yıldız', 'ali@artuklu.com', '123124', '', '', '', '2023-06-10 14:16:24'),
(144, 'Nurullah Sarohan', 'nurullah@artuklu.com', '2341231', '', '', '', '2023-06-10 14:16:44'),
(145, 'Ömer Faruk Alkan', 'omer@artuklu.com', '44214235', '', '', '', '2023-06-10 14:17:00'),
(146, 'Burak Göv', 'burak@artuklu.com', '124235', '', '', '', '2023-06-10 14:17:22');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `randevu`
--

CREATE TABLE `randevu` (
  `id` int(11) NOT NULL,
  `baslik` varchar(530) NOT NULL,
  `tarih` datetime DEFAULT NULL,
  `musteri` int(11) NOT NULL,
  `adres` text NOT NULL,
  `detay` text NOT NULL,
  `eklenme_tarihi` datetime NOT NULL DEFAULT current_timestamp(),
  `durum` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `randevu`
--

INSERT INTO `randevu` (`id`, `baslik`, `tarih`, `musteri`, `adres`, `detay`, `eklenme_tarihi`, `durum`) VALUES
(7, 'Saç Sakal Kesim', '2023-07-12 14:14:00', 142, '', '', '2023-06-10 14:15:05', 0),
(8, 'Saç Sakal Kesim', '2023-07-06 15:00:00', 144, '', '', '2023-06-10 14:25:57', 0),
(9, 'Cilt Bakım', '2023-07-19 16:00:00', 143, '', '', '2023-06-10 14:26:29', 0);

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `ayarlar`
--
ALTER TABLE `ayarlar`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `kullanicilar`
--
ALTER TABLE `kullanicilar`
  ADD PRIMARY KEY (`kul_id`);

--
-- Tablo için indeksler `musteri`
--
ALTER TABLE `musteri`
  ADD PRIMARY KEY (`musteri_id`);

--
-- Tablo için indeksler `randevu`
--
ALTER TABLE `randevu`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `ayarlar`
--
ALTER TABLE `ayarlar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `kullanicilar`
--
ALTER TABLE `kullanicilar`
  MODIFY `kul_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Tablo için AUTO_INCREMENT değeri `musteri`
--
ALTER TABLE `musteri`
  MODIFY `musteri_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=147;

--
-- Tablo için AUTO_INCREMENT değeri `randevu`
--
ALTER TABLE `randevu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
