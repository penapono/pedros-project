import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHello(name: string | undefined): string {
    if (name) {
      return `Hello, ${name}!`;
    }

    return 'Hello, World!';
  }
}
