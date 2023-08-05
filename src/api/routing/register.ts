import { dbclass } from "../runner";
import { route } from "../route";

import Hasher from "../functions/auth/hash/impt";
import { educationLevels, userData } from "./login";

export interface euserData {
    emailAddress  : string;
    educationLevel: educationLevels;
    password      : string;
}

export const add_days = ( date: number, days: number ) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export const api_module: route = {
    route_name: 'register',
    type_path: '/db/',
    routeType: 'POST',

    mod: async(req, res) => {
        const hasher = new Hasher()
        
        const data = req.body as euserData;
        const hashedPassword = await hasher.hashString(data.password);

        return dbclass.getDefaultUsersCollection()?.findOne({ emailAddress: data.emailAddress }).then(( accountDataNotTyped ) => {
            const account_data: userData = accountDataNotTyped as unknown as userData;
            if ( account_data ) 
            {
                return res.json({
                    reply  : 'يوجد حساب بهذا الأيميل من قبل.',
                    message: 'Account already exists',
                    code   : 202,
                });
            }

            const nowTime = new Date().getTime();
            
            dbclass.getDefaultUsersCollection()?.insertOne({
                emailAddress  : data.emailAddress,
                educationLevel: data.educationLevel,

                subscription  : {
                    subbedAt: nowTime,
                    endsAt  : add_days(nowTime, 30).getTime(),
                },

                password      : hashedPassword,
            } as userData).then(e => {
                return res.json({
                    reply  : 'تم انشاء الحساب',
                    message: 'Created the account',
                    code   : 200,
                });
            });
        });
    }
}