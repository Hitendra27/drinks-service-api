import request from 'supertest';
import { app } from '../app';

describe('Test home API endpoint request', () => {
    test('GET should return correct message', async () => {
        // Arrange
        const res = await request(app).get('/');

        // Act
        expect(res.statuscode).toEqual(200);

        // Assert
        expect(res.text).toEqual('Welcome to the Drinks API!');
    });
});