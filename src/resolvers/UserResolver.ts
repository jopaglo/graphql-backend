import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../models/User';
import crypto from 'crypto'; // lib própria do node

@Resolver()
export class UserResolver {
  // como nao tenho banco de dados vou simular com array em memória
  private data: User[] = [];

  @Query(() => [User] )
  async users(){
    return this.data;
  }

  @Mutation(() => User)
  async createUser(
    @Arg('name') name: string
  ){
    const user = {id: crypto.randomUUID() , name};
    this.data.push(user);
    return user;
  }
}

/* 
INFORMACAO 1
para habilitar decorators precisar iniciar o arquivo tsconfig.json
comando : npx tsc -- init 

habilitar as proprieadades
"experimentalDecorators": true,   
"emitDecoratorMetadata": true,   

INFORMACAO 2
eu tenho duas anotações no graphql:
query: usada para buscar dados
mutation: para criar, atualizar e deletar dados
*/