import express from 'express';

const router = express.Router();

// Dummy data to simulate a database
let transactions = [];

// Middleware for API key validation
router.use((req, res, next) => {
    const apiKey = req.headers['api-key'];
    if (apiKey !== process.env.API_KEY) {
        return res.status(403).json({ error: 'Invalid API Key' });
    }
    next();
});

// Initiate a payment
router.post('/initiate', (req, res) => {
    const { amount, userId } = req.body;

    if (!amount || !userId) {
        return res.status(400).json({ error: 'Amount and User ID are required' });
    }

    const transaction = {
        id: transactions.length + 1,
        userId,
        amount,
        status: 'pending',
        timestamp: new Date(),
    };

    transactions.push(transaction);
    res.status(201).json({ message: 'Payment initiated', transaction });
});

// Verify payment status
router.get('/verify/:id', (req, res) => {
    const transaction = transactions.find((t) => t.id === parseInt(req.params.id));

    if (!transaction) {
        return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json({ message: 'Transaction status retrieved', status: transaction.status });
});

// Simulate payment callback
router.post('/callback', (req, res) => {
    const { transactionId, status } = req.body;

    if (!transactionId || !status) {
        return res.status(400).json({ error: 'Transaction ID and status are required' });
    }

    const transaction = transactions.find((t) => t.id === transactionId);

    if (!transaction) {
        return res.status(404).json({ error: 'Transaction not found' });
    }

    transaction.status = status;
    res.json({ message: 'Transaction updated', transaction });
});

export default router;
