-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "fullName" TEXT,
ADD COLUMN     "profileImage" TEXT,
ADD COLUMN     "streak" INTEGER NOT NULL DEFAULT 0;
