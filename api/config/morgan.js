import morgan from "morgan";
import fs from "fs";


//INFO: global logger
const logStream = fs.createWriteStream("./access.log", {flags:"a"});

export default logStream