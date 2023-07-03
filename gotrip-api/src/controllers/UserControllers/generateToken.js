const { v4: uuidv4 } = require('uuid');

const jwt = require('jsonwebtoken');

const tokenSing = async (user) => {
   

    const token = jwt.sign({
        _id: user.id,
        role: user.rol,
        
    },
        process.env.JWT_SECRET,
        {
            expiresIn: "2h"
        });

    return token;
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
        return null;
    }
}

const generateCookieValue = () => {
    // Genera un UUID (v4)
    const uuid = uuidv4();

    return uuid;
}

const HederCookie = async () => {
    const cookieName = 'mi_cookie';
    const cookieValue = generateCookieValue(); // Generar el valor de la cookie dinámicamente
    const expirationDate = new Date(Date.now() + 86 * 60 * 60 * 1000).toUTCString(); // Mas de 3 Dias 

    const cookie = `${cookieName}=${cookieValue}; expires=${expirationDate}; path=/`;


    return cookie
}

module.exports = { tokenSing, verifyToken, HederCookie };
