import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, type, format = 'webp', color = null } = req.query;

    // Verifica se estamos em ambiente de desenvolvimento ou produção
    const isDev = process.env.NODE_ENV === 'development';
    const baseUri = isDev ? 'http://localhost:3000/images' : `https://rota-da-cerveja.vercel.app/images`;//`${process.env.STORAGE_URI}/images`;

    const uri = `${baseUri}/${type}/${color ? `${color}/` : ''}${name}.${format}`;

    console.log(uri);

    try {
        const response = await axios.get(uri, { responseType: 'arraybuffer' });
        res.setHeader('Content-Type', response.headers['content-type']);
        res.send(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

export default handle;
