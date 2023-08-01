import { dbclass } from "../runner";
import { route } from "../route";
import { userData } from "./login";
import { add_days } from "./register";

export const api_module:route = {
    route_name: 'resub',
    type_path: '/db/',
    routeType: 'POST',

    mod: async(req, res) => {
        const apass: string = '9b124je37vtdp';
        const data = req.body as {
            emailAddress: string;
            adminKey    : string;
        };

        const emailAddress: string = decodeURIComponent(data.emailAddress).toString();

        if (data.adminKey != apass) return res.json({
            reply  : 'لا يمكنك تجديد اشتراك الحساب، السبب: لعدم مطابقة باسورد الأدمن',
            message: 'Forbidden Access, Wrong Admin Key.',
            code   : 401,
        });

        return dbclass.getDefaultUsersCollection()?.findOne({ emailAddress }, { projection: { id: 0, password: 0 } }).then(( accountDataNotTyped ) => {
            const account_data: userData = accountDataNotTyped as unknown as userData;
            if ( account_data ) 
            {
                const nowTime = new Date().getTime();
                return dbclass.getDefaultUsersCollection()?.findOneAndUpdate({ emailAddress }, {
                    $set: {
                        subscription  : {
                            subbedAt: nowTime,
                            endsAt  : add_days(nowTime, 30).getTime(),
                        }
                    }   
                }).then(e => {
                    return res.json({
                        reply  : 'تم تجديد اشتراك الحساب بنجاح!',
                        message: 'Retimed the subsicription to another 30 days',
                        code   : 200,
                    });
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