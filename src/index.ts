import express from 'express'

const app = express()
const PORT = process.env.PORT || 8000
app.get('/', (req, res) => {
    res.json({Message : "server is up and running "});

})

app.listen(PORT,()=>{
    console.log("server started");
})