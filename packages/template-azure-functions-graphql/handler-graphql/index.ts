/**
 * Very important to specify the line "import 'reflect-metadata';" for TypeGraphQL to compile.
 *
 * Since this is the entry point of our GraphQL endpoint, let's do it in this file once and for all
 */
import 'reflect-metadata';
import path from 'path';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateHandler } from '@as-integrations/azure-functions';
import { buildSchemaSync } from 'type-graphql';
import { Container } from 'typedi';
import { env } from '@/env';
import { GraphQLFormattedError } from 'graphql';
import { UserResolver } from '@/resolvers/user.resolver';
import { AccountResolver } from '@/resolvers/account.resolver';
import { TransactionResolver } from '@/resolvers/transaction.resolver';

const schema = buildSchemaSync({
  resolvers: [UserResolver, AccountResolver, TransactionResolver],

  // Only build the GraphQL schema locally
  // The resulting schema.graphql will be generated to the following path:
  // Path: /core-azure-functions/src/schema.graphql
  emitSchemaFile:
    env.NODE_ENV === 'local' ? path.resolve('./src/schema.graphql') : false,
  container: Container,
  validate: true,
});

const server = new ApolloServer({
  schema,
  formatError: (err: GraphQLFormattedError) => err,
});

export default startServerAndCreateHandler(server);
