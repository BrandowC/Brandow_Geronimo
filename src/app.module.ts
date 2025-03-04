import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';



@Module({
  imports: [CategoriesModule, UsersModule, ProductsModule, OrdersModule],
  controllers: [],
  providers: [],
  exports:[]
})
export class AppModule {}