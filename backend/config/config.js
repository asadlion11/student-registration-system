import dotenv from 'dotenv';

dotenv.config()

//backedn
export const port = process.env.PORT
export const host = process.env.HOST
export const user = process.env.USER
export const password = process.env.PASSWORD
export const db_name = process.env.DB_NAME
export const db_port = process.env.DB_PORT
export const connection_uri = process.env.CONNECTION_URI
