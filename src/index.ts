import express, { Request, Response } from 'express';


const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Route example
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Node + TypeScript + Express!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🔥 Server running at http://localhost:${PORT}`);
});

