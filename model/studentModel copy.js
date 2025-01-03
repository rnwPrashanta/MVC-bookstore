const {Schema ,model}= require ("mongoose");
const stdSchema= new Schema({
       std_name:String,
       std_email:String,
       std_grid:Number,
       std_profile:String
})

const Student=model('Student',stdSchema)

module.exports=Student