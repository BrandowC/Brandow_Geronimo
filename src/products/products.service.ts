import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products = [
        {
          "id": 1,
          "name": "Smartphone XYZ",
          "description": "Último modelo con cámara de alta resolución",
          "price": 599.99,
          "stock": 45,
          "categoryId": 1
        },
        {
          "id": 2,
          "name": "Laptop Pro",
          "description": "Potente laptop para profesionales",
          "price": 1299.99,
          "stock": 20,
          "categoryId": 1
        },
        {
          "id": 3,
          "name": "Auriculares Inalámbricos",
          "description": "Cancelación de ruido y alta fidelidad",
          "price": 149.99,
          "stock": 100,
          "categoryId": 2
        },
        {
          "id": 4,
          "name": "Monitor 4K",
          "description": "Monitor de alta resolución para gaming",
          "price": 349.99,
          "stock": 15,
          "categoryId": 3
        },
        {
          "id": 5,
          "name": "Teclado Mecánico",
          "description": "Teclado para gamers con retroiluminación",
          "price": 89.99,
          "stock": 50,
          "categoryId": 3
        }
      ];

      findAll(){
        return this.products;
      }

      findOneById(id:number){
        return this.products.find(product => product.id === id);
      }

      create(product: any){
        this.products.push(product);
      }
}
