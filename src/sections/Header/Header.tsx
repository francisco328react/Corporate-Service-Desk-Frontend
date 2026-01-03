export function Header() {
    return (
        <header className="w-full fixed top-0 z-50 bg-white/90 backdrop-blur border-b">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <span className="font-serif text-xl">
                    Beatriz Silveira
                </span>

                <nav className="hidden md:flex gap-8 text-base font-medium">
                    <a href="#sobre" className="hover:text-primary transition cursor-pointer">Sobre</a>
                    <a href="#servicos" className="hover:text-primary transition cursor-pointer">Serviços</a>
                    <a href="#abordagem" className="hover:text-primary transition cursor-pointer">Abordagem</a>
                    <a href="#contato" className="hover:text-primary transition cursor-pointer">Contato</a>
                </nav>

                <a 
                    href="https://wa.me/qr/GVJTH2Z3EEKEJ1"
                    target="_blank"
                    className="inline-block bg-purple-400 px-8 py-4 rounded-full font-medium hover:opacity-90 bg-purple-500 transition"
                >
                    Agendar consulta
                </a>
            </div>
        </header>
    )
}