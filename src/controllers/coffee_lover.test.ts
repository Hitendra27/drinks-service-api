import request from 'supertest';
import { app } from '../app';

describe('Test coffee API endpoint request', () => {
    test('GET should return correct message',async () => {
        // Arrange
        const res = await request(app).get('/coffelover');

        // Act
        expect(res.statusCode).toEqual(200);

        // Assert
        expect(res.text).toEqual('I like coffee!');
        
    });
});