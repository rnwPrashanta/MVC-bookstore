const Student=require("../model/studentModel")
const store=async(req,res)=>{
    console.log(req.body)
    await Student.create(req.body)
    res.json({
        success:true,
        message:"data inseted"
    })
    
}

const index= async(req,res)=>{
    const student=await Student.find();
    res.json({
        success:true,
        student
    })
    // res.send(req.body)
}

const single=async(req,res)=>{
    const id=req.params.id;
    const student=await Student.findById(id)
    //res.json
    res.json({
        success:true,
        student
    })
}



const trash=async(req,res)=>{
    const {id}=req.query;
    console.log(id);
    await Student.findByIdAndDelete(id);
    res.json({
        success:true,
        message:"recorded deleted"
    })
    
}
const update=async(req,res)=>{
    const {id}=req.query;
    const {std_name,std_email,std_grid}=req.body;
    await Student.findByIdAndUpdate(
        {_id:id},
        {
            std_name,std_email,std_grid
        }
    )
    res.json
    ({success:true,
        message:"record updated"
    })
}


module.exports={store,index,single,trash,update}