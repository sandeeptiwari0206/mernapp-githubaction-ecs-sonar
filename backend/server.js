import dotenv from 'dotenv';
import connectDB from './config/db.js';
import app from './app.js';

dotenv.config();

const port = process.env.PORT || 5000;

/* ---------- Database ---------- */
connectDB();

/* ---------- Server ---------- */
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is started on port ${port}`);
});
