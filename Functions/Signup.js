const user=require('../Models/userSchema');
const bcrypt=require('bcrypt');

const userRegistration=async (req,res)=>{
        const {name,email,password}=req.body
        try{
            if(!name||!email||!password){
                res.status(409).json({message:"All fields are required"})
            }else{
                const dbname=await user.findOne({name})
                if(dbname){
                    res.status(409).json({message:"User already exists"});
                }
                const dbemail=await user.findOne({email})
                if(dbemail){
                    res.status(409).json({message:'Email is taken'})
                }else{
                    const salt=await bcrypt.genSalt(10);
                    const hashedpassword= await bcrypt.hash(password, salt)
                    const newuser=await user.create({
                        name,
                        email,
                        password:hashedpassword,
                    
                     })
                     res.status(200).json({message:'registration is completed'})
                }
                }
            }
        
        catch(err){
            console.log(`error in creating user ${err}`)
        }
        
}

module.exports=userRegistration;
