import { dbclass } from "../runner";
import { route } from "../route";
import Hasher from "../functions/auth/hash/impt";
import { generate_unique_id } from '../functions/auth/id/impl';
import { create_new_token } from "../functions/auth/sign-up/impl";

export const api_module: route = {
    route_name: 'register',
    type_path: '/db/',
    routeType: 'POST',
    mod: async(req, res) => {
        const hasher = new Hasher()
        
        interface userObject {
            email: string,
            password: string,
            year: string,
            joinedAt: Date,
            localStorageToken?: string
        };
        const data = req.body as userObject;
        const newPassowrd = await hasher.hashString(data.password);
        data.password = newPassowrd
        let id: string = (await generate_unique_id(Math.floor(Math.random() * 10)));
        let sessionToken: string = create_new_token(id);
        console.log(sessionToken)
        data.localStorageToken = sessionToken;
        dbclass.getDefaultUsersCollection()?.insertOne(data).then(_ => {
            return res.json({sessionToken});
        })

    }
}