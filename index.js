const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json());
const port = 5000;


app.get('/', (req, res) => {
    res.send('Hey my node is working');
});

const users = [
    { id: 0, name: 'ali', email: 'satna@gmail.com', phone: '011400404004' },
    { id: 1, name: 'jani', email: 'sabanfa@gmail.com', phone: '011400404004' },
    { id: 2, name: 'babana', email: 'sabaga@gmail.com', phone: '01140s404004' },
    { id: 3, name: 'appels', email: 'sabaea@gmail.com', phone: '01140040e004' },
    { id: 4, name: 'comolas', email: 'sabana@gmail.com', phone: '01140040sf004' },
    { id: 5, name: 'beguni', email: 'sabans@gmail.com', phone: '01140040f04' },
    { id: 6, name: 'butter', email: 'sabana@gmail.com', phone: '011400404004' },
    { id: 7, name: 'fabana', email: 'sabas@gmail.com', phone: '0114004a004' }

]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users', (req, res) => {
    const search = (req.query);
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult);
    } else {
        res.send(users)
    }

})
// app. method 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post');
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})


// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana', 'apple'])
})

app.get('/fruits/mango/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli')
})

app.listen(port, () => {
    console.log('Listening to port', port);
})