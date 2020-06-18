import path from 'path';
import Knex from 'knex';

const connection = Knex({// atribuindo a constante connection as configuraçoes

	client: 'sqlite3',// o cliente e o banco sqlite3
	connection:{
		filename: path.resolve(__dirname,'banco.sqlite')// o arquivo apontando o caminho
	},
	useNullAsDefault: true,
});


export default connection;