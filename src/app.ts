import express from 'express';

import { getRoute1 } from './routes/getRoute1';
import { getRoute2 } from './routes/getRoute2';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/prices', getRoute1);
app.use('/users', getRoute2);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});