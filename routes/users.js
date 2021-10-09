import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
    // {
    //     firstName: "John",
    //     lastName: "Doe",
    //     age: 25
    // },
    // {
    //     firstName: "Jane",
    //     lastName: "Doe",
    //     age: 21
    // },
]

router.get('/', (req, res) => {
    // console.log(users);
    res.send(users);
} );

router.post('/', (req,res)=> {
    // console.log('POST ROUTE REACHED');
    // console.log(req.body);
    const user= req.body;
    users.push({ ...user, id:  uuidv4()});

    res.send(`user with the name: ${user.firstName} added to the database`);
})

export default router;