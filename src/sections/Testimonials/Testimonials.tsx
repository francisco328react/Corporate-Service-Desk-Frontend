const testimonials = [
  {
    name: "Paciente A",
    text: "Me senti acolhida desde a primeira sessão. A Beatriz me ajudou a enxergar minha vida com mais clareza."
  },
  {
    name: "Paciente B",
    text: "Profissional atenciosa, humana e extremamente competente."
  },
  {
    name: "Paciente C",
    text: "A terapia mudou minha forma de lidar com meus sentimentos."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            Depoimentos
          </h2>
          <p className="text-muted">
            Relatos de pessoas que confiaram no meu trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <p className="italic text-sm text-muted mb-4">"{t.text}"</p>
              <span className="font-semibold text-primary">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
