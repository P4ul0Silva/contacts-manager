import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto.js';
import { UpdateClientDto } from './dto/update-client.dto.js';
import { PrismaService } from "../../src/prisma/prisma.service.js";
import { error } from 'console';


@Injectable()
export class ClientsService {

  constructor(private prisma: PrismaService) {}

  create({email, fullName, phone}: CreateClientDto) {
    if(!email) {
      throw new HttpException("Email is a required field.", HttpStatus.BAD_REQUEST)
    }
    if(!fullName) {
      throw new HttpException("Full name is a required field.", HttpStatus.BAD_REQUEST)
    }
    if(!phone) {
      throw new HttpException("Phone is a required field.", HttpStatus.BAD_REQUEST)
    }

    const emailAlreadyExists = this.prisma.clients.findUnique({
      where: {email}
    })

    if(emailAlreadyExists) {
      throw new HttpException("Email already exists", HttpStatus.BAD_REQUEST)
    }

    const createClientDto = {email, fullName, phone}

    return this.prisma.clients.create({ data: createClientDto})
  }

  findAll() {
    return this.prisma.clients.findMany({include: {contacts: true}})
  }

  async findOne(id: string) {
    return this.prisma.clients.findUnique({where:{id}, include: {contacts: true}}).then((data) => {
      if(!data) {
        throw new HttpException("User not found", HttpStatus.NOT_FOUND)
      }
      return data
    })
    
  }

  update(id: string, updateClientDto: UpdateClientDto) {

    const emailAlreadyExists = this.prisma.clients.findUnique({
      where: {email: updateClientDto.email}
    })

    if(emailAlreadyExists){
      throw new HttpException("Email already exists", HttpStatus.BAD_REQUEST)
    }

    return this.prisma.clients.update({
      where:{id},
      data: updateClientDto
    });
  }

  async remove(id: string) {
    return this.prisma.clients.delete({where: { id }}).then((data) => {
      if(!data) {
        throw new HttpException("User not found", HttpStatus.NO_CONTENT)
      }
      return {}
    })
  }
}
