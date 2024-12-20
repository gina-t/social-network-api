import express from 'express';
import thoughtRoutes from './routes/thoughtRoutes.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// a built-in middleware function in express. It parses incoming requests with JSON payloads and makes the parsed data available under req.body.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/users', userRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});