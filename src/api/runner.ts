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

export {
    client,
    dbclass
};