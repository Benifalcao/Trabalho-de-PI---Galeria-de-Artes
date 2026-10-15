const escolasSeed = [
    { slug: "trovadorismo", nome: "Trovadorismo", periodo: "1189 – 1418", descricao: "Poesia trovadoresca ibérica.", link: "Trovadorismo/trovadorismo.html", imagem:"img/trovadorismo.jpeg" },
    { slug: "classicismo", nome: "Classicismo", periodo: "1527 – 1580", descricao: "Equilíbrio e racionalidade.", link: "Classicismo/classicismo.html",imagem:"img/Classicimo.jpeg"},
    { slug: "barroco", nome: "Barroco", periodo: "1601 – 1768", descricao: "Conflito entre fé e razão.", link: "barroco.html",imagem:"img/Barroco.jpeg" },
    { slug: "arcadismo", nome: "Arcadismo", periodo: "1768 – 1836", descricao: "Retorno à simplicidade.", link: "Arcadismo/arcadismo.html",imagem:"img/Arcadismo.png" },
    { slug: "romantismo", nome: "Romantismo", periodo: "1836 – 1881", descricao: "Subjetividade e idealização.", link: "Romantismo/romantismo.html", imagem:"img/Romantismo.png" },
    { slug: "realismo", nome: "Realismo", periodo: "1881 – 1893", descricao: "Observação crítica da realidade.", link: "realismo.html",imagem:"img/Realismo.png" },
    { slug: "parnasianismo", nome: "Parnasianismo", periodo: "1882 – 1922", descricao: "Culto à forma.", link: "parnasianismo.html",imagem:"img/Parnasianismo.png" },
    { slug: "modernismo", nome: "Modernismo", periodo: "1922 – 1960", descricao: "Ruptura estética.", link: "modernismo.html",imagem:"img/Modernismo.png" }
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
    },
    {
        slug: "claudio-manuel-da-costa",
        nome: "Cláudio Manuel da Costa",
        escolaSlug: "arcadismo",
        link: "Arcadismo/Autores/claudio-manuel-da-costa.html",
        periodo: "1729 – 1789",
        local: "Mariana (Vila do Ribeirão do Carmo), Minas Gerais",
        bio: "Cláudio Manuel da Costa foi poeta, advogado e uma das figuras centrais do Arcadismo brasileiro. Formado em Direito em Coimbra, voltou a Minas Gerais e tornou-se um dos homens mais cultos de Vila Rica, onde exerceu a advocacia e cargos públicos. Com o nome pastoril de Glauceste Satúrnio, publicou em 1768 as Obras Poéticas, considerada o marco inicial do Arcadismo no Brasil. Envolvido na Inconfidência Mineira, foi preso em 1789 e morreu na prisão, em circunstâncias que ainda são discutidas.",
        obras: [
            "Obras Poéticas (1768)",
            "Vila Rica (poema épico, escrito em 1773)",
            "Munúsculo Métrico (1751)",
            "Labirinto de Amor (1753)"
        ],
        temas: "A natureza áspera e montanhosa de Minas Gerais em contraste com a paisagem idealizada dos pastores, o amor por Nise, a passagem do tempo, a saudade da vida simples e o conflito entre a rudeza do ambiente colonial e o ideal árcade.",
        caracteristicas: "Sonetos de grande rigor formal, em decassílabos, herdeiros de Camões e de Petrarca; linguagem culta; mistura de convenções árcades (pastores, ninfas, mitologia) com marcas barrocas, como a oposição entre dor e prazer, o que o torna uma figura de transição.",
        influencias: "Influenciado por Camões, por Petrarca, pelos poetas da Arcádia italiana e pelo Classicismo português. Sua obra introduziu no Brasil o ideal árcade e inspirou outros poetas mineiros, como Gonzaga e Alvarenga Peixoto.",
        citacao: "Destes penhascos fez a natureza / O berço, em que nasci! oh quem cuidara / Que entre penhas tão duras se criara / Uma alma terna, um peito sem dureza!"
    },
    {
        slug: "tomas-antonio-gonzaga",
        nome: "Tomás Antônio Gonzaga",
        escolaSlug: "arcadismo",
        link: "Arcadismo/Autores/tomas-antonio-gonzaga.html",
        periodo: "1744 – c. 1810",
        local: "Porto, Portugal",
        bio: "Tomás Antônio Gonzaga nasceu no Porto, mas viveu grande parte da vida no Brasil. Formado em Direito em Coimbra, foi nomeado ouvidor em Vila Rica, onde conheceu Maria Dorotéia Joaquina de Seixas, a Marília de seus versos. Com o nome pastoril de Dirceu, escreveu Marília de Dirceu, uma das obras mais conhecidas do Arcadismo brasileiro. Acusado de participar da Inconfidência Mineira, foi preso em 1789 e depois exilado em Moçambique, onde morreu por volta de 1810.",
        obras: [
            "Marília de Dirceu (1792)",
            "Cartas Chilenas (sátira atribuída ao autor)",
            "Tratado de Direito Natural (1768)"
        ],
        temas: "O amor idealizado por Marília, o desejo de uma vida simples ao lado da amada, a passagem do tempo, o carpe diem e, nas Cartas Chilenas, a crítica ao abuso de poder e à corrupção do governo colonial.",
        caracteristicas: "Liras de versos curtos, linguagem simples e musical; o pastor Dirceu declara seu amor a Marília e imagina uma vida tranquila. Na segunda parte de Marília de Dirceu, escrita na prisão, o tom torna-se mais melancólico e pessoal. As Cartas Chilenas são uma sátira em versos brancos, de tom irônico.",
        influencias: "Influenciado por Horácio e Virgílio, pela lírica de Camões e pelos poetas árcades portugueses e italianos. Sua obra fixou na literatura brasileira a imagem do poeta-pastor apaixonado.",
        citacao: "Eu, Marília, não sou algum vaqueiro, / Que viva de guardar alheio gado; / De tosco trato, d'expressões grosseiro, / Dos frios gelos, e dos sóis queimado."
    },
    {
        slug: "basilio-da-gama",
        nome: "Basílio da Gama",
        escolaSlug: "arcadismo",
        link: "Arcadismo/Autores/basilio-da-gama.html",
        periodo: "1741 – 1795",
        local: "São José do Rio das Mortes (hoje Tiradentes), Minas Gerais",
        bio: "José Basílio da Gama foi poeta e funcionário da corte portuguesa. Educado pelos jesuítas, aproximou-se em Lisboa do Marquês de Pombal, de quem recebeu proteção. Em Roma, integrou a Arcádia Romana com o nome de Termindo Sipílio. Sua obra mais importante, O Uraguai (1769), é um poema épico sobre a Guerra Guaranítica.",
        obras: [
            "O Uraguai (1769)",
            "Quitúbia (1791)"
        ],
        temas: "A Guerra Guaranítica, o encontro entre colonizadores e indígenas, a crítica aos jesuítas, a defesa da política do Marquês de Pombal e a natureza do Novo Mundo.",
        caracteristicas: "Poema épico em cinco cantos e em versos brancos (decassílabos sem rima), de linguagem concisa, que rompe com o modelo camoniano da oitava rima. Os indígenas são retratados com grande lirismo, como Lindoia e Cacambo, e o tom favorece a política pombalina.",
        influencias: "Influenciado pela tradição épica de Virgílio e de Camões e pelo ambiente iluminista do reinado de D. José I. A forma como representa os indígenas anuncia temas que seriam desenvolvidos pelo Romantismo indianista."
    },
    {
        slug: "santa-rita-durao",
        nome: "Santa Rita Durão",
        escolaSlug: "arcadismo",
        link: "Arcadismo/Autores/santa-rita-durao.html",
        periodo: "c. 1722 – 1784",
        local: "Cata Preta (perto de Mariana), Minas Gerais",
        bio: "Frei José de Santa Rita Durão foi religioso agostiniano, teólogo e poeta. Estudou em Coimbra, enfrentou perseguições durante o governo de Pombal e viveu em outros países da Europa. É o autor de Caramuru (1781), poema épico sobre o descobrimento da Bahia.",
        obras: [
            "Caramuru (1781)"
        ],
        temas: "A colonização da Bahia, a figura do náufrago português Diogo Álvares Correia (o Caramuru), sua união com a indígena Paraguaçu, a conversão dos indígenas ao cristianismo e a exaltação da terra brasileira.",
        caracteristicas: "Epopeia em dez cantos e em oitava rima, de estrutura camoniana, que narra fatos históricos com visão providencialista. Traz descrições da fauna, da flora e dos costumes indígenas, em tom de exaltação religiosa e colonial.",
        influencias: "Seguiu de perto o modelo de Os Lusíadas, de Camões. Caramuru é um dos primeiros textos a tratar o indígena e a natureza brasileira como matéria épica."
    },
    {
        slug: "alvarenga-peixoto",
        nome: "Alvarenga Peixoto",
        escolaSlug: "arcadismo",
        link: "Arcadismo/Autores/alvarenga-peixoto.html",
        periodo: "1742 – 1792",
        local: "Rio de Janeiro, Rio de Janeiro",
        bio: "Inácio José de Alvarenga Peixoto foi poeta e magistrado. Formado em Direito em Coimbra, atuou em Minas Gerais como magistrado e proprietário de minas, e casou-se com a poetisa Bárbara Heliodora. Com o nome pastoril de Eureste Fenício, escreveu sonetos, odes e o Canto Genetlíaco. Participou da Inconfidência Mineira, foi condenado ao degredo e morreu em Angola, em 1792.",
        obras: [
            "Canto Genetlíaco (1782)",
            "Ode a Dona Maria I",
            "Sonetos"
        ],
        temas: "O amor, a natureza, o elogio a autoridades em poemas de ocasião e a reflexão sobre a vida e o destino, que se intensifica nos versos ligados ao período da prisão e do exílio.",
        caracteristicas: "Sonetos e odes de tom elegante e solene, com mitologia e convenções árcades; linguagem clara e musical, típica do gosto neoclássico.",
        influencias: "Formou-se no ambiente literário de Coimbra e de Vila Rica, convivendo com Cláudio Manuel da Costa e Gonzaga, e seguiu os modelos da lírica clássica e italiana."
    },
    {
        slug: "silva-alvarenga",
        nome: "Silva Alvarenga",
        escolaSlug: "arcadismo",
        link: "Arcadismo/Autores/silva-alvarenga.html",
        periodo: "1749 – 1814",
        local: "Vila Rica (Ouro Preto), Minas Gerais",
        bio: "Manuel Inácio da Silva Alvarenga foi poeta, advogado e professor de Retórica e Poética no Rio de Janeiro. Participou da Sociedade Literária do Rio de Janeiro, criada em 1786 para o debate científico e filosófico, e foi preso em 1794 sob suspeita de conspiração, sendo libertado em 1797. Com o nome pastoril de Alcindo Palmireno, escreveu O Desertor e Glaura.",
        obras: [
            "O Desertor (poema herói-cômico, 1774)",
            "Glaura (poemas eróticos, 1799)",
            "Rondós e madrigais"
        ],
        temas: "O amor leve e sensual, a natureza, a crítica ao pedantismo e a defesa de um ensino mais racional e moderno.",
        caracteristicas: "Poesia lírica leve e musical, com rondós e madrigais, de influência rococó; sensualidade discreta; mistura de convenções árcades e traços iluministas.",
        influencias: "Influenciado pelo ideário iluminista e pela lírica leve do século XVIII, é visto como um dos poetas árcades de sensibilidade mais moderna."
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
    },
    {
        nome: "Et in Arcadia Ego",
        autor: "Nicolas Poussin",
        ano: "c. 1638",
        escolaSlug: "arcadismo",
        link: "galeria/galeria_arcadismo.html#obra-et-in-arcadia-ego",
        descricao: "Retrata pastores diante de um túmulo na Arcádia e traz a ideia de que a morte existe até no lugar ideal. Reflete o tema do Locus Amoenus e a visão clássica da natureza."
    },
    {
        nome: "Peregrinação à Ilha de Citera",
        autor: "Antoine Watteau",
        ano: "1717",
        escolaSlug: "arcadismo",
        link: "galeria/galeria_arcadismo.html#obra-peregrinacao-citera",
        descricao: "Obra-chave do Rococó, mostra casais em uma festa galante em meio à paisagem. Traduz o gosto pelos amores pastorais e pela idealização da natureza."
    },
    {
        nome: "O Balanço",
        autor: "Jean-Honoré Fragonard",
        ano: "c. 1767",
        escolaSlug: "arcadismo",
        link: "galeria/galeria_arcadismo.html#obra-o-balanco",
        descricao: "Símbolo da leveza e da sensualidade do Rococó. A cena amorosa em um jardim exuberante dialoga com o clima galante da poesia árcade."
    },
    {
        nome: "O Juramento dos Horácios",
        autor: "Jacques-Louis David",
        ano: "1784",
        escolaSlug: "arcadismo",
        link: "galeria/galeria_arcadismo.html#obra-juramento-dos-horacios",
        descricao: "Manifesto do Neoclassicismo, com composição rigorosa, linhas claras e tema de virtude cívica da Roma antiga, em sintonia com o racionalismo iluminista."
    },
    {
        nome: "A Morte de Marat",
        autor: "Jacques-Louis David",
        ano: "1793",
        escolaSlug: "arcadismo",
        link: "galeria/galeria_arcadismo.html#obra-morte-de-marat",
        descricao: "Retrato do líder revolucionário assassinado na banheira, une a sobriedade neoclássica ao clima político da Revolução Francesa."
    },
    {
        nome: "Psiquê Reanimada pelo Beijo de Cupido",
        autor: "Antonio Canova",
        ano: "1787 – 1793",
        escolaSlug: "arcadismo",
        link: "galeria/galeria_arcadismo.html#obra-psique-canova",
        descricao: "Escultura em mármore que representa um mito greco-romano com equilíbrio e graça, exemplo do Neoclassicismo e da retomada da mitologia clássica."
    },
    {
        nome: "Tiradentes Esquartejado",
        autor: "Pedro Américo",
        ano: "1893",
        escolaSlug: "arcadismo",
        link: "galeria/galeria_arcadismo.html#obra-tiradentes-esquartejado",
        descricao: "Pintura brasileira sobre a execução de Tiradentes, líder da Inconfidência Mineira, movimento que envolveu poetas árcades como Cláudio Manuel da Costa e Gonzaga."
    }
];
