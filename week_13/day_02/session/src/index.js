const express = require('express');
const app = express();
const { initDB } = require('./services/database');
const todoRoutes = require('./routes/todo');

const PORT = 4000;
app.use(express.json())

app.use('/api',todoRoutes);

try {
    initDB();
    app.listen(PORT,()=>{
        console.log(`servidor escuchando en el puerto: ${PORT}`)
    })
} catch (error) {
    console.error(error);
    process.exit(1)
}
