import { Header } from "@/app/component/header/header";
import { Carousel } from "@/app/component/carousel/carousel";
import { Feed } from "@/app/component/feed/feed";

import { EmblaOptionsType } from "embla-carousel";
import { Recommendation } from "@/app/component/recommendation/recommendation";
import axios, { Axios } from "axios";

const breweries: string[] = ["capibabier", "ekaut", "riffen", "marcolino", "manguezal", "doutorado-do-chopp"];
const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

type Content = {
  breweries: string[];
  beers: { name: string, description: string }[]
};

export default async function Home() {

  // const contentResponse = await axios.get<Content>(`${process.env.API_URI}/content`);

  const content: Content = {
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
        "name": "Pernambuco Weiss",
        "description": "Pernambuco Weiss é uma cerveja de trigo refrescante com notas cítricas. Seu corpo leve e sabor frutado proporcionam uma experiência agradável e revigorante. Ideal para os dias quentes."
    }
    ]
  };

  console.log(content)

  return (<>
    <Header></Header>
    <Carousel slides={content.breweries} options={OPTIONS}></Carousel>
    <div className="flex flex-col lg:flex-row">
      <Feed></Feed>
      <Recommendation beers={content.beers}></Recommendation>
    </div>
  </>
  );
}
