import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleWare/errorMiddleware.js';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => res.send('server is ready'));
app.listen(port, () => console.log(`Server started on port ${port}`));
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);