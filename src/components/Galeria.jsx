import { useEffect, useState } from "react";

const caminhoDasImagens = "../assets/imgs/História iarv/";
const arquivosDeImagem = import.meta.glob(
    "../assets/imgs/História iarv/**/*.{jpg,jpeg,png,webp}",
    { eager: true, import: "default", query: "?url" }
);



const imagens = Object.entries(arquivosDeImagem)
    .map(([caminho, src]) => {
        const partes = caminho.replace(caminhoDasImagens, "").split("/");
        partes.pop();

        return {
            src,
            categoria: partes[0] || "Registros gerais",
            album: partes.join(" / ") || "Registros gerais",
            id: caminho,
            alt: `Registro fotográfico${partes.length ? ` de ${partes.join(", ")}` : ""}`,
        };
    })
    .sort((a, b) => a.id.localeCompare(b.id, "pt-BR", { numeric: true }));

const categorias = [
    "Todos",
    ...new Set(imagens.map((imagem) => imagem.categoria).sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true }))),
];

export default function Galeria() {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
    const [indiceImagemAberta, setIndiceImagemAberta] = useState(null);
    const imagensVisiveis = categoriaSelecionada === "Todos"
        ? imagens
        : imagens.filter((imagem) => imagem.categoria === categoriaSelecionada);
    const imagemAberta = indiceImagemAberta === null ? null : imagensVisiveis[indiceImagemAberta];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    useEffect(() => {
        if (indiceImagemAberta === null) return undefined;

        function navegarPeloTeclado(evento) {
            if (evento.key === "Escape") {
                setIndiceImagemAberta(null);
            } else if (evento.key === "ArrowRight") {
                setIndiceImagemAberta((indiceAtual) => (indiceAtual + 1) % imagensVisiveis.length);
            } else if (evento.key === "ArrowLeft") {
                setIndiceImagemAberta((indiceAtual) => (indiceAtual - 1 + imagensVisiveis.length) % imagensVisiveis.length);
            }
        }

        window.addEventListener("keydown", navegarPeloTeclado);
        return () => window.removeEventListener("keydown", navegarPeloTeclado);
    }, [imagensVisiveis.length, indiceImagemAberta]);

    function navegarImagem(direcao) {
        setIndiceImagemAberta((indiceAtual) => (
            (indiceAtual + direcao + imagensVisiveis.length) % imagensVisiveis.length
        ));
    }

    return (
        <section className="min-h-screen bg-bg2 px-6 py-16 md:py-20">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
                <h2 className="mb-4 text-center text-3xl font-bold uppercase tracking-widest text-tertiary md:text-4xl">
                    Nossa história em imagens
                </h2>
                <p className="mb-10 max-w-2xl text-center font-tertiary text-gray-600">
                    Relembre os momentos marcantes da Igreja Apostólica Restaurando Vidas.
                </p>

                <div className="mb-10 flex max-w-full flex-wrap justify-center gap-3" aria-label="Filtrar fotos por álbum">
                    {categorias.map((categoria) => (
                        <button
                            key={categoria}
                            type="button"
                            onClick={() => setCategoriaSelecionada(categoria)}
                            aria-pressed={categoriaSelecionada === categoria}
                            className={`rounded-full px-4 py-2 font-tertiary text-sm font-semibold transition-colors ${
                                categoriaSelecionada === categoria
                                    ? "bg-quarternary text-white"
                                    : "bg-white text-tertiary hover:bg-primary hover:text-white"
                            }`}
                        >
                            {categoria}
                        </button>
                    ))}
                </div>

                <p className="mb-5 self-start font-tertiary text-sm text-gray-600" aria-live="polite">
                    {imagensVisiveis.length} {imagensVisiveis.length === 1 ? "foto" : "fotos"}
                </p>

                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {imagensVisiveis.map((imagem) => (
                        <figure
                            key={imagem.id}
                            className="group overflow-hidden rounded-xl bg-white shadow-cards"
                        >
                            <button
                                type="button"
                                onClick={() => setIndiceImagemAberta(imagensVisiveis.findIndex((item) => item.id === imagem.id))}
                                aria-label={`Ampliar foto: ${imagem.album}`}
                                className="block aspect-square w-full cursor-zoom-in overflow-hidden bg-gray-200"
                            >
                                <img
                                    src={imagem.src}
                                    alt={imagem.alt}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </button>
                            <figcaption className="border-t-4 border-primary px-4 py-3">
                                <span className="block truncate font-tertiary text-sm font-semibold text-tertiary" title={imagem.album}>
                                    {imagem.album}
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>

            {imagemAberta && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Visualizador de fotos"
                    onClick={() => setIndiceImagemAberta(null)}
                >
                    <button
                        type="button"
                        onClick={() => setIndiceImagemAberta(null)}
                        aria-label="Fechar visualizador"
                        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-3xl text-white transition-colors hover:bg-white/30"
                    >
                        &times;
                    </button>

                    <button
                        type="button"
                        onClick={(evento) => {
                            evento.stopPropagation();
                            navegarImagem(-1);
                        }}
                        aria-label="Ver foto anterior"
                        className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-3xl text-white transition-colors hover:bg-white/30 md:left-8"
                    >
                        &#8249;
                    </button>

                    <figure
                        className="flex max-h-full max-w-full flex-col items-center gap-3"
                        onClick={(evento) => evento.stopPropagation()}
                    >
                        <img
                            src={imagemAberta.src}
                            alt={imagemAberta.alt}
                            className="max-h-[80vh] max-w-[85vw] object-contain"
                        />
                        <figcaption className="font-tertiary text-sm text-white">
                            {indiceImagemAberta + 1} / {imagensVisiveis.length} &middot; {imagemAberta.album}
                        </figcaption>
                    </figure>

                    <button
                        type="button"
                        onClick={(evento) => {
                            evento.stopPropagation();
                            navegarImagem(1);
                        }}
                        aria-label="Ver próxima foto"
                        className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-3xl text-white transition-colors hover:bg-white/30 md:right-8"
                    >
                        &#8250;
                    </button>
                </div>
            )}
        </section>
    );
}
