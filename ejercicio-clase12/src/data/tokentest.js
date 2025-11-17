import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = "saldkj289sad21ml"//process.env.JWT_SECRET_KEY;
console.log(secret_key)

export const generateToken = (userData) => {
  const user = {id: userData.id, email: userData.email};
  const expiration = { expiresIn: '1h' };
  return jwt.sign(user, secret_key, expiration);
}

//const token = generateToken({id: "1", email: "test@gmail.com"})
//console.log(token)