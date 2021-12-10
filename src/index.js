const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
app.listen(port,()=>console.log('server listening on port',port));
// routes
app.get('/', (req,res)=>{
    res.send('Welcome to my api')
})