import { Service } from 'typedi';
import { StringFilter } from '@/types/util/string-filter';
import { DateTimeNullableFilter } from '@/types/util/datetime-nullable-filter';
import { BooleanFilter } from '@/types/util/boolean-filter';
import { FloatNullableFilter } from '@/types/util/float-nullable-filter';
import { UserWhereInput } from '@/types/user/user-where.input';
import { UserFindManyArgs } from '@/types/user/user-find-many.args';

export type QueryArgs = UserFindManyArgs;

export type TWhere = UserWhereInput; // more __WhereInput types to add later to create a union type

export type TField = keyof UserWhereInput; // more 'keyof __WhereInput' types to add later to create a union type

export type TFilter =
  | keyof StringFilter
  | keyof DateTimeNullableFilter
  | keyof BooleanFilter
  | keyof FloatNullableFilter;

export type FilterCondition = {
  field: TField;
  filter: TFilter;
  value: unknown;
};

/**
 * What is it - Class that's SOLEY responsible for building the SQL query for retreieving data from CosmosDB using filters
 *
 * @warning Think CAREFULLY before you modify this file
 */
@Service()
export class CosmosQueryBuilderService {
  protected mapFilterToQuery(where: TWhere): string {
    const conditions: FilterCondition[] = [];
    Object.keys(where).forEach((f) => {
      const field = f as TField;
      const value = where[field];
      if (typeof value === 'string' || typeof value === 'boolean') {
        conditions.push({ field, filter: 'equals', value });
      }
      if (typeof value === 'object') {
        Object.keys(value).forEach((filterType) => {
          conditions.push({
            field,
            filter: filterType as TFilter,
            value: value[filterType],
          });
        });
      }
    });
    return this.processConditions(conditions);
  }

  protected processConditions(conditions: FilterCondition[]): string {
    return conditions
      .map((condition) => {
        // BooleanFilter
        if (
          condition.filter === 'equals' &&
          typeof condition.value === 'boolean'
        ) {
          return `c.${condition.field} = ${condition.value}`;
        }
        if (
          condition.filter === 'not' &&
          typeof condition.value === 'boolean'
        ) {
          return `c.${condition.field} != ${condition.value}`;
        }

        // StringFilter
        if (condition.filter === 'equals') {
          return `c.${condition.field} = '${condition.value}'`;
        }
        if (condition.filter === 'startsWith') {
          return `STARTSWITH(c.${condition.field}, '${condition.value}')`;
        }
        if (condition.filter === 'endsWith') {
          return `c.${condition.field} LIKE '%${condition.value}'`;
        }
        if (condition.filter === 'not') {
          return `c.${condition.field} != '${condition.value}'`;
        }
        if (condition.filter === 'gt') {
          return `c.${condition.field} > '${condition.value}'`;
        }
        if (condition.filter === 'gte') {
          return `c.${condition.field} >= '${condition.value}'`;
        }
        if (condition.filter === 'lt') {
          return `c.${condition.field} < '${condition.value}'`;
        }
        if (condition.filter === 'lte') {
          return `c.${condition.field} <= '${condition.value}'`;
        }
        if (condition.filter === 'in') {
          if (Array.isArray(condition.value)) {
            return `c.${condition.field} IN (${condition.value
              .map((v) => `'${v}'`)
              .join(',')})`;
          }
        }
        if (condition.filter === 'notIn') {
          if (Array.isArray(condition.value)) {
            return `c.${condition.field} NOT IN (${condition.value
              .map((v) => `'${v}'`)
              .join(',')})`;
          }
        }
        if (condition.filter === 'contains') {
          return `CONTAINS(c.${condition.field}, '${condition.value}')`;
        }
        return '';
      })
      .join(' AND ');
  }

  /**
   * Call this method to build a SQL query that executes fancy filtering & pagination logic
   */
  public buildQuery(args: QueryArgs): string {
    let query = 'SELECT ';
    if (args.take) {
      query += `TOP ${args.take} `;
    }
    query += '* FROM c ';
    if (args.where) {
      query += `WHERE ${this.mapFilterToQuery(args.where)}`;
      return query;
    }
    return query.slice(0, -1); // Remove trailing ' '
  }
}
