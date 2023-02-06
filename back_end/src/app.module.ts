import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { ClientsModule } from './clients/clients.module.js';
import { ContactsModule } from './contacts/contacts.module.js';

@Module({
  imports: [PrismaModule, ClientsModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
