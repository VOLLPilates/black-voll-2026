# Ultra Black VOLL 2026

Página única da campanha Ultra Black VOLL (13/10 a 30/11/2026), em HTML, CSS e JS puros. Desde 20/10/2026 segue o wireframe "Ultra Black VOLL 2026" (estrutura e visual), com a seção da live movida para logo abaixo do topo. A versão anterior está em `bkp_20-10-2026/`.

## Ordem da página

1. Barra dourada e chips de navegação (um bloco fixo no topo)
2. Topo "Já começou"
3. Live (`#live`): cronômetro, passos, thumb da live com play e botão do YouTube
4. Índice das 5 ofertas (`#ofertas`)
5. Black 1 a 5: `#presencial`, `#online`, `#classico`, `#vollplus`, `#franquias` (ids antigos mantidos para não quebrar links)
6. Prêmios (`#sorteios`)
7. Rodapé e botão fixo "Ver as 5 ofertas" (só no celular)

## Estrutura

- `index.html`: todo o conteúdo, incluindo os blocos de todas as fases.
- `assets/css/styles.css`: mobile first, com variáveis de cor e fonte no `:root`.
- `assets/js/main.js`: fases da campanha, contador e player da live. As datas ficam no objeto `CONFIG`, no topo.
- `assets/images/`: logo, fotos, fundos e selos, todos otimizados (WebP qualidade 75, selos com transparência).

Todos os caminhos são relativos, então a página funciona em qualquer subpasta sem alteração.

## Live

Vídeo: https://www.youtube.com/watch?v=LtufBHAe5Gs (`videoId` em `assets/js/main.js`). A seção da live é a segunda da página em todas as fases: thumb com play (o YouTube só carrega no clique) e um botão para o mesmo link, com texto por fase ("Ativar lembrete da live", "Assistir agora", "Ver a gravação"). O mesmo link está no rodapé e no JSON-LD.

## Tags

GTM (GTM-MH7D35D), GA4 (G-9S2K7N5XCL) e os dois Meta Pixels do domínio vollpilates.com.br estão no `<head>`, conforme o documento "[VOLL] TAGs vollpilates.com.br".

## Cores

- Do wireframe: dourado `--ouro` (#d9b66c) na barra, títulos e botões gerais; cada oferta tem a sua cor (`--c1` a `--c5` no `:root`), usada no selo Black, nos destaques e no botão da oferta.
- Logos oficiais no alto de cada oferta (`.prod-logo`). Os da Formação Online e de Franquias ficam sobre uma placa branca (`.prod-logo--placa`).
- Imagens do wireframe que não temos ficaram de fora: mosaico e capas de cursos do VOLL+, fotos dos equipamentos Equipilates e foto de Studio das Franquias.

## Fases

A página troca sozinha, pelo horário de Brasília:

| Fase | Período | O que muda |
|---|---|---|
| `antecipa` | até 02/11 | Cronômetro na seção da live; VOLL+ como teaser, sem preço |
| `maratona` | 03/11 a 10/11 | Oferta do VOLL+ no ar, com os bônus da Maratona |
| `live` | 11/11 | Barra e tags "Hoje às 20h"; às 20h passam a "Ao vivo agora" e o botão vira "Assistir agora" |
| `pos` | 12/11 em diante | Tag "Gravação da live", botão "Ver a gravação", sem cronômetro; bônus da Maratona somem |

Um bloco aparece só nas fases listadas em `data-fases="..."`. Sem esse atributo, aparece sempre.

Para testar:

- `?fase=antecipa`, `?fase=maratona`, `?fase=live` ou `?fase=pos` força uma fase.
- `?agora=2026-11-11T19:00` simula uma data e hora.

## Pendências

Cada item está marcado no código com o comentário indicado.

- `URL-PENDENTE`: endereço final da página, para `canonical`, `og:url` e `og:image` (bloco comentado no `<head>`). Depois de publicar, incluir a URL no sitemap do site hospedeiro.
- Regulamento dos sorteios: o link aponta para `espacovidapilates.com.br/regulamento`, que ainda não está no ar. Todos os CTAs já têm as URLs finais e abrem em nova aba.
- Capa de compartilhamento: `capa_seo_ultra_black_voll_2026.webp`, 1200x630.
- `TEXTO-PENDENTE`: condição de parcelamento da Formação em Pilates Online, prêmio do sorteio de domingo do VOLL+ e lista dos 9 cursos do Combo VOLL Educação Física.
- Fase `pos`: o comportamento depois da live segue o wireframe, mas ainda precisa de aprovação.
- `bkp_20-10-2026/`: backup local da versão anterior, ignorado pelo git (não vai para o GitHub nem para o servidor).

## Imagens que ainda não estão em WebP

Nenhuma imagem em uso.

## Rodar localmente

```bash
npx serve .
```
