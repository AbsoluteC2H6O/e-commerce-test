import { DataSource, DataSourceOptions } from 'typeorm';
import {config} from 'dotenv'

config()
export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) ? parseInt(process.env.DB_PORT) : 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || 'bazarapi',
    entities: [],
    migrations: [],
    logging: false,
    synchronize: false,

}

const dataSource = new DataSource(dataSourceOptions)

export default dataSource