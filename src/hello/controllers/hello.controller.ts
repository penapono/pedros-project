import { Controller, Get, Query } from '@nestjs/common';
import { HelloService } from '../services/hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(@Query('name') name: string | undefined): any {
    return { message: this.helloService.getHello(name) };
  }
}
