const steps = [
  {
    title: "Acolhimento",
    text: "Primeiro contato humanizado, com escuta ativa e respeito."
  },
  {
    title: "Compreensão",
    text: "Identificação das demandas emocionais e sociais."
  },
  {
    title: "Planejamento",
    text: "Definição do plano terapêutico individualizado."
  },
  {
    title: "Acompanhamento",
    text: "Sessões contínuas com foco em evolução e bem-estar."
  }
];

export function Method() {
  return (
    <section id="metodo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            Minha abordagem
          </h2>
          <p className="text-muted">
            Atendimento centrado no respeito, escuta ativa e ética profissional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-secondary p-6 rounded-2xl text-center">
              <span className="text-primary font-bold text-xl">
                {i + 1}
              </span>
              <h3 className="mt-3 font-bold">{step.title}</h3>
              <p className="text-base text-muted mt-2">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
