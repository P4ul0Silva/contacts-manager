import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service.js';
import { CreateContactDto } from './dto/create-contact.dto.js';
import { UpdateContactDto } from './dto/update-contact.dto.js';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ContactsService {

  constructor(private prisma: PrismaService) {}
  
  create(@Body() {email, fullName, phone, clientId, id}: CreateContactDto) {

    if(!email) {
      throw new HttpException("Email is a required field.", HttpStatus.BAD_REQUEST)
    }
    if(!fullName) {
      throw new HttpException("Full name is a required field.", HttpStatus.BAD_REQUEST)
    }
    if(!phone) {
      throw new HttpException("Phone is a required field.", HttpStatus.BAD_REQUEST)
    }


    const createContactDto = {email, fullName, phone, clientId, id}
    return this.prisma.contacts.create({data: createContactDto})
  }

  findAll() {
    return this.prisma.contacts.findMany()
  }

  async findOne(id: string) {
    return this.prisma.contacts.findUnique({where: {clientId: id}}).then((data) => {
      if(!data) {
        throw new HttpException("Contact not found", HttpStatus.NOT_FOUND)
      }
      return data
    })
  }

  update(id: string, updateContactDto: UpdateContactDto) {
    return this.prisma.contacts.update({where: {clientId: id}, data: updateContactDto})
  }

  async remove(id: string) {
    return this.prisma.contacts.delete({where: {clientId: id}}).then((data) => {
      if(!data) {
        throw new HttpException("Contact not found", HttpStatus.NO_CONTENT)
      }
      return {}
    })
  }
}
