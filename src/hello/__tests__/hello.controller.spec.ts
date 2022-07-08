import * as request from 'supertest';
import { HttpStatus } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { HelloModule } from '../hello.module';

describe('HelloModule (e2e)', () => {
  let httpServer: any;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HelloModule],
    }).compile();

    const app = moduleRef.createNestApplication();

    await app.init();

    httpServer = app.getHttpServer();
  });

  describe('GET /hello', () => {
    it('should return the correct message when the name is NOT provided', async () => {
      // Act
      const response = await request(httpServer).get('/hello').send();

      // Assert
      expect(response.status).toBe(HttpStatus.OK);
      expect(response.body).toStrictEqual({ message: 'Hello, World!' });
    });

    it('should return the correct message when the name is provided', async () => {
      // Act
      const response = await request(httpServer)
        .get('/hello')
        .query({ name: 'Pedro' })
        .send();

      // Assert
      expect(response.status).toBe(HttpStatus.OK);
      expect(response.body).toStrictEqual({ message: 'Hello, Pedro!' });
    });
  });
});
