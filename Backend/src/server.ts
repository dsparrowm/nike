import express from 'express';
import path from "path";
import morgan from 'morgan';
import cors from 'cors';
import protect from './helpers/protect';
import authenticationRoute from './routes/authentication';
import tokenValidationRouter from './routes/validateToken';
import routes from './routes/index';
import healthCheck from './handlers/healthCheck';
import helmet from 'helmet';


const app = express();

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//  Routers
app.use("/api/auth", authenticationRoute)
app.use("/api", protect, routes)
app.use('/token', tokenValidationRouter)
// Serve the 'logo' directory as static files
app.use("/static", express.static(path.join(__dirname, "logo")));

app.get('/status', healthCheck)


export default app;