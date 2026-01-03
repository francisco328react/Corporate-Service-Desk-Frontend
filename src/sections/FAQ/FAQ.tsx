const faqs = [
  {
    q: "O atendimento é online ou presencial?",
    a: "Atualmente os atendimentos são realizados de forma online, garantindo comodidade e segurança."
  },
  {
    q: "Quanto tempo dura a sessão?",
    a: "Cada sessão tem duração média de 50 minutos."
  },
  {
    q: "Preciso ter um problema grave para iniciar a terapia?",
    a: "Não. A terapia também é indicada para autoconhecimento, prevenção e fortalecimento emocional."
  },
  {
    q: "Como faço para agendar?",
    a: "Basta clicar em qualquer botão de WhatsApp do site e falar diretamente comigo."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            Dúvidas frequentes
          </h2>
          <p className="text-muted">
            Informações importantes para você iniciar sua terapia.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="border rounded-2xl p-6">
              <h3 className="font-semibold mb-2">{f.q}</h3>
              <p className="text-muted text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
