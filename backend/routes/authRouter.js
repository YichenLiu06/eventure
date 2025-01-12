const express = require('express');
const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');
const { auth } = require('../auth/firebase.js');

const authRouter = express.Router();

authRouter.post('/register', async (req, res) => {
    const { email, password } = req.body;
  
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        res.json({ message: 'User created successfully!', uid: user.uid });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

authRouter.post('/login', async (req, res) => {
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

module.exports = authRouter;