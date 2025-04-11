const jwt = require('jsonwebtoken');

const API_KEY = "91e29813-9605-4300-b82e-9ed26083422c";
const SECRET = "3a3e38572821db15141710312bed1025671533d41a66a739b9c11666ed322486";

const options = { 
 expiresIn: '7d', 
 algorithm: 'HS256' 
};
const payload = {
 apikey: API_KEY,
//  permissions: [`allow_mod`, `allow_join`], // `ask_join` || `allow_mod`
Permissions : [`sk_join`]
};

const token = jwt.sign(payload, SECRET, options);
console.log(token);