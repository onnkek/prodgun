const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального АПИ
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 100);
  });
  next();
});

server.post("/login", (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
  const { users } = db;
  const userFromDb = users.find(
    (user) => user.username === username && user.password === password
  );

  if (userFromDb) {
    return res.json(userFromDb);
  }
  return res.status(403).json({ message: 'AUTH ERROR' });
});

// Проверяем, авторизован ли пользователь
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }
  next();
});

server.use(router);

// Запуск сервера
server.listen(8000, () => {
  console.log('server is running on 8000 port');
});