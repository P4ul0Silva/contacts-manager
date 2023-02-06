import { ApiProperty } from "@nestjs/swagger";

export class CreateClientDto {

    @ApiProperty()
    fullName: string
    
    @ApiProperty()
    email: string

    @ApiProperty()
    phone: string

}


