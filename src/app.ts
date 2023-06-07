import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

import { UserRoutes } from './app/modules/user/user.route';
// import ApiError from './errors/ApiError';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users/', UserRoutes);


//Testing
// app.get('/',  (req: Request, res: Response, next: NextFunction) => {
// //   throw new Error('Testing Error logger')
// throw new Error('This is api error --bappa')
// })


//global error handler
app.use(globalErrorHandler);

export default app;
