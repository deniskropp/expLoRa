import { readdirSync } from 'fs'

export default function handler(req: any, res: any) {
    const files = readdirSync('./lora')

    const list = files.filter((file) => {
        return file.endsWith('.safetensor')
    }).map((file) => {
        return file.replace('.safetensor', '')
    })

    res.status(200).json({ list })
}
