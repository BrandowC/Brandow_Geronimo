import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users =[
        {
          "id": 1,
          "name": "Admin Usuario",
          "email": "admin@example.com",
          "password": "admin123",
          "role": "admin"
        },
        {
          "id": 2,
          "name": "Juan Pérez",
          "email": "juan@example.com",
          "password": "juan123",
          "role": "customer"
        },
        {
          "id": 3,
          "name": "María García",
          "email": "maria@example.com",
          "password": "maria123",
          "role": "customer"
        },
        {
          "id": 4,
          "name": "Carlos López",
          "email": "carlos@example.com",
          "password": "carlos123",
          "role": "customer"
        },
        {
          "id": 5,
          "name": "Ana Martínez",
          "email": "ana@example.com",
          "password": "ana123",
          "role": "customer"
        }
      ];


    findAll(){
        return this.users;
    }

    findOneById(id:number){
        return this.users.find(user => user.id === 1);
    }

    createOne(userData: any){
        const user = {}
        return user;
    }
}
