import { Profile } from "./profile";

export default function name() {
  return <main className="bg-white pb-10">
  <div className="title-img bg-[url('/api/image?name=team&type=public')]"></div>
    <h1 className="title">Equipes de Desenvolvimento</h1>

    {/* <h2 className="subtitle container mx-auto">Time de negócios</h2>
    <div className="container mx-auto flex gap-10">
      <Profile github={"Matias0230"} linkedin={"https://www.linkedin.com/in/matias-willames-1a9753288/"} category={"Business manager"}></Profile>
      <Profile github={"Andersonhacker"} linkedin={"https://www.linkedin.com/in/bernardo-silva-a165b730b/"} category={"Business manager"}></Profile>
    </div> */}

    <h2 className="subtitle container mx-auto">Time de Designer</h2>
    <div className="container mx-auto flex gap-10">
      <Profile github={"TheMarcosCabral"} linkedin={"https://www.linkedin.com/in/marcos-cabral-a67630162/"} category={"Designer"}></Profile>
    </div>

    <h2 className="subtitle container mx-auto">Time de Frontend</h2>
    <div className="container mx-auto flex gap-10">
      <Profile github={"souza-tacy"} linkedin={"https://www.linkedin.com/in/tacyanna-souza-65b5a62a5/"} category={"Team Lead"}></Profile>
      <Profile github={"RobertoVitor7"} linkedin={"https://www.linkedin.com/in/roberto-vitor-6948ab261/"} category={"Developer Front-end"}></Profile>
      {/* <Profile github={"vitorms7"} linkedin={"https://www.linkedin.com/in/vitorsant7/"} category={"Developer Front-end"}></Profile> */}
    </div>
    <h2 className="subtitle container mx-auto">Consultoria</h2>
    <div className="container mx-auto flex gap-10">
      <Profile github={"SilvioCavalcantiBonfim"} linkedin={"https://www.linkedin.com/in/silvio-cavalcanti-bonfim/"} category={"Developer"}></Profile>
      {/* <Profile github={"HarthurMedeiros"} linkedin={"https://www.linkedin.com/in/arthur-medeiros-124673288/"} category={"Developer Back-end"}></Profile> */}
    </div>

    {/* <h2 className="subtitle container mx-auto">Time de Database</h2>
    <div className="container mx-auto">
      <Profile github={"HerberthSantos7"} linkedin={"https://www.linkedin.com/in/herberth-felipe-1733151a1/"} category={"Database"}></Profile>
    </div> */}
  </main>
} 