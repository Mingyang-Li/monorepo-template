import { Injectable, CanActivate } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  public canActivate(): boolean {
    return true;
  }
}
