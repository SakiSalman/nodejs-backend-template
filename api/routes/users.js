import express from 'express'
import { getUsers } from '../controllers/userControllers.js'


const router = express.Router()



// get users -- admin
router.get('/', getUsers)


//  export router
export default router