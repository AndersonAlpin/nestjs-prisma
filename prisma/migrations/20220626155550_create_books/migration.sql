-- CreateTable
CREATE TABLE "books" (
    "id" VARCHAR(50) NOT NULL,
    "title" VARCHAR(120) NOT NULL,
    "description" TEXT,
    "bar_code" VARCHAR(50) NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "books_bar_code_key" ON "books"("bar_code");
