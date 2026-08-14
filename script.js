document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('busca');
    const grid = document.querySelector('#escolas .grid');
    if (!input || !grid) return;

    const escolas = escolasSeed;
    const autores = autoresSeed;

    const semResultados = document.createElement('p');
    semResultados.textContent = 'Nenhuma escola, autor ou obra encontrado.';
    semResultados.style.display = 'none';
    semResultados.style.padding = '20px 0';
    grid.after(semResultados);

    function normalizar(texto) {
        return (texto || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .trim();
    }

    
    grid.innerHTML = escolas.map(function (escola) {
        return (
            '<article class="escola-card">' +
                '<a href="' + escola.link + '" class="card-link">' +
                    '<div class="thumb"></div>' +
                    '<div class="content">' +
                        '<h3>' + escola.nome + '</h3>' +
                        '<span>' + escola.periodo + '</span>' +
                        '<p>' + escola.descricao + '</p>' +
                    '</div>' +
                '</a>' +
            '</article>'
        );
    }).join('');

    const cardsEscola = Array.from(grid.querySelectorAll('.escola-card'));

    const indice = [];

    escolas.forEach(function (escola) {
        indice.push({
            linkCard: escola.link,
            linkDestino: escola.link,
            texto: normalizar([escola.nome, escola.periodo, escola.descricao].join(' '))
        });
    });

    autores.forEach(function (autor) {
        const escola = escolas.find(e => e.slug === autor.escolaSlug);
        indice.push({
            linkCard: escola ? escola.link : null,
            linkDestino: autor.link || (escola ? escola.link : null),
            texto: normalizar([autor.nome, autor.periodo, (autor.obras || []).join(' '), autor.temas].join(' '))
        });
    });


    function corresponde(texto, termo) {
        const palavras = termo.split(/\s+/).filter(Boolean);
        return palavras.every(function (palavra) { return texto.includes(palavra); });
    }

    function filtrar() {
        const termo = normalizar(input.value);

        if (termo === '') {
            cardsEscola.forEach(function (card) { card.style.display = ''; });
            semResultados.style.display = 'none';
            return;
        }

        const encontrados = indice.filter(item => corresponde(item.texto, termo));
        const linksCardEncontrados = new Set(encontrados.map(item => item.linkCard));

        let algumVisivel = false;
        cardsEscola.forEach(function (card, i) {
            const visivel = linksCardEncontrados.has(escolas[i].link);
            card.style.display = visivel ? '' : 'none';
            if (visivel) algumVisivel = true;
        });

        semResultados.style.display = algumVisivel ? 'none' : 'block';
    }

    input.addEventListener('input', filtrar);

    input.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter') return;

        const termo = normalizar(input.value);
        if (termo === '') return;

        const encontrados = indice.filter(item => corresponde(item.texto, termo));

        
        if (encontrados.length === 1) {
            window.location.href = encontrados[0].linkDestino;
            return;
        }

        const visiveis = cardsEscola.filter(c => c.style.display !== 'none');
        if (visiveis.length === 1) {
            const link = visiveis[0].querySelector('a.card-link');
            if (link) window.location.href = link.getAttribute('href');
        }
    });
});