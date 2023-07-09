const {Router, Request, response, json, urlencoded} = require("express")
const fs = require("fs");
const compression = require("compression");
const cors = require("cors");
const path = require("path");
const api = Router();

api.use(json({limit: '512kb'}));
api.use(urlencoded({extended: true}));

// api.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, EEA-Validation-Key');
//     const key = 'SUeuh5OzIb21i4PqqNFqeT942yu5hKjEQH7Y8QBywVpSgGnYYx2E93WgcEQ9cMFfzUX4WUgdq3cej4NfHVNNNDNvdxGttUABkh9Je6dz7zvbJr4rTt';
//     if ((req.headers)['eea-validation-key'] != key ) return res.json({
//         error : 'Unauthorized Access',
//         status: 401,
//         code  : 401, 
//     });
//     return next();
// });

const routing_dir_path = path.join(__dirname, '/routing/');
const routing_dir_fs = fs.readdirSync(routing_dir_path).filter(e => e.endsWith('.js'));
for(let i = 0; i < routing_dir_fs.length; i++) {
    const index_file = routing_dir_fs[i];
    const file_path = path.join(routing_dir_path, index_file.toString());
    const file = require(file_path);
    const fp = ('/api' + (file.api_module.type_path?.toString() || '') + file.api_module.route_name) 
    switch(file.api_module.routeType) {
        case "GET":
            api.get(fp, async(req, res) => await file.api_module.mod(req, res));
            break;
        case 'POST':
            api.post(fp, async(req, res) => await file.api_module.mod(req, res));
            break;
        default:
            api.get(fp, async(req, res) => await file.api_module.mod(req, res));
            break;
    };
}

module.exports = {api}