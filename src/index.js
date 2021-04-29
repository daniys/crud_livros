//importa os módulos http e express
const http = require('http');
const express = require('express');
//constrói um objeto express
const app = express();
//importa o body-parser
const bodyParser = require('body-parser');
const { nextTick } = require('process');
app.use(bodyParser.json());
//configura a porta do servidor e o coloca em execução.
const porta = 3030;
app.set('port', porta);
const server = http.createServer(app);
server.listen(3030);

let id = 2;
let livros
[
    {
    id: 1,
    titulo: "Estudos da Mente",
    descricao: "Este livro serve para meditar",
    edicao: "1",
    autor: "Danielle de jesus lima",
    isb: "1465550555",

},
{
    id: 2,
    titulo: "como ser uma mulher empoderada",
    descricao: "ajuda na alto estima e defende seus diretos",
    edicao: "5",
    autor: "bruno santos",
    isb: "2098876",
}
];
app.get("/livros", (req, res, next) =>{
res.status(201).json(livros);
})
app.post("/livros",(req, res, nex) =>{
    app.post ("/livros", (req, res, next) => {
        const livros = {
        id: id +=1,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        edicao: req.body.edicao,
        autor: req.body.autor,
        isbn: req.body.isbn,
        }
        livros.posh(livro)
        res.status(201).json(livro);
});
app.put("/livros", (req, res, next) => {
    livros.forEach ((livros) => {
    if (livro.id === req.body.id){
    livro.titulo = req.body.titulo,
    livro.descricao = req.body.descricao,
    livro.edicao = req.body.edicao,
    livro.autor = req.body.autor,
    livro.isbn = req.body.isbs,
    res.status(200).json(livros);
}
    })
    res.status(204).end();
});
app.delete("/livros/:id",(req,res,next) => {
    const idlivrosDeletado = req.params.id;
    livros.forEach(livro.index) => {
        if(livro.id == idlivrosDeletado) livros.splice(index,1)
})
res.status(200).json(livros);
})