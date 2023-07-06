//import Express from "express";
import { Request, Response } from 'express'; // altered import
import * as coffeeService from '../services/coffee_service';

export const getCoffee = async (req: Request<object, object, object, {
    coffeeName: string | undefined
}>, res: Response) => {
    const coffeeName = req.query.coffeeName;
    const coffe = coffeeService.getCoffee(coffeeName);
    res.json(coffee).status(200);
};
