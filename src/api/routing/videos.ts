import { dbclass } from "../runner";
import { route } from "../route";

export const api_module:route = {
    route_name: 'get/video',
    type_path: '/db/',
    routeType: 'GET',

    mod: async(req, res) => {
        const data = req.query;
        return dbclass.getDefaultVideosCollection()?.find({ videoEdu: data.edul }, { projection: { id: 0 } }).toArray().then(result => {
            return res.json({
                data: result,
                message: 'SENT_DATA',
                code: 200,
            })
        });
    }
}