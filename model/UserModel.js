const {Schema ,model}= require ("mongoose");
const UserSchema= new Schema({
    User_name:String,
    User_email:String,
    User_grid:Number,
    User_profile:String
})

const User=model('User',UserSchema)

module.exports=User