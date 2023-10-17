const mongoose=require('mongoose');

const fileSchema=mongoose.Schema({
    filename:{type:String},
    user:{type:mongoose.Schema.Types.ObjectId, ref:'user'}
})

const File=mongoose.model('File',fileSchema)
module.exports=File;