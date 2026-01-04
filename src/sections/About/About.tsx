import perfilBia2 from '../../assets/perfil-bia-2.png'

export function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div className="flex justify-center">
          <img
            src={perfilBia2}
            alt="Beatriz Silveira Psicóloga"
            className="
              w-[260px] sm:w-[320px] md:w-[360px]
              rounded-3xl shadow-xl object-cover
            "
          />
        </div>

        <div className="space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-primary">
            Sobre Beatriz Silveira
          </h2>

          <p className="text-muted leading-relaxed">
            Psicóloga Clínica e Social, formada desde 22 de julho de 2022,
            atua com foco em acolhimento, escuta ativa e ética
            profissional, oferecendo um espaço seguro para o cuidado da saúde
            emocional.
          </p>

          <p className="text-muted leading-relaxed">
            Servidora pública na SEJUSC e registrada sob o CRP 20/11.925, trabalha
            com atendimento humanizado, respeitando a singularidade de cada
            pessoa.
          </p>

          <ul className="grid grid-cols-2 gap-4 mt-6 text-secondary">
            <li className="bg-secondary p-4 rounded-xl font-bold">CRP 20/11.925</li>
            <li className="bg-secondary p-4 rounded-xl font-bold">+2 anos de atuação</li>
            <li className="bg-secondary p-4 rounded-xl font-bold">Atendimento humanizado</li>
            <li className="bg-secondary p-4 rounded-xl font-bold">Servidora pública</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
