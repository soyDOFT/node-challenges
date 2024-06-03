const express = require('express');
const app = express();
const employees = require('./data.json');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => { //route handler
    res.send('Hello World');
})

app.get('/employees', (req, res) => {
    if (!employees) res.send('Error fetching products: ', error);
    res.send(employees);
})

app.get('/employees/:id', (req, res) => {
    const employee = employees.find(obj => obj.id === req.params.id);
    if (!employee) res.status(404).send('Employee does not exist')
    res.send(employee);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))