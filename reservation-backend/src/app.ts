import express from 'express';
import dotenv from 'dotenv';
import reservationRoutes from './routes/reservationRoutes';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/reservations', reservationRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
