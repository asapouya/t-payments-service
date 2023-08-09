import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  createAccount() {
    return 'account created.';
  }
}
