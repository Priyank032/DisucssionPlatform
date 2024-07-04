import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './src/routes/user.routes';
import discussionRoutes from './src/routes/discussion.routes';
// import commentRoutes from './src/routes/comment.routes';
// import likeRoutes from './src/routes/like.routes';
// import followRoutes from './src/routes/follow.routes';
// import viewCountRoutes from './src/routes/viewcount.routes';
import { errorMiddleware } from './src/middleware/error.middleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use('/api/v1/users', userRoutes);
// app.use('/api/v1/discussions', discussionRoutes);
// app.use('/api/v1/comments', commentRoutes);
// app.use('/api/v1/likes', likeRoutes);
// app.use('/api/v1/follows', followRoutes);
// app.use('/api/v1/viewcounts', viewCountRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
