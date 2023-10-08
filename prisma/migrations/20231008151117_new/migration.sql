-- CreateTable
CREATE TABLE `Contact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `names` VARCHAR(191) NOT NULL,
    `mail` VARCHAR(191) NOT NULL,
    `subjek` VARCHAR(191) NOT NULL,
    `pesan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Daftar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Artikel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `konten` VARCHAR(191) NOT NULL,
    `gambar` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
