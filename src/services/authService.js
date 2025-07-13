import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const SECRET_KEY = process.env.JWT_SECRET;

export const validatePassword = (password, hash) => {
    return bcrypt.compare(password, hash);
};

export const generateToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h'});
};