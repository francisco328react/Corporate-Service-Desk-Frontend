export function Header() {
    return (
        <header className="w-full fixed top-0 z-50 bg-white/90 backdrop-blur border-b">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <span className="font-serif text-lg text-primary">
                    Beatriz Silveira
                </span>

                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    <a href="#sobre" className="hover:text-primary transition cursor-pointer">Sobre</a>
                    <a href="#servico" className="hover:text-primary transition cursor-pointer">Serviços</a>
                    <a href="#abordagem" className="hover:text-primary transition cursor-pointer">Abordagem</a>
                    <a href="#contato" className="hover:text-primary transition cursor-pointer">Contato</a>
                </nav>

                <a 
                    href="https://wa.me/qr/GVJTH2Z3EEKEJ1"
                    target="_blank"
                    className="bg-primary text-primary px-5 py-2 rounded-full text-sm hover:opacity-90 transition cursor-pointer"
                >
                    Agendar consulta
                </a>
            </div>
        </header>
    )
}