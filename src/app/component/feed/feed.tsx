'use client';

import React, { useEffect, useState } from "react";
import "./feed.css";
import { SelectMode } from "./selectMode/selectMode";
import { Card, Publication } from "./card/card";

const persons = [
  "BrewMaster", "Cervejeiro123", "LúpuloLovers", "MalteMania", "BrewBrothers",
  "CervejaNaVeia", "ArtesanalBrasil", "HopHead", "CervejaArte", "BrewBuzz",
  "MalteEBreu", "LúpuloLivre", "BeerNerd", "CervejaCriativa", "ArtesanalGourmet",
  "Cerveja&Cultura", "BrewTalks", "CervejaDoMês", "HopCraft", "BrewBliss"
];

const contents = [
  "Experimentamos a nova IPA com lúpulos exclusivos do Brasil. Sensacional!",
  "Uma stout envelhecida em barris de carvalho. Sabor intenso e complexo!",
  "Nova Pilsen com toques de maracujá, refrescante e perfeita para o verão.",
  "Hoje vamos falar sobre a importância do malte na produção de cervejas artesanais.",
  "Lançamento da nova linha de cervejas frutadas, venha conferir!",
  "Degustação às cegas com cervejas artesanais locais. Resultados surpreendentes!",
  "Dicas para harmonizar sua cerveja com pratos típicos brasileiros.",
  "IPA duplo lúpulo da semana: notas cítricas e amargor equilibrado.",
  "Explorando as tendências de cervejas ácidas e sour.",
  "Novo rótulo da nossa premiada Witbier já está disponível.",
  "Participamos de um festival de cervejas artesanais e trouxemos as melhores dicas.",
  "Como fazer uma cerveja artesanal em casa: guia passo a passo.",
  "Os melhores estilos de cerveja para o inverno: dicas e sugestões.",
  "A influência das leveduras na complexidade das cervejas.",
  "Cerveja e gastronomia: combinando sabores e aromas.",
  "Entrevista exclusiva com o mestre cervejeiro da Cervejaria XYZ.",
  "O que é dry hopping e como ele influencia o sabor da cerveja.",
  "Conheça a cerveja do mês: uma Red Ale com toques de caramelo.",
  "Tour virtual pela fábrica de cerveja artesanal HopCraft. Não perca!",
  "Os benefícios das cervejas artesanais para a saúde quando consumidas com moderação."
];
export const Feed: React.FunctionComponent = () => {
  const [publications, setPublications] = useState<Publication[]>([]);

  const [filter, setFilter] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomPerson = persons[Math.floor(Math.random() * persons.length)];
      const randomContent = contents[Math.floor(Math.random() * contents.length)];
      
      const newPublication: Publication = {
        author: randomPerson,
        publication_date: new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }),
        summary: randomContent,
        followed: Math.random() < 0.5
      };

      // Adiciona a nova publicação ao final da lista, mantendo a ordem
      setPublications((prev) => [...prev, newPublication]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="feed-wrapper">
      <SelectMode onSelected={(m: boolean) => setFilter(m)}></SelectMode>

      <div className="feed-container">
        <div className="feed-viewport">
          {publications.filter((p: Publication) => {
            if(filter){
              return true
            }
            return p.followed
          }).map((p, i) => <Card {...p} key={p.publication_date}></Card>)}
        </div>
      </div>
    </section>
  );
};