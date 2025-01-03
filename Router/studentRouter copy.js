const express = require('express')
const app = express();

const studentController = require ('../controller/studentController')
app.post('/',studentController.store)
app.get('/',studentController.index)
app.get('/:id',studentController.single)
app.delete('/',studentController.trash)
app.put('/',studentController.update)

module.exports=app


