import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ){}

    @Get()
    getAllUsers(){
        return this.usersService.findAll();
    }

    @Get(':id')
    getOneById(@Param('id')id){
        return this.usersService.findOneById(id);
    }

    @Post()
    createOne(@Body() userData: any){
        return this.usersService.createOne(userData);
    }

}