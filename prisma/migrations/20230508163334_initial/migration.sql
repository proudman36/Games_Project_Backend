-- CreateTable
CREATE TABLE `game` (
    `game_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `release_year` INTEGER NOT NULL,

    PRIMARY KEY (`game_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `studio` (
    `studio_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `foundation_year` INTEGER NOT NULL,

    PRIMARY KEY (`studio_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `game` ADD CONSTRAINT `game_game_id_fkey` FOREIGN KEY (`game_id`) REFERENCES `studio`(`studio_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
