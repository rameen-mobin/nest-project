import { Injectable } from '@nestjs/common';
import { User } from './entities/user-entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        {id: 0 , name:'Marius'},
        {id: 1 , name:'Rameen'},
        {id: 2 , name:'Marius'}
    ];

    findAll(name?:string): User[]{
        if(name){
            return this.users.filter((user)=> user.name ===name)
        }
        return this.users
    }

    findById(id: number): User{
        return this.users.find(user => id ===user.id)
    }

    createUser(name: string): User{
        const newUser = {id: Date.now(), name: name}
        this.users.push(newUser)
        return newUser
    }
}
