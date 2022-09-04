import express, { Application, Request, Response, NextFunction } from 'express';
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

const app: Application = express();


// Configuration
const PORT = 3000;
const HOST = "localhost";
const API_SERVICE_URL = "https://itunes.apple.com/search";

// Info GET endpoint
// app.get('/info', (req, res, next) => {
//     res.send('This is a proxy service which proxies to Billing and Account APIs.');
//  });

// Not found middleware
function routesNotFound(req: RequestHandler, res: Response, next: Ne) {
    res.status(404)
    const error = new Error('Not found')
    next(error)
}

// Error handler middleware
function errorHandler(err: Error, req: RequestHandler, res: Response) {
    if (res.headersSent) {
        return res.status(res.statusCode || 500)
    }

    res.json({message: err.message})
}

// Proxy endpoints
app.use('/api', createProxyMiddleware({ target: API_SERVICE_URL, changeOrigin: true }));
app.use(routesNotFound);
app.use(errorHandler);

 // Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
 });


