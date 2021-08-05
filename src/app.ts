import createError from 'http-errors'
import express from 'express';
import path from 'path'
import upload from 'express-fileupload'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import paginate from 'express-paginate'
import bodyParser from 'body-parser'

import errorHandler from './middleware/errorHandler'

/* Router */
import indexRouter from './routes'
import authRouter from './routes/authRouter'
import uploadRouter from './routes/uploadRouter'


/* config app */
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());
app.use(helmet());
app.use(upload())
app.use(paginate.middleware(10, 50));

// view engine setup

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Router */
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/upload', uploadRouter);

app.use((req, res, next) => {
    next(createError(404));
});

app.use(errorHandler);

export default app;