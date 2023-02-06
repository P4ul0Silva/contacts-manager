import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ContactsService } from './contacts.service.js';
import { CreateContactDto } from './dto/create-contact.dto.js';
import { UpdateContactDto } from './dto/update-contact.dto.js';
import { ContactEntity } from './entities/contact.entity.js';

@Controller('contacts')
@ApiTags('contacts')

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  @ApiCreatedResponse({type: ContactEntity})
  async create(@Body() createContactDto: CreateContactDto) {
    return await this.contactsService.create(createContactDto).catch((err) => {
      throw new HttpException({message: err.message}, HttpStatus.BAD_REQUEST)
    });
  }

  @Get()
  @ApiCreatedResponse({type: ContactEntity, isArray: true})
  findAll() {
    return this.contactsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: ContactEntity})
  async findOne(@Param('id') id: string) {
    return await this.contactsService.findOne(id).catch((err) => {
      throw new HttpException({message: err.message}, HttpStatus.BAD_REQUEST)
    });
  }

  @Patch(':id')
  @ApiOkResponse({type: ContactEntity})
  async update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactsService.update(id, updateContactDto).catch((err) => {
      throw new HttpException({message: err.message}, HttpStatus.BAD_REQUEST)
    });
  }

  @Delete(':id')
  @ApiOkResponse({type: ContactEntity})
  async remove(@Param('id') id: string) {
    return this.contactsService.remove(id).catch((err) => {
      throw new HttpException({message: err.message}, HttpStatus.NOT_FOUND)
    });;
  }
}
