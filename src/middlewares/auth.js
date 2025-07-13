import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) return res.status(401).json({ message: 'Token is required'});

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if(err) return res.status(403).json({ message: 'Invalid token'});
        req.user = user;
        next();
    });
};