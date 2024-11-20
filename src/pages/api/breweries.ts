// import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {

    // const uri = `${process.env.API_URI}/content`;

    // try {
    //     const response = await axios.get(uri, { responseType: 'json' });
    //     res.setHeader('Content-Type', response.headers['content-type']);
    //     console.log(response.data);
    //     res.send(response.data);
    //     } catch (error) {
    //     console.log(error);
    //     res.status(200).json({  breweries: ["capibabier", "ekaut", "riffen", "marcolino", "manguezal", "doutorado-do-chopp"] });
    // }
        res.status(200).json({
            "breweries": [
                "Trigo e Companhia",
                "Lupulo Feliz",
                "Brewmasters do Sol",
                "Mestres da Cerveja",
                "Cervejaria Rio Cristalino",
                "Cervejaria Lago Azul"
            ],
            "beers": [
                {
                    "name": "Island Hopper Pils",
                    "description": "Island Hopper Pils é uma cerveja refrescante com um toque de cítricos. Seu corpo leve e sabor suave são complementados por um aroma fresco, tornando-a perfeita para os dias ensolarados. Uma celebração dos trópicos em cada gole."
                },
                {
                    "name": "Gin Tropicália",
                    "description": "Gin Tropicália é um gin leve e aromático, perfeito para cocktails. Com notas de frutas tropicais e ervas, este gin oferece uma experiência refrescante e sofisticada. Ideal para quem busca um toque de exotismo em suas bebidas."
                }
            ]
        });

}

export default handle;