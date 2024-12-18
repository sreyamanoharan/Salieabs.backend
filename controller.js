import express from 'express'
import { client } from './index.js'; 


export const getAllUsers=async(req,res) =>{
    const { page, limit } = req.query;
    console.log(page,limit);
    
    const offset = (page - 1) * limit;  
  
    try {
      const result = await client.query(
        'SELECT * FROM users LIMIT $1 OFFSET $2', 
        [limit, offset]
      );
  
      res.json(result.rows); 
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
}