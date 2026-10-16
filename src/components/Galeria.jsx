const albunsHistoricos = [
    {
        id: 1,
        titulo: "Inauguração da Sede",
        ano: "2018",
        quantidade: 45,
        capa: "link-da-foto-capa.jpg",
    },
    {
        id: 2,
        titulo: "Batismo nas Águas",
        ano: "2023",
        quantidade: 120,
        capa: "link-da-foto-capa2.jpg",
    }
];


export default function Galeria() {
    return (
        <section className="py-20 px-6 min-h-screen bg-bg2 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-tertiary mb-4 uppercase font-busorama text-center">
                Nossa História
            </h2>
            <p className="font-poppins text-gray-600 mb-12 text-center max-w-2xl">
                Relembre os momentos marcantes da Igreja Apostólica Restaurando Vidas através dos nossos álbuns fotográficos.
            </p>

            {/* Grid responsivo: 1 coluna no celular, 2 no tablet, 3 no PC */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {albunsHistoricos.map((album) => (
                    <div 
                        key={album.id} 
                        className="bg-white rounded-2xl overflow-hidden shadow-cards cursor-pointer group transition-transform duration-300 hover:-translate-y-2"
                        // Aqui você pode adicionar um onClick para abrir o álbum específico
                    >
                        {/* Container da Imagem com overlay no hover */}
                        <div className="relative aspect-video overflow-hidden bg-gray-200">
                            <img 
                                src={album.capa} 
                                alt={`Capa do álbum ${album.titulo}`} 
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay escuro que aparece ao passar o mouse */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-poppins font-bold tracking-wider">Ver Fotos</span>
                            </div>
                        </div>

                        {/* Informações do Álbum */}
                        <div className="p-5 border-t-4 border-primary">
                            <div className="flex justify-between items-center mb-2">
                                <span className="bg-quarternary/10 text-quarternary text-xs font-bold px-3 py-1 rounded-full">
                                    {album.ano}
                                </span>
                                <span className="text-gray-500 text-xs font-poppins">
                                    {album.quantidade} fotos
                                </span>
                            </div>
                            <h3 className="font-busorama text-tertiary font-bold text-lg leading-tight">
                                {album.titulo}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}