import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productService: ProductsService
    ){}

    @Get()
    getAllProducts(){
        return this.productService.findAll();
    }

    @Get(':id')
    getOneById(@Param('id')id){
        return this.productService.findOneById(id);
    }

    @Post()
    createProduct(@Body() product: any){
        return this.productService.create(product);
    }
}
