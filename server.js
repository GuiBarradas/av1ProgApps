const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/usuarios', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: 'Preencha todos os campos' });
    return;
  }

  const usuarios = router.db.get('usuarios').value();
  const novoUsuario = { id: usuarios.length + 1, email, password };

  router.db.get('usuarios').push(novoUsuario).write();

  res.status(201).json(novoUsuario);
});

server.post('/usuarios/login', (req, res) => {
  const { email, password } = req.body;
  const usuario = router.db
    .get('usuarios')
    .find({ email, password })
    .value();

  if (usuario) {
    res.status(200).json(usuario);
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

server.use(router);

server.listen(3000, () => {
  console.log('Servidor JSON Server está em execução');
});
