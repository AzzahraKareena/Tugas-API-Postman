const express = require('express')
const app = express()
const port = 4000
const mahasiswa = require('./mahasiswa');

app.get('/', (req, res) => {
    res.send("Hello from express")
})

app.get('/api/v1/mahasiswa', (req, res) => {
    const result = mahasiswa.getAllStudents();
    res.send(result);
})

app.get('/api/v1/mahasiswa/:id', (req, res) => {
    const id = req.params.id;
    const result = mahasiswa.getOneStudents(id);
    res.send(result);
});

app.listen(port, () => {
    console.log('Listening to port ${port}')
})

