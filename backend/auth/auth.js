const express = require('express');
const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');
const { auth } = require('./app.js');
const { verifyToken } = require('./middleware.js');

const router = express.Router();

router.get('/healthcheck', (req, res) => {
    res.send('Server is OK!');
});

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
  
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        res.json({ message: 'User created successfully!', uid: user.uid });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const token = await user.getIdToken();
        res.json({ message: 'Login successful!', token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/protected', verifyToken, (req, res) => {
    res.send(`Welcome, authenticated user with UID: ${req.user.uid}`);
});

module.exports = router;