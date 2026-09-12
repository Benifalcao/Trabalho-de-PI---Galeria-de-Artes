const escolasSeed = [
    { slug: "trovadorismo", nome: "Trovadorismo", periodo: "1189 – 1418", descricao: "Poesia trovadoresca ibérica.", link: "Trovadorismo/trovadorismo.html", imagem:"img/trovadorismo.jpeg" },
    { slug: "classicismo", nome: "Classicismo", periodo: "1527 – 1580", descricao: "Equilíbrio e racionalidade.", link: "Classicismo/classicismo.html",imagem:"img/Classicimo.jpeg"},
    { slug: "barroco", nome: "Barroco", periodo: "1601 – 1768", descricao: "Conflito entre fé e razão.", link: "barroco.html" },
    { slug: "arcadismo", nome: "Arcadismo", periodo: "1768 – 1836", descricao: "Retorno à simplicidade.", link: "arcadismo.html" },
    { slug: "romantismo", nome: "Romantismo", periodo: "1836 – 1881", descricao: "Subjetividade e idealização.", link: "Romantismo/romantismo.html" },
    { slug: "realismo", nome: "Realismo", periodo: "1881 – 1893", descricao: "Observação crítica da realidade.", link: "realismo.html" },
    { slug: "parnasianismo", nome: "Parnasianismo", periodo: "1882 – 1922", descricao: "Culto à forma.", link: "parnasianismo.html" },
    { slug: "modernismo", nome: "Modernismo", periodo: "1922 – 1960", descricao: "Ruptura estética.", link: "modernismo.html" }
];

