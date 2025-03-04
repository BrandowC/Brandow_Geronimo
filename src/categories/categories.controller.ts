import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(
        private readonly categoriesService: CategoriesService
    ){}

    @Get()
    getAllcategories(){
        return this.categoriesService.findAll();
    }

    @Get(':id')
    getcategoriesById(@Param('id')id){
        return this.categoriesService.findOneById(id);
    }

    
}
