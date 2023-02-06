import { ApiProperty } from "@nestjs/swagger";

export class CreateContactDto {

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

}
