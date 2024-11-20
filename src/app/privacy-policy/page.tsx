import { Metadata } from "next";
import React from "react";
import "./style.css";
import { accessibility, privacyPolicy, useTerm } from "./data";
import { Information } from "../component/information/information";
import { Goto } from "../component/goto/goto";

export const metadata: Metadata = {
    title: 'Politica de Privacidade'
}



const politicadeprivacidade: React.FunctionComponent = () => {
    return <main className="privacy-policy-wrapper">
        <div className="title-img bg-[url('/api/image?name=privacy-policy&type=public')]"></div>
        <h1 className="title">Políticas de Privacidade da Rota da Cerveja</h1>
        <p>A Rota da Cerveja tem um compromisso inabalável com a privacidade e a proteção dos dados dos seus usuários. Entendemos a importância de salvaguardar as informações pessoais e adotamos práticas rigorosas de segurança para assegurar que os dados coletados sejam manuseados com o máximo cuidado. Nossa política de privacidade detalha os métodos pelos quais as informações são coletadas, processadas e compartilhadas, sempre com o consentimento do usuário e em conformidade com as leis de proteção de dados vigentes. Nosso objetivo é fornecer uma experiência segura e confiável para os entusiastas de cerveja artesanal que utilizam nossa plataforma, garantindo que sua privacidade seja respeitada em cada etapa de sua jornada conosco. A transparência é a pedra angular de nossa abordagem para com a privacidade do usuário, e estamos sempre disponíveis para esclarecer quaisquer dúvidas relacionadas ao tratamento das informações pessoais.</p>
        <div className="privacy-policy-container">
            {privacyPolicy.map((info, index) => <div className="info-container" key={index}><Information {...info}></Information></div>)}
        </div>
        <div className="title-img bg-[url('/api/image?name=use-terms&type=public')]"></div>
        <h1 className="title" id="terms-of-use">Termos de Serviço da Rota da Cerveja</h1>
        <p>Bem-vindo ao Rota da Cerveja! Ao utilizar os nossos serviços, você concorda com estes Termos de Serviço. É importante que você os leia cuidadosamente.</p>
        <div className="privacy-policy-container">
            {useTerm.map((info, index) => <div className="info-container" key={index}><Information {...info}></Information></div>)}
        </div>
        <div className="title-img bg-[url('/api/image?name=accessibility&type=public')]"></div>
        <h1 className="title" id="accessibility">Acessibilidade no Rota da Cerveja</h1>
        <p>No Rota da Cerveja, estamos comprometidos em tornar nossa plataforma acessível e fácil de usar para todos os nossos clientes, incluindo aqueles com deficiências. Trabalhamos continuamente para melhorar a acessibilidade do nosso site e para garantir uma experiência positiva para todos os usuários.</p>
        <div className="privacy-policy-container">
            {accessibility.map((info, index) => <div className="info-container" key={index}><Information {...info}></Information></div>)}
        </div>
    </main >;
}

export default politicadeprivacidade;