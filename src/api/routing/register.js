const api_module = {
    route_name: 'register',
    type_path: '/db/',
    routeType: 'GET',
    mod: async(req, res) => {
        console.log("REACHED")
        return res.json({ working: true })
    }
}

module.exports = {api_module}