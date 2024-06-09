import jwt from 'jsonwebtoken';


export const generateToken = (userId,isAdmin) => {
    const token = jwt.sign({userId,admin: isAdmin},process.env.SECRET);
    return token;
}

