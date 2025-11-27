const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// Import routes
const messageRoutes = require('./routes/messageRoutes');
const projectRoutes = require('./routes/projectRoutes');
const authRoutes = require('./routes/authRoutes');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Enable CORS
app.use(cors());

// Body parser
app.use(express.json());

// Mount routers
app.use('/api/messages', messageRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
