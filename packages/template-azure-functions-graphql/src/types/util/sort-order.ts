import { registerEnumType } from 'type-graphql';

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}
registerEnumType(SortOrder, {
  name: 'SortOrder',
  description: undefined,
});
