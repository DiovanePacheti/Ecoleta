// Update with your config settings.
import path from 'path';
module.exports = {
      /** teste */
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src','database','banco.sqlite')
    },
    migrations:{
      directory: path.resolve(__dirname, 'src','database','migrations')
    },
    seeds:{
      directory: path.resolve(__dirname, 'src', 'database','seeds')
    },
    useNullAsDefault: true,
  };