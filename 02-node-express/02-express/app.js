const express = require('express');
const app = express();
const port = 3000;
let router = express.Router();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Middleware de rota que imprime o timestamp no console
router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});
app.use(router);

// Configuracao
app.use(express.static('public'));
app.use('/files', express.static('public'));

/**
* Responde com "Olá Mundo!" quando for realizado uma
* requisição GET na rota inicial (/)
**/
app.get('/', (req, res) => {
    res.send('Olá Mundo!');
});

/**
* Responde com "Dados Recebidos!" quando for realizado uma
* requisição POST na rota inicial (/)
**/
app.post('/', (req, res) => {
    res.send('Dados Recebidos!');
});

/**
* Responde com "Dados atualizados!" quando for realizado uma
* requisição PUT na rota inicial (/) com um ID
**/
app.put('/:id', (req, res) => {
    res.send('Dados atualizados!');
});

/**
* Responde com "Dados excluídos!" quando for realizado uma
* requisição DELETE na rota inicial (/) com um ID
**/
app.delete('/:id', (req, res) => {
    res.send('Dados excluídos!');
});

/**
* Função send() respondendo com String "HTML"
**/
app.get('/html', (req, res) => {
    res.send(`<h1>Conteúdo HTML</h1><p>Rota <strong>/html</strong> com
    método <strong>GET</strong> que retorna um HTML.</p>`);
});

/**
* Função json() respondendo com objeto "json"
**/
app.get('/json', (req, res) => {
    let obj = {
        nome: 'Vagner',
        email: 'vagner.bezerra@ifms.edu.br'
    }
    res.json(obj);
});

const verificaRequisicao = (req, res, next) => {
    console.log(`Middleware definido em rota especifica: \
                 ${req.method} (${req.originalUrl})`);
    next();
};

app.use('/middle-rota-especifica', verificaRequisicao, function (req, res, next) {
    res.json({metodo: req.method, url: req.originalUrl});
});

app.get('/erro', function (req, res, next) {
    const error = new Error(
        `${req.ip} rota ${req.originalUrl}`,
    );
    error.statusCode = 500;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.statusCode)
       .json({ error: `${error.toString()} Codigo: ${res.statusCode}`});
});

app.get('/query', (req, res) => {
    const nome = req.query.nome;
    console.log('Nome:', nome);
    res.json(req.query);
});

app.get('/route/:id', (req, res) => {
    const id = req.params.id;
    console.log('ID:', id);
    res.json(req.params);
});

app.post('/body', (req, res) => {
    const { nome, disciplina } = req.body;
    console.log(req.body);
    res.json({
        nome: nome,
        email: req.body.email,
        disciplina: disciplina
    });
});

app.post('/params/:ano', (req, res) => {
    res.status(200).json({
        message: `${req.method}`,
        method: req.method,
        uri: decodeURI(req.url),
        route_params: req.params,
        query_params: req.query,
        body_params: req.body
    });
});

app.listen(port, () => {
  console.log(`Exemplo de aplicativo executando em http://localhost:${port}`)
});