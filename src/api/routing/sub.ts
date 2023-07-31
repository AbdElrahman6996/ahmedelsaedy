import { dbclass } from "../runner";
import { route } from "../route";
import { userData } from "./login";

export const api_module:route = {
    route_name: 'user/sub/status',
    type_path: '/db/',
    routeType: 'GET',

    mod: async(req, res) => {
        const data = req.query as {
            email  : string;
        };

        const emailAddress: string = decodeURIComponent(data.email).toString();

        return dbclass.getDefaultUsersCollection()?.findOne({ emailAddress: emailAddress }, { projection: { id: 0, password: 0 } }).then(( accountDataNotTyped ) => {
            const account_data: userData = accountDataNotTyped as unknown as userData;
            if ( account_data ) 
            {
                const diffTime = Math.abs(account_data.subscription.endsAt - account_data.subscription.subbedAt);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

                if ( diffDays > 0 ) return res.json({
                    reply  : 'سينتهي اشتراك الحساب بعد ' + diffDays + ' يوم',
                    email  : emailAddress,
                    code   : 200,
                });

                return res.json({
                    reply  : 'انتهى اشتراك الحساب',
                    email  : emailAddress,
                    code   : 401,
                });
            }

            return res.json({
                reply  : 'لا يوجد حساب بهذا الأيميل.',
                message: 'Couldn\'t find the account.',
                code   : 404,
            });
        });
    }
}