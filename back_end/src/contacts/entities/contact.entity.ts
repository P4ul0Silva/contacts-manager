import { Contacts } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";


export class ContactEntity implements Contacts {

    @ApiProperty()
    clientId: string

    @ApiProperty()
    id: string

    @ApiProperty()
    fullName: string

    @ApiProperty()
    email: string

    @ApiProperty()
    phone: string

    @ApiProperty()
    createdAt: Date
}