const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");

// Configuração e Conexão com o mongodb
mongoose.set('debug', true);
mongoose.connect("mongodb://localhost:2702/pandeli-db", { useNewUrlParser: true })
    .then(function(){
        console.log("Banco de dados Conectado")
    })
    .catch(function(){
        console.error(err)
    });

// Configurações
app.set("view engine", "ejs");
app.set("views", "./public/views");
app.use(express.static(__dirname + "/public"));
app.set("port", 3000)
app.use(morgan("dev"));
app.use(express.json());


// Rotas

app.use("/", require("./routes/index"));

app.listen(app.get("port"), function(){
    console.log("Server on port", app.get("port"))
});