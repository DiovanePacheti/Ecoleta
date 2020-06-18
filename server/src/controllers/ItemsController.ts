import connection from '../database/connection';
import {Request, Response} from 'express';

export default class ItemsController{

	async index(req: Request, res: Response){
		const items  = await connection('items').select('*');

		/* ira percorrer todo o array items */
		const serializedItems = items.map(item =>{
			return {//retorna um objeto modificado com o caminho da imagem
				id: item.id,
				title:item.title,
				image_url: `http://localhost:3333/uploads/${item.image}`
			};
		});

		return res.json({serializedItems});
	} 
}