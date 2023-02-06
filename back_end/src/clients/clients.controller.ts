import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ClientsService } from './clients.service.js';
import { CreateClientDto } from './dto/create-client.dto.js';
import { UpdateClientDto } from './dto/update-client.dto.js';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ClientEntity } from './entities/client.entity.js';

@Controller('clients')
@ApiTags('clients')

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @ApiCreatedResponse({type: ClientEntity})
  async create(@Body() createClientDto: CreateClientDto) {
    return await this.clientsService.create(createClientDto).catch((err) => {
      throw new HttpException({message: err.message}, HttpStatus.BAD_REQUEST)
    })
  }

  @Get()
  @ApiOkResponse({ type: ClientEntity, isArray: true})
  async findAll() {
    return await this.clientsService.findAll().catch(err => {
      throw new HttpException({
        message: err.message
      }, HttpStatus.BAD_REQUEST)
    });
  }

  @Get(':id')
  @ApiOkResponse({type: ClientEntity})
  async findOne(@Param('id') id: string) {
    return await  this.clientsService.findOne(id).catch(err => {
      throw new HttpException({message: err.message}, HttpStatus.NOT_FOUND)
    });
  }

  @Patch(':id')
  @ApiOkResponse({type: ClientEntity})
  async update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return await this.clientsService.update(id, updateClientDto).catch((err) => {
      throw new HttpException({message: err.message}, HttpStatus.BAD_REQUEST)
    });
  }

  @Delete(':id')
  @ApiOkResponse({type: ClientEntity})
  async remove(@Param('id') id: string) {
    return await this.clientsService.remove(id).catch((err) => {
      throw new HttpException({message: err.message}, HttpStatus.NOT_FOUND)
    });
  }
}
