import { Db, MongoClient, ServerApiVersion } from 'mongodb';

import { Message } from './api';

export class database {
    public client          : MongoClient | undefined;

    public connectToAtlas = async ()  => {
        try
        {
            this.client = new MongoClient('mongodb+srv://abdoamir:Bodbod.9895@cluster0.dywnnlg.mongodb.net/?retryWrites=true&w=majority', { 
                serverApi: ServerApiVersion.v1, }
            );
            
            Message('connectToAtlas => Connecting to the database...', 'connectToAtlas(...)', 'WARNING_TYPE');
            await this.client.connect();
            Message('connectToAtlas => Connected to the database successfully.\nClient serverApi Version: ' + this.client.serverApi?.version, 'connectToAtlas(...)', 'SAFE_TYPE');
        
            return this.client;
        }
        catch(err) 
        {
            Message('connectToAtlas => Failed while trying to connect to the database.\n' + err, 'connectToAtlas(...)', 'DANGEROUS_EXIT');
            return null;
        }
    };

    public getDatabase   = ( database_name  : string ) => this.client?.db(database_name);
    public getCollection = ( collection_name: string, database: Db ) => database.collection(collection_name);

    public getDefaultDatabase         = ( ) => this.getDatabase('data');
    public getDefaultUsersCollection  = ( ) => this.getDefaultDatabase()?.collection('users');
    public getDefaultVideosCollection  = ( ) => this.getDefaultDatabase()?.collection('videos');
}