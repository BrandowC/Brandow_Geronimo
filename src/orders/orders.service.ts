import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
    private orders = [
        {
          "id": 1,
          "userId": 2,
          "products": [
            {"productId": 1, "quantity": 1},
            {"productId": 3, "quantity": 2}
          ],
          "status": "completed",
          "date": "2023-10-15T14:30:00Z",
          "total": 899.97
        },
        {
          "id": 2,
          "userId": 3,
          "products": [
            {"productId": 2, "quantity": 1}
          ],
          "status": "processing",
          "date": "2023-10-16T10:15:00Z",
          "total": 1299.99
        },
        {
          "id": 3,
          "userId": 4,
          "products": [
            {"productId": 4, "quantity": 2},
            {"productId": 5, "quantity": 1}
          ],
          "status": "pending",
          "date": "2023-10-17T09:45:00Z",
          "total": 789.97
        },
        {
          "id": 4,
          "userId": 2,
          "products": [
            {"productId": 5, "quantity": 1}
          ],
          "status": "completed",
          "date": "2023-10-10T16:20:00Z",
          "total": 89.99
        },
        {
          "id": 5,
          "userId": 5,
          "products": [
            {"productId": 1, "quantity": 1},
            {"productId": 2, "quantity": 1},
            {"productId": 3, "quantity": 1}
          ],
          "status": "shipped",
          "date": "2023-10-12T11:30:00Z",
          "total": 2049.97
        }
      ];

      findAll(){
        return this.orders;
      }

      findOneById(id: number){
        return this.orders.find(order => order.id === id);
      }
}
