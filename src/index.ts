import dotenv from "dotenv";
import express from "express";
import path from "path";
const app = express();
const router = express.Router();


// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime 
// as if it were an environment variable
const port = process.env.SERVER_PORT;

app.use(express.static(path.join(__dirname, 'client', 'dist')));

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // res.send( "Hello world!" );
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
} );

// start the Express server
app.use('/', router);
app.listen( port, () => {
  // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );