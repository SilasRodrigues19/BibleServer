/*
  Warnings:

  - Added the required column `teste` to the `Chapter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "teste" TEXT NOT NULL;
