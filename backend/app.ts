import "reflect-metadata"
import * as path from "path";
import * as express from "express";
import * as Logger from "morgan";
import * as bodyParser from "body-parser";
import * as jwt from "express-jwt";
import {createConnection} from "typeorm";
import {Request, Response} from "express";
import {routes} from "./routes";
import {JWT_SECRET} from "./src/controller/login.action";
import * as cors from "cors";
import * as jwt_guard from 'express-jwt-permissions';

createConnection().then(async connection => {
    const app = express();
    const guard = jwt_guard();

    app.use(Logger("dev"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cors());

    app.use(jwt({
        secret: JWT_SECRET
    }).unless({path: ['/login']}));

    routes.forEach((route: object) => {
        app[route.method](route.path, guard.check(route.guard).unless({path: ['/login', '/admin/login']}), (request: Request, response: Response, next: any) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    app.get("/", (req: express.Request, res: express.Response) => {
        res.json({message: "Hello world"});
    });

    app.listen(3000, () => {
        console.log("Listening on port 3000");
    });

}).catch(error => console.log("TypeORM connection error: ", error));

