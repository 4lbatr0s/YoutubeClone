// Promise = require('bluebird'); // eslint-disable-line no-global-assign
import Promise  from "bluebird";
Promise = Promise;
import vars from "./config/vars.js";
import logger from "./config/logger.js";
import app from "./config/express.js";
import mongoose from "./config/mongoose.js";

//mongoose connection.
mongoose();

app.listen(vars.port, ()=>logger.info(`server started on port ${vars.port} (${vars.env})`));

/**
 * Exports express
 * @public
 */
export {app}