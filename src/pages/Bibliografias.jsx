import { CardContainer, HeaderContainer, PContainer, DownContainer} from "./Home.styled";

export default function Bibliografias() {
  return (
    <CardContainer>
        <HeaderContainer>
       <h1>
        <a href="/">LOCAPET</a>
       </h1>
        <div>
        <a href="https://5173-annyellyp-locapet-67sesp33z5l.ws-us115.gitpod.io/GuiaDeUso">Guia De Uso</a>
        </div>
        <div>
        <a href="https://5173-annyellyp-locapet-67sesp33z5l.ws-us115.gitpod.io/Materiais">Materiais</a>
        </div>
        <div>
        <a href="https://5173-annyellyp-locapet-67sesp33z5l.ws-us115.gitpod.io/Bibliografias">Bibliografias</a>

        </div>
        <div>
        <a href="https://5173-annyellyp-locapet-67sesp33z5l.ws-us115.gitpod.io/integrantes">Integrantes</a>
        </div>
      </HeaderContainer>

      <PContainer>
        <p>Nosso projeto é baseado em pesquisa científica, com o objetivo de encontrar a forma mais eficiente e precisa de informar a localização do seu pet.</p>

        <div>
            <p>JESUS , Gabrielly Maia Tavares De . MAUS-TRATOS E ABANDONO DE ANIMAIS DOMÉSTICOS E SEUS DESAFIOS NO BRASIL. 1. ed. GOIÂNIA-GO: BANCA EXAMINADORA, 2021. 25-30 p. v. 1.</p>
            <p>
            DE AZEVEDO, Samuel Viana . A PROBLEMÁTICA DO ABANDONO DE ANIMAIS DOMÉSTICOS FRENTE À PANDEMIA DO CORONAVÍRUS NO BRASIL. 1. ed. GOIÂNIA: BANCA EXAMINADORA, 2020. 23-26 p. v. 1.
            </p>
        </div>
      </PContainer>

      <DownContainer>
        <h1>LOCAPET</h1>
        <p>Alguma dúvida? Entre em contato pelo 
        e-mail: locapet.support@gmail.com</p>
      </DownContainer>

    </CardContainer>
  )
}
