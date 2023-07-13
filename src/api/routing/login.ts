import { dbclass } from "../runner";
import { route } from "../route";
import Hasher from "../functions/auth/hash/impt";

interface user {
    email: string,
    password: string,
    year?: string,
    joinedAt?: string
}

export const api_module:route = {
    route_name: 'login',
    type_path: '/db/',
    routeType: 'POST',
    mod: async(req, res) => {
        const hasher = new Hasher();
        const data = req.body as user;

        return dbclass.getDefaultUsersCollection()?.findOne({email: data.email, password: (await hasher.hashString(data.password))}).then((accountData) => {
            const account = accountData as unknown as user;
            if(account) return res.json({
                status: "TRUE",
                code: 200,
                private_token: accountData?.localStorageToken
            });
            console.log(accountData)
            if(!account) return res.json({
                status: "FALSE",
                code: 400
            });
            
        })
    }
}