const  express = require('express') 

const mongoose = require('mongoose')

const app = express()

const port = 5000

app.use(express.json())


app.use(require('./twitterRouters'))





mongoose.connect("mongodb+srv://AgReSSoR:Magomed95@cluster0.rdhjd.mongodb.net/twitter?retryWrites=true&w=majority")

.then(() => console.log('Успешное соединение с MongoDB'))
.catch(() => console.log('Ошибка при соединение с MongoDB'))


app.listen(port, () => {
    console.log(`Сервер запушен:http://localhost:${port}`)
})