-- CreateTable
CREATE TABLE `chat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` TEXT NOT NULL,
    `chat` TEXT NOT NULL,
    `id_mempelai` VARCHAR(10) NOT NULL,

    INDEX `kd_mempelai`(`id_mempelai`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mempelai` (
    `id` VARCHAR(10) NOT NULL,
    `nama_mempelai` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
