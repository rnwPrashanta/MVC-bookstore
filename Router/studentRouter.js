const express = require('express')
const app = express();

const upload=require ('../middleware/fileUpload');

const studentController = require ('../controller/studentController')
// app.post('/',studentController.store)
app.post ('/',upload.array ('std_profile',5),studentController.store)
app.get('/',studentController.index)
app.get('/:id',studentController.single)
app.delete('/',studentController.trash)
app.put('/',studentController.update)

module.exports=app


