import express from 'express';
import cors from 'cors'
import userRouter from './Route.js';
import pkg from 'pg'; 
const { Client } = pkg;

const app=express()

app.use(cors({
    origin: ["http://localhost:5173"],
   methods: ["GET", "POST","PATCH","PUT","DELETE" ],
   credentials: true,
 }));
 
 app.use(express.json())


app.use('/',userRouter)

app.listen(3000,()=>{
    console.log('server is running');
    
})



const client=new Client({
    host:'localhost',
    user:'postgres',
    port:'5432',
    password:'sreyasree',
    database:'userdisplay'
})

client.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
    } else {
        console.log('Database connected successfully');
    }
});
export { client };