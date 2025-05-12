const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const cotizacionRoutes = require('./routes/cotizacionRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', cotizacionRoutes);

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});
