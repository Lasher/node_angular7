const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

const albumsRoutes = require('./routes/albums.route');

//--- set server port ---//
const port = process.env.PORT || 4000;

//--- set requests parser---//
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//--- set cors---//
app.use(cors());

//--- Put your angular dist folder here
app.use(express.static(path.join(__dirname, 'dist')));

//--- set routes ---//
app.use('/albums', albumsRoutes);

//--- run server ---//
app.listen(port, () => console.log(`server listening on ${port}`));


