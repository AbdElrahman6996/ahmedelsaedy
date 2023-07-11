import { Router, Request, Response, json, urlencoded } from 'express';

import compression from 'compression';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { route } from './route';
import { Message } from './api';

const api: Router = Router();

api.use(compression());
api.use(cors());

api.use(json({ limit: '512kb' }));
api.use(urlencoded({ extended: true }));

api.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, EEA-Validation-Key');
    return next();
});

api.get('/online/check', ( req: Request, res: Response ) => {
    return res.send({
        status: 200,
        message: '200 OK'
    });
});

const routing_dir_path: string = path.join(__dirname, '/routing/');
const instanceState   : 'production' | 'development' = __filename.endsWith('.js') ? 'production' : 'development';
const routing_dir_fs           = fs.readdirSync(routing_dir_path).filter(e => e.endsWith( instanceState == 'production' ? '.js' : '.ts' ));

for( let i = 0; i < routing_dir_fs.length; i++ )
{
    const index_file  = routing_dir_fs[i];
    const file_path   = path.join(routing_dir_path, index_file.toString());
    const file: { api_module: route } = require(file_path);

    const fp: string = (route.def_path + (file.api_module.type_path?.toString() || '') + file.api_module.route_name);

    Message(`Adding '${fp}' to ${file.api_module.routeType?.toString() || 'GET'} list.`, 'routing.dir.iterator', 'WARNING_TYPE');
    switch (file.api_module.routeType)
    {
        case 'GET':
            api.get(fp, async ( req: Request, res: Response ) => await file.api_module.mod(req, res));
            Message(`Added '${fp}' to ${file.api_module.routeType} list.`, 'routing.dir.iterator', 'SAFE_TYPE');
            break;
        case 'POST':
            api.post(fp, async ( req: Request, res: Response ) => await file.api_module.mod(req, res));
            Message(`Added '${fp}' to ${file.api_module.routeType} list.`, 'routing.dir.iterator', 'SAFE_TYPE');
            break;
        default:
            api.get(fp, async ( req: Request, res: Response ) => await file.api_module.mod(req, res));
            Message(`Added '${fp}' to ${file.api_module.routeType} list.`, 'routing.dir.iterator', 'SAFE_TYPE');
            break;
    }
}

export {
    api
}