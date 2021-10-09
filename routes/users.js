import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
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

router.get('/:id', (req, res) => {
    res.send(req.params);
    const { id } = req.params;

    const foundUser = users.find((user)=> user.id === id);
    res.send(foundUser);
} );

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user)=> user.id !== id);
    res.send(`user with the id: ${id} deleted to the database`);
});

export default router;