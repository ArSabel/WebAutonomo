-- CreateTable
CREATE TABLE "Flight" (
    "id" SERIAL NOT NULL,
    "code" INTEGER NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "reason" TEXT,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Flight_code_key" ON "Flight"("code");
