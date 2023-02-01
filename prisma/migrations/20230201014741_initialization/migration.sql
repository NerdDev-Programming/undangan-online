-- CreateTable
CREATE TABLE `chat` (
    `id` VARCHAR(10) NOT NULL,
    `nama` TEXT NOT NULL,
    `chat` TEXT NOT NULL,

    INDEX `id_mempelai`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mempelai` (
    `id` VARCHAR(10) NOT NULL,
    `nama_mempelai` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `chat` ADD CONSTRAINT `id_mempelai` FOREIGN KEY (`id`) REFERENCES `mempelai`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
