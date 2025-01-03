// const {Schema ,model}= require ("mongoose");
// const stdSchema= new Schema({
//        std_name:String,
//        std_email:String,
//        std_grid:Number,
//        std_profile:String
// })

// const Student=model('Student',stdSchema)

// module.exports=Student

const {Schema,model}=require("moongose");
const common={
       type:String,
       required:true,
       trim:true
}
const stdSchema = new Schema(
       {
              std_name:common,
              std_email:
            {  
                     ...common,
                     unique:true,
            },
            std_grid:{
              ...common,
              unique:true,
              type:Number
            },
            std_profile:{
              type:[],
              required:false
            }

       },
       {
              timestamp:true
       }
)
const Student=model('Student',stdSchema)
module.exports=Student