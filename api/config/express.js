import * as express from "express";
import * as bodyParser from "body-parser"
import * as compress from "compression";
import * as helmet from "helmet";
import * as cors from "cors";

/**
 * Express instance
 * @public
 */
const app = express();


//INFO: bodyParser help us to parse req bodies and manipulate them.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//INFO: gzip compresse
app.use(compress());

//INFO: Helmet is a collection of several smaller middleware functions that set security-related HTTP response headers.
app.use(helmet());

//INFO: Enable cors.
app.use(cors());


export default app;