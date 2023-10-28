import { Roles } from '@/decorators/role.decorator';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  public canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(Roles, context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const { user } = request;
    return this.matchRoles(roles, user.roles);
  }

  private matchRoles(requiredRoles: string[], userRoles: string[]): boolean {
    for (const role of requiredRoles) {
      if (!userRoles.includes(role)) {
        return false;
      }
    }
    return true;
  }
}
