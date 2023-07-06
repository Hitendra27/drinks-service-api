//import Express from "express";
import { Request, Response } from 'express'; // altered import
import * as coffeeService from '../services/coffee_service';

export const getCoffee = async (req: Express.Request, res:
    Express.Response) => {
        const { coffeeName } = req.query;
        const coffee = coffeeService.getCoffee(coffeeName as string);
        res.json(coffee).status(200);
    };
