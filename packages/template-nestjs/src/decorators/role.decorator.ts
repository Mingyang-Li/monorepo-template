import { Reflector } from '@nestjs/core';

export const roles = ['admin', 'standard'] as const;
export type Role = (typeof roles)[number];
export const Roles = Reflector.createDecorator<Role[]>();
