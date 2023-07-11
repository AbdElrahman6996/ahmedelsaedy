import express from 'express';

import compression from 'compression';
import cors from 'cors';

import path from 'path';
import fs from 'fs';

import { Handler, HandlersType } from './handler';
import { tmpdir } from 'os';

const Message = ( Message: string, Caption: string = 'No Caption Was Specified.', Code: HandlersType ) => {
    const nh              = new Handler(Message, Caption, Code);
    const date: Date      = new Date();
    const logPath: string = path.join(tmpdir(), `/nvanime-log-${date.getFullYear()}_${date.getUTCMonth() + 1}_${date.getDate()}.log`);
    
    if(fs.existsSync(logPath))
    {
        fs.appendFileSync(logPath, btoa(unescape(encodeURIComponent(nh.final_string_message))).replaceAll('z', '{yy-s}').replaceAll('U', '{cc-a}').replaceAll('1', '{3}').split('').reverse().join('') + '\n');
    }
    else 
    {
        fs.writeFileSync(logPath, btoa(unescape(encodeURIComponent('DATE FORMATTED BY SORTING OF YEAR::MONTH::DAY => YY::MM::DD'))).replaceAll('z', '{yy-s}').replaceAll('U', '{cc-a}').replaceAll('1', '{3}').split('').reverse().join('') + '\n');
        fs.appendFileSync(logPath, btoa(unescape(encodeURIComponent(nh.final_string_message))).replaceAll('z', '{yy-s}').replaceAll('U', '{cc-a}').replaceAll('1', '{3}').split('').reverse().join('') + '\n');
    }

    return;
};

import { api } from './router';

const useApiRouting = async ( port: number ) => {
    return new Promise(( resolve, reject ) => {
        const app = express();

        app.use(compression());
        app.use(cors());

        app.listen(port, ( ) => Message('ExpressJS Server is listening to port 36630!\nIP Addr: localhost\nFull Url: http://localhost:36630', 'app.listen(36630, ( ) => ...)', 'SAFE_TYPE'));

        app.use(api);
       resolve(200); 
    });
};

export {
    useApiRouting,
    Message
}