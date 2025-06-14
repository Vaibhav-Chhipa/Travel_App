require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/destinations', require('./routes/destinations'));
app.use('/api/packages',     require('./routes/packages'));

app.use((err, _req, res, _next) =>
  res.status(500).json({ message: err.message || 'Server error' })
);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`API running on ${PORT}`)))
  .catch(err => console.error(err));
