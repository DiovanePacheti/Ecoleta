import { Request, Response} from 'express';
import connection from '../database/connection'

export default class PointsController{

	async create(req:Request, res: Response){

		const {
			name,
			email,
			whatsapp,
			latitude,
			longitude,
			city,
			uf,
			items,
		 } = req.body;

		 const trx = await  connection.transaction()

		 const point = {//criando objeto point com dados recebidos na Request
		 	image: 'https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
			name,
			email,
			whatsapp,
			latitude,
			longitude,
			city,
			uf,
		 }

		 //insere o novo ponto na tabela ponits e returna o id do points criado na const insertedIds
		 const insertedIds = await trx('points').insert(point);

		 /* criando o objeto para inserir na tabela de relacionamento point_items*/

		 const point_id = insertedIds[0]; //atribuindo o id retornado na criando do ponto a const point_id

		 /*Criando um objeto com map cada volta retorna um array modificado com os campos da tabela point_items*/
		 const pointItems = items.map((item_id: number) => {

		 	return {
		 		item_id,
		 		point_id
		 	};
		 });

		 //inserindo o objeto na tatela point_items
		 await trx('point_items').insert(pointItems);

		 await trx.commit();//confirmando inserções

		 return res.status(201).json({//retornando o ponto criado
		 	id:point_id, 
		 	...point,
		 })
	}//fim do method create

}