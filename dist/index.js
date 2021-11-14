"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 8080; // default port to listen
const router = express_1.default.Router();
app.use(express_1.default.static(path_1.default.join(__dirname, 'client', 'dist')));
// define a route handler for the default home page
app.get("/", (req, res) => {
    // res.send( "Hello world!" );
    res.sendFile(path_1.default.join(__dirname, 'client', 'index.html'));
});
// start the Express server
app.use('/', router);
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map