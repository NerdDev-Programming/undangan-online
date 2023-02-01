/*
  Warnings:

  - Added the required column `id_mempelai` to the `chat` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `chat` DROP FOREIGN KEY `id_mempelai`;

-- AlterTable
ALTER TABLE `chat` ADD COLUMN `id_mempelai` VARCHAR(10) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE INDEX `id_mempelai` ON `chat`(`id_mempelai`);

-- AddForeignKey
ALTER TABLE `chat` ADD CONSTRAINT `id_mempelai` FOREIGN KEY (`id_mempelai`) REFERENCES `mempelai`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
