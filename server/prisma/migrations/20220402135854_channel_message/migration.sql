/*
  Warnings:

  - A unique constraint covering the columns `[sentById,channelId]` on the table `ChannelMessage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ChannelMessage_sentById_channelId_key" ON "ChannelMessage"("sentById", "channelId");
