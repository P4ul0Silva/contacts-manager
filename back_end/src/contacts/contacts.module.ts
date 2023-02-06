import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service.js';
import { ContactsController } from './contacts.controller.js';
import { PrismaModule } from '../../src/prisma/prisma.module.js';
@Module({
  controllers: [ContactsController],
  providers: [ContactsService],
  imports: [PrismaModule]
})
export class ContactsModule {}
