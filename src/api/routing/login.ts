import { dbclass } from "../runner";
import { route } from "../route";
import Hasher from "../functions/auth/hash/impt";

export type educationLevels = 'first' | 'second' | 'third';
export interface userData {
    emailAddress  : string;
    educationLevel: educationLevels;
    password      : string;

    subscription  : {
        subbedAt: number,
        endsAt  : number,
    },
}

export const api_module:route = {
    route_name: 'login',
    type_path: '/db/',
    routeType: 'POST',

    mod: async(req, res) => {
        const hasher = new Hasher();

        const data = req.body;
        
        const hashedPassword = await hasher.hashString(data.password);

        return dbclass.getDefaultUsersCollection()?.findOne({ emailAddress: data.emailAddress, password: hashedPassword }, { projection: { id: 0, password: 0 } }).then(( accountDataNotTyped ) => {
            const account_data: userData = accountDataNotTyped as unknown as userData;
            if ( account_data ) 
            {
                const nowTime: number = new Date().getTime();
                if ( nowTime >= account_data.subscription.endsAt )
                {
                    return res.json({
                        reply  : 'يُرجى التواصل مع الدعم الفني لتجديد الأشتراك، انتهت مدة اشتراك حسابك',
                        message: 'Forbidden Access',
                        code   : 401,
                    });
                }
                
                return res.json({
                    reply  : 'جاري تسجيل الدخول الى الحساب...',
                    edul   : account_data.educationLevel == 'first' ? 1 : account_data.educationLevel == 'second' ? 2 : 3,
                    message: 'The account were found in the mdb',
                    code   : 200,
                });
            }

            return res.json({
                reply  : 'الرجاء المحاولة مرة اخرى، إما ان كلمة المرور خطأ او لا يوجد حساب بهذا الأيميل',
                message: 'Couldn\'t find the account or the password does not match.',
                code   : 404,
            });
        });
    }
}