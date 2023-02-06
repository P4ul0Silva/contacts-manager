import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service.js';
import { ClientsController } from './clients.controller.js';
import { PrismaModule } from '../../src/prisma/prisma.module.js';
@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [PrismaModule]
})
export class ClientsModule {}
