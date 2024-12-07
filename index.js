import express from 'express';
import { connect } from 'mongoose';
import connectdb from './dbconnection.js';
import KYCModel from './models/KYCMODELS/KYCModel.js';
import ProfileModel from './models/KYCMODELS/ProfileModel.js';
import profilerouter from './Controllers/KYC/ProfileControllers.js';
import KYCrouter from './Controllers/KYC/KycController.js';
import DebitModel from './models/TRANSACTIONS/DebitModel.js';
import Debitrouter from './Controllers/Transactions/DebitController.js';
import UPIrouter from './Controllers/Transactions/UPIController.js';
import authRouter from './ROUTES/authrouter.js';
import paymentRouter from './ROUTES/paymentRouter.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import Razorpay from 'razorpay';

// CORS options to allow your frontend (React app) to communicate with your backend
const corsOptions = {
  origin: 'http://localhost:5173', // Allow your React app's origin
  methods: ['GET', 'POST', 'OPTIONS'], // Allow GET, POST, and OPTIONS requests
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  credentials: true, // Allow credentials (cookies, HTTP authentication)
};

const app = express();
connectdb(); // Connect to MongoDB
app.use(express.json());
app.use(cors(corsOptions));

// Razorpay setup
const razorpay = new Razorpay({
  key_id: 'YOUR_KEY_ID', // Replace with your Razorpay key ID
  key_secret: 'YOUR_KEY_SECRET', // Replace with your Razorpay key secret
});

// Razorpay route to create an order (this will be handled by your backend)
app.post('/api/payment/create-order', async (req, res) => {
  try {
    const { amount } = req.body; // Extract amount from request body
    const options = {
      amount: amount * 100, // Convert amount to paise
      currency: 'INR',
      receipt: 'order_rcptid_11', // Optional receipt ID
    };

    // Create an order using Razorpay API
    const order = await razorpay.orders.create(options);

    // Send the order details as response to frontend
    res.json(order);
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).send({ error: 'Failed to create order' });
  }
});

// Routes for Profile, KYC, and Transactions
app.use('/Profile', profilerouter);
app.use('/Kyc', KYCrouter);
app.use('/debit', Debitrouter);
app.use('/upi', UPIrouter);
app.use('/auth', authRouter);
app.use('/api/payment', paymentRouter);

// Start the server
app.listen(8000, () => {
  console.log('Server is up and running on http://localhost:8000');
});
