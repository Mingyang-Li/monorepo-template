import { registerEnumType } from 'type-graphql';

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}
registerEnumType(QueryMode, {
  name: 'QueryMode',
  description: undefined,
});
