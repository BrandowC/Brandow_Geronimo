import { Controller, Get, Param, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(
        private readonly orderService: OrdersService
    ){}

    @Get()
    getAllOrders(){
        return this.orderService.findAll();
    }

    @Get(':id')
    getOrdersById(@Param('id')id){
        return this.orderService.findOneById(id);
    }
}
