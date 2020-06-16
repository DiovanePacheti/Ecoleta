import connection from '../database/connection';
import {Request, Response} from 'express';

export default class ItemsController{
	async create(req:Request, res:Response){
		const {title, image} = req.body;

		const id = await connection('items').insert({
			title,
			image
		});

		return res.status(201).json({id})
		
	} ;

	async list(req: Request, res: Response){
		const result = await connection('items').select('*');

		return res.json({result});
	} 
}