import React from "react";
import { BeerCard, BeerProps } from "./beerCard/beerCard";
import "./recommendation.css"

const beer: BeerProps[] = [
  {
    src: "/api/image?name=ipa-ekaut&type=public",
    name: "EKAUT EL CHANCHO SESSION IPA",
    description: "Produzida também pela cervejaria Ekaut, a Chancho Session IPA é uma cerveja de corpo leve, refrescante, amargor equilibrado e baixo teor alcoólico. A junção dos lúpulos El Dorado, Amarillo e Citra deixaram a bebida..."
  },
  {
    src: "/api/image?name=cumade-florzinha-capunga&type=public",
    name: "CAPUNGA CUMADE FLORZINHA",
    description: "Cumade Florzinha é a IPA da Capunga. Uma cerveja com aroma marcante de frutas tropicais, amargor intenso e corpo médio. Neste rótulo estamos homenageando uma das figuras mais conhecidas do folclore nordestino."
  }
];

type RecommendationProps = {
  beers: {name: string, description: string}[]
}

export const Recommendation: React.FunctionComponent<RecommendationProps> = ({beers}: RecommendationProps) => {
  return <>
    <div className="recommendation-wrapper">
      <h1 className='title text-white bg-transparent capitalize text-center'>Recomendações do dia</h1>
      <div className="flex gap-10 overflow-x-auto">
        {beers.map((b, i) => <BeerCard {...b} key={i}></BeerCard>)}
      </div>
    </div>
  </>
}