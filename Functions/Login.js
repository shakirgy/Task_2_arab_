const user=require('../Models/userSchema');
const bcrypt=require('bcrypt');

const loginUser=async (req,res)=>{
    const {email,password}=req.body
try{
    const dbemail=await user.findOne({email})
    if(!dbemail){
        return res.status(401).json({msg:"Invalid User"});
    }else{
        const match= await bcrypt.compare(password, dbemail.password)
        if(match){
            const userDetails=await user.findOne({email}).select("-password")
            res.status(200).json({message:"Login Success",userDetails})
        }
    }
}catch(err){
    console.log(`error in logingin the user ${err}`);
}
}

module.exports=loginUser;