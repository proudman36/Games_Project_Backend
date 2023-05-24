/*
  Warnings:

  - You are about to drop the column `studio` on the `game` table. All the data in the column will be lost.
  - You are about to drop the column `games` on the `studio` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `game` DROP COLUMN `studio`;

-- AlterTable
ALTER TABLE `studio` DROP COLUMN `games`;

-- AddForeignKey
ALTER TABLE `game` ADD CONSTRAINT `game_game_id_fkey` FOREIGN KEY (`game_id`) REFERENCES `studio`(`studio_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
