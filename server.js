/*
const jsonServer = require('json-server')


const server = jsonServer.create()

const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/api', router)
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://cjchichi.github.io/End-Phase-1-Project') // The URL you put here is for the web application that you have deployed using Github Pages
    res.header('Access-Control-Allow-Headers', '*')
    next()
})
server.listen(process.env.PORT || 5000, () => {
    console.log('JSON Server is running')
})
*/

const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Middlewares
server.use(middlewares);

// Handle CORS and Preflight Requests
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://cjchichi.github.io/End-Phase-1-Project'); // Allow frontend URL
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') {
        return res.status(200).end(); // Respond to preflight requests
    }
    next();
});

// Use the JSON Router
server.use('/api', router);

// Start Server
server.listen(process.env.PORT || 5000, () => {
    console.log('JSON Server is running');
});
