const jwt = require('jsonwebtoken');

const API_KEY = "API key";
const SECRET = "Secret";

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
