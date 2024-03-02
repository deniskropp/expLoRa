import { IncomingMessage, ServerResponse, createServer } from 'http'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 5000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
        //console.log(req.url)

        try {
            await handle(req, res)
        } catch (err) {
            console.error('Error occurred handling', req.url, err)
            res.statusCode = 500
            res.end('internal server error')
        }
    })

    server.once('error', (err: any) => {
        console.error(err)
        process.exit(1)
    })
    server.listen(port, () => {
        console.log(`> Ready on http://${hostname}:${port}`)
    })
})
