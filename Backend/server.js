import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({
    origin: ['https://birthday-wish-from-trishit.netlify.app', 'http://localhost:5173'],
    credentials: true,
    methods: ['GET', 'POST'],
}));
app.use(express.json());
// Add this after your CORS setup
app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});
// Create a transporter using your email provider
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,  // Your email address
        pass: process.env.EMAIL_PASS   // Your email password or app-specific password
    }
});

app.post('/api/send-feedback', async (req, res) => {
    try {
        const { name, message } = req.body;

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Feedback from ${name || 'Anonymous'}`,
            html: `
                <h2>New Feedback Received</h2>
                <p><strong>Name:</strong> ${name || 'Anonymous'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);
        
        res.status(200).json({ message: 'Feedback sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send feedback' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
