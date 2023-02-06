import { Clients } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class ClientEntity implements Clients {

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
