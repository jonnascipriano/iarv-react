import imagemAdoracao from "../assets/imgs/hero-adoração.jpg";

export default function Hero() {
    return (
        <section className="relative isolate flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-neutral-950 px-6 py-24 text-white">
            <img
                src={imagemAdoracao}
                alt=""
                className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-neutral-950 via-neutral-950/75 to-neutral-950/25" />
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-neutral-950/70 via-transparent to-neutral-950/20" />

            <div className="mx-auto w-full max-w-6xl">
                <div className="max-w-4xl">
                    <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary backdrop-blur-sm sm:text-sm">
                        <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_12px_var(--color-secondary)]" />
                        Igreja Apostólica Restaurando Vidas
                    </p>

                    <h1
                        className="max-w-4xl leading-[0.95] tracking-tight"
                        style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
                    >
                        Bem-vindo à
                        <br />
                        <span className="text-secondary">nossa casa.</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
                        Um lugar de adoração, comunhão e novos começos. Há sempre
                        espaço para você aqui.
                    </p>

                    <a
                        href=""
                        className="mt-9 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-tertiary font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:bg-quarternary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
                    >
                        Horários dos cultos
                        <span aria-hidden="true" className="text-xl leading-none">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
