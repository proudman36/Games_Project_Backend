/*
  Warnings:

  - Added the required column `studio` to the `game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `games` to the `studio` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `game` DROP FOREIGN KEY `game_game_id_fkey`;

-- AlterTable
ALTER TABLE `game` ADD COLUMN `studio` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `studio` ADD COLUMN `games` VARCHAR(191) NOT NULL;
