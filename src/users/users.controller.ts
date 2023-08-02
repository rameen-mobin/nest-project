import { Body, Controller , Get, NotFoundException, Param, ParseIntPipe, Post, Query} from '@nestjs/common';
import { get } from 'http';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

import { User } from './entities/user-entity';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}
    @Get()
    getUsers(@Query('name') name:string): User[] {
        return this.userService.findAll(name)
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number): User {

        const user = this.userService.findById(id)
        if (!user){
            throw new NotFoundException();
        }
        return user 
    }

    @Post()
    // body decorator allows to extract user input from browser
    createUser(@Body() body: CreateUserDto): User {
        return this.userService.createUser(body.name)
    }
}