const autoresSeed = [
    {
        slug: "martim-codax",
        nome: "Martim Codax",
        escolaSlug: "trovadorismo",
        link: "Trovadorismo/Autores/martim-codax.html",
        periodo: "Séc. XIII",
        local: "Vigo, Galiza",
        bio: "Martim Codax foi um trovador ou jogral galego-português ativo no século XIII. Pouco se sabe sobre sua vida pessoal, mas ele se tornou uma figura central da literatura medieval por suas cantigas de amigo que cantam o mar, a saudade e a espera pelo amado na ria de Vigo.",
        obras: [
            "Ondas do mar de Vigo",
            "Mandad'ei comigo",
            "Mia irmana fremosa",
            "Ay Deus, se sab'ora meu amigo",
            "Quantas sabedes amar amigo",
            "Eno sagrado, en Vigo",
            "Ai ondas que eu vin veer"
        ],
        temas: "Saudade do amado distante, o mar de Vigo como testemunha e interlocutor, a expectativa feminina, a natureza marinha, reuniões em santuários e a angústia da espera.",
        caracteristicas: "Composição sob a forma de cantigas de amigo (voz lírica feminina), estrutura paralelística rigorosa, presença de refrão (leixaprén) e grande musicalidade preservada no Pergaminho Vindel.",
        influencias: "Consolidou a tradição da lírica galego-portuguesa medieval, conectando a poesia culta trovadoresca às origens populares e marítimas do noroeste ibérico.",
        citacao: "Ondas do mar de Vigo, / se vistes meu amigo? / E ay Deus, se verrá cedo!"
    },
    {
        slug: "joao-garcia-de-guilhade",
        nome: "João Garcia de Guilhade",
        escolaSlug: "trovadorismo",
        link: "Trovadorismo/Autores/joao-guilhade.html",
        periodo: "Séc. XIII",
        local: "Guilhade, Portugal",
        bio: "João Garcia de Guilhade foi um dos trovadores portugueses mais proeminentes e criativos do século XIII. Ativo na corte de Afonso III de Portugal e de Afonso X de Castela, destacou-se pela enorme versatilidade ao transitar com genialidade entre as cantigas de amor, de amigo, de escárnio e de maldizer.",
        obras: [
            "Ai dona fea, fostes-vos queixar",
            "Amigos, non posso eu negar",
            "Un cavaleiro com boa vertude",
            "Que mui gran prazer tenho eu i de ver",
            "Quantos han gran coita d'amor",
            "Soberana e mui nobre senhor"
        ],
        temas: "Paródia do amor cortês, ironia social, sátira direta e bem-humorada, a coita de amor levada ao exagero cômico, a beleza (ou falta dela) e a vida nas cortes medievais.",
        caracteristicas: "Notável uso da ironia, sarcasmo e humor refinado. Inovou ao ridicularizar os clichês do amor cortês e ao introduzir elementos visuais e caricaturais marcantes.",
        influencias: "Atuou como figura de transição e renovação na lírica galego-portuguesa, influenciando gerações subsequentes de trovadores e jograis com seu tom crítico.",
        citacao: "Ai, dona fea, fostes-vos queixar / que vos nunca louvo em meu cantar; / mais ora quero fazer um cantar / em que vos louvarei toda via..."
    },
    {
        slug: "dom-dinis",
        nome: "Dom Dinis",
        escolaSlug: "trovadorismo",
        link: "Trovadorismo/Autores/dom-dinis.html",
        periodo: "1261 – 1325",
        local: "Lisboa, Portugal",
        bio: "Dom Dinis I, conhecido como o 'Rei Poeta' ou 'Rei Lavrador', foi rei de Portugal e um dos maiores nomes do Trovadorismo ibérico. Mecenas fundamental da cultura medieval, oficializou a língua portuguesa nos documentos do reino e deixou uma vasta obra poética de mais de 130 cantigas.",
        obras: [
            "Quer'eu em maneira de prowençal",
            "A doirada pastorinha",
            "Provençaliç'at'ora meu cantar",
            "O que vos nunca cuidai a dizer",
            "A deas do meu coraçon",
            "Amigo, quen hoji de vós se partir"
        ],
        temas: "Coita d'amor (sofrimento amoroso), vassalagem poética, saudade do amado, a figura da pastora nas pastorelas e a natureza como refúgio e cenário sentimental.",
        caracteristicas: "Apurada técnica formal, adaptação das convenções líricas provençais à língua galego-portuguesa, delicadeza no tratamento das cantigas e pioneirismo no desenvolvimento das pastorelas.",
        influencias: "Influenciado pela tradição dos trovadores provençais do sul da França, D. Dinis promoveu o apogeu da corte literária portuguesa e influenciou poetas em toda a Península Ibérica.",
        citacao: "Quer'eu em maneira de prowençal / fazer agora um cantar d'amor, / e quer'i loar minha senhor / a que prez e fermosura non fal..."
    },
    {
        slug: "bernardim-ribeiro",
        nome: "Bernardim Ribeiro",
        escolaSlug: "classicismo",
        link: "Classicismo/Autores/bernardim-ribeiro.html",
        periodo: "c. 1482 – 1552",
        local: "Torrão, Portugal",
        bio: "Bernardim Ribeiro foi um poeta e novelista português, figura de transição entre a poesia palaciana do Humanismo e o Classicismo. Ficou imortalizado por introduzir a novela pastoril na Península Ibérica e por sua atmosfera de profundo sentimentalismo, melancolia e mistério.",
        obras: [
            "Menina e Moça (1554)",
            "Trovas de Dois Pastores",
            "Écloga de Jano e Franco",
            "Écloga de Aontio",
            "Romance de Aonio"
        ],
        temas: "A saudade, a dor do amor não correspondido, a fatalidade do destino, o sofrimento existencial e o cenário bucólico/pastoril como espelho dos sentimentos humanos.",
        caracteristicas: "Linguagem poética marcada pela melancolia (a típica 'saudade' portuguesa), introspecção psicológica, tom confessional e narrativa enigmática com forte apelo emotivo.",
        influencias: "Inspirou-se na literatura bucólica e na tradição lírica do Cancioneiro Geral. Sua obra-prima, Menina e Moça, inaugurou a narrativa sentimental pastoril em Portugal.",
        citacao: "Menina e moça me levaram da casa de minha mãe para muito longe... Que culpa tive eu logo então de me achar ali onde a dor estava aparelhada para mim?"
    },
    {
        slug: "luis-de-camoes",
        nome: "Luís de Camões",
        escolaSlug: "classicismo",
        link: "Classicismo/Autores/camoes.html",
        periodo: "c. 1524 – 1580",
        local: "Lisboa, Portugal",
        bio: "Luís Vaz de Camões é considerado o maior poeta da língua portuguesa e um dos maiores nomes da literatura universal. Sua genialidade transita entre a épica monumental das Grandes Navegações e uma poesia lírica de intensa profundidade neoplatônica.",
        obras: [
            "Os Lusíadas (1572)",
            "Rimas (1595)",
            "Anfitriões (1587)",
            "El-Rei Seleuco (1645)",
            "Filodemo (1587)"
        ],
        temas: "O amor platônico e contraditório, o desconcerto do mundo, a pequenez humana diante do destino, as grandes navegações e o efêmero da vida.",
        caracteristicas: "Rigor formal e métrico no estilo clássico (sonetos, decassílabos e oitava rima), lirismo amoroso neoplatônico, dualidade entre razão e sentimento, e estrutura épica homérica.",
        influencias: "Influenciado pelos modelos da Antiguidade Clássica (Homero, Virgílio, Ovídio) e pelos humanistas do Renascimento italiano (Petrarca), fundando a tradição literária moderna em português.",
        citacao: "Amor é um fogo que arde sem se ver; / É ferida que dói, e não se sente; / É um contentamento descontentado; / É dor que desatina sem doer."
    },
    {
        slug: "sa-de-miranda",
        nome: "Sá de Miranda",
        escolaSlug: "classicismo",
        link: "Classicismo/Autores/sa-miranda.html",
        periodo: "1481 – 1558",
        local: "Coimbra / Amares, Portugal",
        bio: "Francisco de Sá de Miranda foi o grande renovador da poesia portuguesa no século XVI. Após uma longa viagem à Itália, importou para Portugal as formas poéticas do Renascimento — como o soneto, a canção e o verso decassílabo — e escreveu as primeiras comédias de estilo clássico.",
        obras: [
            "Ecloga dos dous pastores",
            "Comédia dos Estrangeiros (1527)",
            "Comédia Vilhalpandos (1538)",
            "Carta a D. João III",
            "Sonetos e Éclogas"
        ],
        temas: "A crítica moral aos costumes da corte, o elogio à vida bucólica e simples do campo (beatus ille), o desencanto com a corrupção do império e a reflexão sobre a brevidade da vida.",
        caracteristicas: "Introdução da 'medida nova' (versos decassílabos em oposição à 'medida velha' redondilha), uso do soneto, estilo sóbrio, austero, tom moralizante e forte presença do pensamento filosófico.",
        influencias: "Inspirou-se nos poetas italianos do Renascimento (Petrarca, Sannazaro) e clássicos latinos (Horácio, Virgílio). Ao regressar a Portugal em 1527, abriu caminho para Camões.",
        citacao: "O sol é grande, caem cos quebrantos / as aves, com o calor das sestas graves / voam a furto, e com cantos suaves / em estâmago doentio metem espantos."
    },
    {
        slug: "antonio-ferreira",
        nome: "Antônio Ferreira",
        escolaSlug: "classicismo",
        link: "Classicismo/Autores/antonio-ferreira.html",
        periodo: "1528 – 1569",
        local: "Lisboa, Portugal",
        bio: "Antônio Ferreira foi poeta, dramaturgo e magistrado, um dos maiores defensores da língua portuguesa em oposição ao castelhano, então predominante entre os poetas da corte. É autor da primeira tragédia clássica escrita em português, 'Castro', inspirada na trágica história de Inês de Castro.",
        obras: [
            "Castro (tragédia, c. 1587)",
            "Cartas (epístolas)",
            "Sonetos",
            "Éclogas",
            "Odes"
        ],
        temas: "O amor trágico e o poder do destino, a defesa apaixonada da língua e da cultura portuguesas, a reflexão moral sobre a razão de Estado e o conflito entre o dever público e o sentimento privado.",
        caracteristicas: "Rigor clássico na construção dramática, com estrutura em atos e coros ao modo greco-romano; linguagem elevada e culta; forte influência retórica; uso do verso decassílabo e do soneto na lírica.",
        influencias: "Bebeu diretamente da tragédia clássica grega (Sófocles, Eurípides) e latina (Sêneca), além do humanismo renascentista de Sá de Miranda, de quem foi discípulo direto em Coimbra.",
        citacao: "Não posso deixar de amar minha língua, e de a estimar e prezar mais que a todas."
    },
    {
        slug: "diogo-bernardes",
        nome: "Diogo Bernardes",
        escolaSlug: "classicismo",
        link: "Classicismo/Autores/diogo-bernardes.html",
        periodo: "c. 1530 – c. 1605",
        local: "Ponte da Barca, Portugal",
        bio: "Diogo Bernardes foi um dos principais poetas bucólicos do Classicismo português. Discípulo de Sá de Miranda, dedicou-se sobretudo à poesia pastoril e amorosa, sendo lembrado por sua obra 'O Lima', em que celebra a paisagem do rio que dá nome ao livro.",
        obras: [
            "O Lima (1596)",
            "Várias Rimas ao Bom Jesus de Monte (1594)",
            "Rimas Várias — Flores do Lima (1597)",
            "Éclogas"
        ],
        temas: "A vida pastoril e a paisagem natural do Minho, o amor idealizado, a saudade e a nostalgia do tempo perdido, além de uma religiosidade serena presente em sua fase mais tardia.",
        caracteristicas: "Linguagem simples e musical, forte apego à écloga e ao gênero bucólico, versos decassílabos e redondilhas, tom melancólico e contemplativo diante da natureza.",
        influencias: "Formado sob a influência direta de Sá de Miranda e da poesia pastoril italiana, seguiu o modelo clássico de Virgílio nas éclogas, adaptando-o à paisagem e à sensibilidade portuguesas.",
        citacao: "Correndo vou por ti, ó claro Lima, / a ver se acharei nesses teus vales / algum remédio à dor que me lastima."
    },
    {
        slug: "pero-caminha",
        nome: "Pero de Andrade Caminha",
        escolaSlug: "classicismo",
        link: "Classicismo/Autores/pero-caminha.html",
        periodo: "1520 – 1589",
        local: "Ponte de Lima / Lisboa, Portugal",
        bio: "Pero de Andrade Caminha foi poeta da corte de D. João III e D. Sebastião, reconhecido por sua produção lírica em molde clássico e por sua atuação como conselheiro literário, revisando e comentando os versos de outros poetas do seu tempo.",
        obras: [
            "Poemas (edição póstuma, 1791)",
            "Sonetos",
            "Éclogas",
            "Cartas e Epístolas"
        ],
        temas: "O amor cortês e platônico, a reflexão moral e filosófica, o elogio a figuras da nobreza e da corte, e a preocupação constante com o rigor da forma poética.",
        caracteristicas: "Estilo comedido e polido, fidelidade às formas clássicas (soneto, écloga, epístola), preocupação com a métrica e a correção da língua, tom reflexivo e por vezes didático.",
        influencias: "Seguiu de perto o modelo de Sá de Miranda e de Camões, e manteve estreito contato com os principais poetas clássicos portugueses, atuando como uma espécie de guardião do rigor formal da 'medida nova'.",
        citacao: "Não é o verso que faz o poeta, mas o poeta que faz o verso digno de ser lido."
    },
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

// Obras de arte exibidas na Galeria do Classicismo (galeria/galeria_classicismo.html)
const obrasGaleriaSeed = [
    {
        nome: "O Nascimento de Vênus",
        autor: "Sandro Botticelli",
        ano: "c. 1485",
        escolaSlug: "classicismo",
        link: "galeria/galeria_classicismo.html",
        descricao: "Reflete o Paganismo Mitológico e a valorização da beleza idealizada. A obra recupera os mitos greco-romanos, elemento central da poesia classicista de Camões."
    },
    {
        nome: "A Escola de Atenas",
        autor: "Rafael Sanzio",
        ano: "1511",
        escolaSlug: "classicismo",
        link: "galeria/galeria_classicismo.html",
        descricao: "Símbolo supremo do Racionalismo e do Antropocentrismo. Reúne grandes filósofos da Antiguidade, espelhando a busca pela sabedoria e simetria do período."
    },
    {
        nome: "A Primavera",
        autor: "Sandro Botticelli",
        ano: "c. 1482",
        escolaSlug: "classicismo",
        link: "galeria/galeria_classicismo.html",
        descricao: "Representa o Neoplatonismo e a contemplação da natureza harmoniosa (Locus Amoenus), tema constante nos sonetos e bucolismo da literatura renascentista."
    },
    {
        nome: "Mona Lisa",
        autor: "Leonardo da Vinci",
        ano: "1503",
        escolaSlug: "classicismo",
        link: "galeria/galeria_classicismo.html",
        descricao: "Exemplo do Humanismo e da proporção técnica. Expressa a busca do Classicismo pelo equilíbrio geométrico, estudo do ser humano e contenção das emoções."
    },
    {
        nome: "Pietà",
        autor: "Michelangelo",
        ano: "1499",
        escolaSlug: "classicismo",
        link: "galeria/galeria_classicismo.html",
        descricao: "Símbolo do Idealismo Clássico e do rigor anatômico. Demonstra a harmonia triangular e a serenidade diante da dor, refletindo a busca do período pela contenção emocional e perfeição estética."
    },
    {
        nome: "A Última Ceia",
        autor: "Leonardo da Vinci",
        ano: "1498",
        escolaSlug: "classicismo",
        link: "galeria/galeria_classicismo.html",
        descricao: "Exemplo perfeito da Perspectiva Linear e da geometria sagrada. Expressa a contenção das emoções humanas e a simetria clássica no exato instante de reação dramática do grupo."
    },
    {
        nome: "Davi",
        autor: "Michelangelo",
        ano: "1504",
        escolaSlug: "classicismo",
        link: "galeria/galeria_classicismo.html",
        descricao: "Apogeu do Antropocentrismo e do dinamismo contido (contrapposto). Celebra a coragem e a força da razão humana, espelhando o herói heroico dos poemas épicos renascentistas."
    }
];