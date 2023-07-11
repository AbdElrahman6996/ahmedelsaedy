import { dbclass } from "../runner";
import { route } from "../route";

export const api_module: route = {
    route_name: 'video',
    routeType: 'POST',
    type_path: '/db/',
    mod: async(req, res) => {
        return res.json({videoURL: 'https://cdn.discordapp.com/attachments/899730490532171827/1128113563651821639/c683a58fe91720a01ce19bd1cf466dd0.mp4'})
    }
}