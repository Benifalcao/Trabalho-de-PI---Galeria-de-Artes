

const escolasSeed = [
    { slug: "trovadorismo", nome: "Trovadorismo", periodo: "1189 – 1418", descricao: "Poesia trovadoresca ibérica.", link: "Trovadorismo/trovadorismo.html" },
    { slug: "classicismo", nome: "Classicismo", periodo: "1527 – 1580", descricao: "Equilíbrio e racionalidade.", link: "Classicismo/classicismo.html" },
    { slug: "barroco", nome: "Barroco", periodo: "1601 – 1768", descricao: "Conflito entre fé e razão.", link: "barroco.html" },
    { slug: "arcadismo", nome: "Arcadismo", periodo: "1768 – 1836", descricao: "Retorno à simplicidade.", link: "arcadismo.html" },
    { slug: "romantismo", nome: "Romantismo", periodo: "1836 – 1881", descricao: "Subjetividade e idealização.", link: "Romantismo/romantismo.html" },
    { slug: "realismo", nome: "Realismo", periodo: "1881 – 1893", descricao: "Observação crítica da realidade.", link: "realismo.html" },
    { slug: "parnasianismo", nome: "Parnasianismo", periodo: "1882 – 1922", descricao: "Culto à forma.", link: "parnasianismo.html" },
    { slug: "modernismo", nome: "Modernismo", periodo: "1922 – 1960", descricao: "Ruptura estética.", link: "modernismo.html" }
];

const autoresSeed = [
    {
        slug: "jose-alencar",
        nome: "José Martiniano de Alencar",
        escolaSlug: "romantismo",
        link: "Romantismo/Autores/jose-alencar.html",
        periodo: "1829 – 1877",
        local: "Fortaleza, CE",
        bio: "José de Alencar foi romancista, dramaturgo, jornalista e político brasileiro, considerado o principal nome da prosa romântica nacional e um dos fundadores do romance brasileiro.",
        obras: ["Iracema (1865)", "O Guarani (1857)", "Senhora (1875)", "Lucíola (1862)"],
        temas: "Indianismo, formação da identidade nacional, idealização da mulher e da natureza, heroísmo e amor romântico.",
        caracteristicas: "Linguagem lírica e descritiva, valorização da paisagem brasileira, construção de heróis idealizados e forte nacionalismo.",
        influencias: "Walter Scott, Chateaubriand e o Romantismo europeu, adaptados à realidade cultural brasileira.",
        citacao: "Iracema, a virgem dos lábios de mel, que tinha os cabelos mais negros que a asa da graúna..."
    },
    {
        slug: "goncalves-dias",
        nome: "Antônio Gonçalves Dias",
        escolaSlug: "romantismo",
        link: "Romantismo/Autores/goncalves-dias.html",
        periodo: "1823 – 1864",
        local: "Caxias, MA",
        bio: "Gonçalves Dias foi poeta, advogado, jornalista e dramaturgo brasileiro, considerado um dos maiores representantes da primeira geração do Romantismo no Brasil. Sua obra destacou-se pelo nacionalismo, indianismo e exaltação da natureza brasileira.",
        obras: ["Canção do Exílio (1843)", "I-Juca-Pirama (1851)", "Primeiros Cantos (1846)", "Últimos Cantos (1851)"],
        temas: "Nacionalismo, saudade da pátria, valorização da natureza brasileira, cultura indígena, heroísmo e identidade nacional.",
        caracteristicas: "Linguagem lírica e musical, forte sentimentalismo, exaltação da pátria, uso do indianismo como símbolo nacional e descrição idealizada da natureza.",
        influencias: "Influenciado pelo Romantismo europeu, especialmente por autores como Almeida Garrett e Alexandre Herculano, adaptando essas referências à realidade brasileira.",
        citacao: "Minha terra tem palmeiras, onde canta o sabiá; as aves que aqui gorjeiam, não gorjeiam como lá."
    },
    {
        slug: "macedo",
        nome: "Joaquim Manuel de Macedo",
        escolaSlug: "romantismo",
        link: "Romantismo/Autores/macedo.html",
        periodo: "1820 – 1882",
        local: "Itaboraí, RJ",
        bio: "Joaquim Manuel de Macedo foi médico, professor, jornalista, político e escritor brasileiro. É considerado um dos principais romancistas da primeira geração romântica e tornou-se famoso por retratar os costumes da sociedade brasileira do século XIX de forma leve e acessível.",
        obras: ["A Moreninha (1844)", "O Moço Loiro (1845)", "Vicentina (1853)", "As Mulheres de Mantilha (1870)"],
        temas: "Amor romântico, relações familiares, juventude, costumes da sociedade carioca, vida burguesa e idealização amorosa.",
        caracteristicas: "Linguagem simples e fluida, narrativa leve, humor moderado, descrições dos costumes sociais e foco em histórias sentimentais voltadas ao público leitor da época.",
        influencias: "Influenciado pelo Romantismo europeu e pelos romances de costumes, adaptou essas referências à realidade urbana brasileira, especialmente à sociedade do Rio de Janeiro imperial.",
        citacao: "A Moreninha é considerado o primeiro grande romance romântico brasileiro."
    }
];