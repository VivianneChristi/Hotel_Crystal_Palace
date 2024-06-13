const express = require('express');

const port = 8080;
const app = express();

<<<<<<< Updated upstream
const router = require('./backend/src/routes/router')
=======
app.use(express.json());


app.use(express.static('public'));
>>>>>>> Stashed changes

app.use(express.json());

app.use(express.static("public"));

app.use("/", router);



app.listen(port, () => {
    console.log(`Servidor no ar http://localhost:${port}`)
});


