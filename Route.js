import express from 'express'
const userRouter=express.Router()
import { getAllUsers } from './controller.js'

userRouter.get('/get-users',getAllUsers)


export default userRouter