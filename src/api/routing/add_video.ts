import { dbclass } from "../runner";
import { route } from "../route";
import { educationLevels } from "./login";

export const api_module:route = {
    route_name: 'add/video',
    type_path: '/db/',
    routeType: 'POST',

    mod: async(req, res) => {
        const data = req.body as { vid: string, edul: educationLevels };

        return dbclass.getDefaultVideosCollection()?.findOne({ videoId: data.vid }, { projection: { id: 0 } }).then(( vidDataNotTyped ) => {
            const vid_data: {
                videoId: string;
            } = vidDataNotTyped as unknown as { 
                videoId: string,
            };

            if ( vid_data ) 
            {
                return res.json({
                    reply  : 'يوجد حصة بنفس هذا المقطع من قبل.',
                    code   : 404,
                });
            }

            return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${data.vid}&key=AIzaSyDUCz4h_WyzIIsMi6ww6PbRQgd67NnELLo`).then(r=>r.json()).then(resp => {
                const newList = (resp as unknown as {
                    items: [{
                        id: {
                            videoId: string
                        },
                        snippet: {
                            title     : string,
                            thumbnails: {
                                high: {
                                    url: string
                                }
                            }
                        }
                    }]
                });

                return dbclass.getDefaultVideosCollection()?.insertOne({
                    videoId: data.vid,
                    videoEdu  : data.edul,
                    videoImage: newList.items[0].snippet.thumbnails.high.url,
                    videoTitle: newList.items[0].snippet.title,
                }).then(( ) => {
                    return res.json({
                        reply  : 'تم رفع هذه الحصة على المنصة بنجاح',
                        code   : 200,
                    });
                });
            });
        });
    }
}