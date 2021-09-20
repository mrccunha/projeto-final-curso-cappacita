const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const resultado = require('../functions/buscaFilmes')


app.use(bodyParser.urlencoded({extended : true }))

app.get('/filmes', async (req, res) => {
    try {
        const filme = await resultado.buscaFilmesAtuais();
        return res.status(200).send(filme);
    } catch (error) {
        return error
    }
})

app.get('/filmes/:query', async (req, res) => {
    try {
        const filme = await resultado.buscaFilmes(req.params.query);
        return res.status(200).send(filme);
    } catch (error) {
        return error
    }
})

app.get('/filmes/:id', async (req, res) => {
    try {
        const filme = await resultado.buscasFilme(req.params.id);
        return res.status(200).send(filme);   
    } catch (error) {
        return error
    }
})

app.listen(3003)
app.use(express.static('public'))