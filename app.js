const express = require('express')
const app = express()
const cors = require('cors');

//init middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Artikel = require('./routes/artikel.routes');
const Contact = require('./routes/contacts.routes');
app.use('/article', Artikel)
app.use('/contact', Contact)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`)
});

