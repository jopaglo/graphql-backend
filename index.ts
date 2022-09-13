import 'reflect-metadata';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './src/resolvers/UserResolver';

async function main(){
  const schema = await buildSchema({
   // no graghql os resolvers são os controllers do restfull - rotas da aplicacao
    resolvers: [
      UserResolver
    ],
    // local onde ficará salvo o schema graphql
    emitSchemaFile: path.resolve(__dirname , 'schema.gql'), 
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`Server running on ${url}`);

}

main();