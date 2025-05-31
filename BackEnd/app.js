const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(helmet());
app.use(cors());
app.use(limiter);
app.use(express.json({ limit: '10kb' }));

const bookRoutes = require('./src/routes/books');
app.use('/api/books', bookRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal!' });
});

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});