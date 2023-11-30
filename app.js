let express = require('express')
let dotenv = require('dotenv')
let app = express();
let products = require('./routers/products')
let author = require('./routers/auth')
let bodyparser = require('body-parser');


app.use(bodyparser.json());
dotenv.config()
app.use(express.json())

app.use('/',products);
app.use('/user',author);
// app.route('/').get((req,res)=>{
//     res.send(`<marquee><h1>HELLOOOOOOOOOOOOOOOOOOOOoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</h1></marquee>`);
// })

app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on port http://localhost:${process.env.PORT}`)
});

