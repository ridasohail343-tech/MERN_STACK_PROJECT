import jwt from "jsonwebtoken";

const AdminAuth = async (req, res, next) => {
    try {
        const {token} = req.headers
        if(!token){
            return res.json({sucess:false, message:"Not authorized login again"})
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({sucess:false, message:"Not authorized login again"})
        }
        next()
    } catch (error) {
        console.log(error)
        return res.json({sucess:false, message:error.message})
    }
}

export default AdminAuth;