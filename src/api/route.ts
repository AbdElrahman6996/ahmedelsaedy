import { Request, Response } from 'express';
import { Message } from './api';

export class route 
{
    public static def_path ?: string = '/api';
    public  type_path?: route.typePath = '/def/';
    public  route_name: string | undefined;
    public  routeType?: route.routingType = 'GET';
    public mod: ( req: Request, res: Response ) => void = ( ) => { return Message(`Please don't let an empty api module with ${this.route_name}!`, 'route.class.mod', 'DANGEROUS_EXIT'); };
}

export namespace route
{
    export type routingType = 'POST'  | 'GET';
    export type typePath    = '/def/' | '/db/' | '/app/' | '/adm/' | '/srv/';
}