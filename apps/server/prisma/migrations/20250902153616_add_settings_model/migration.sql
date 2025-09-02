-- CreateTable
CREATE TABLE "public"."Settings" (
    "id" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);
