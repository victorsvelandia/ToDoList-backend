import { where } from 'sequelize';
import { User } from '../models/index.js';
import { validatePassword, generateToken } from '../services/authService.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({ message: 'Email and password are required '});
    }
    const user = await User.findOne({ where: { email }});
    if(!user) return res.status(400).json({ message: 'User not found' });

    const valid = await validatePassword(password, user.passwordHash);
    if(!valid) return res.status(400).json({ message: 'Invalid password' });

    const token = generateToken({ id: user.id, email: user.email, role: user.idRole });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}