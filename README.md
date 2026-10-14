# Ultra Black VOLL 2026

Página única da campanha Ultra Black VOLL (13/10 a 30/11/2026), em HTML, CSS e JS puros, feita a partir do wireframe "Página Ultra Black VOLL — Wireframe".

## Estrutura

- `index.html`: todo o conteúdo, incluindo os blocos de todas as fases.
- `assets/css/styles.css`: mobile first, com variáveis de cor e fonte no `:root`.
- `assets/js/main.js`: fases da campanha, contador e player da live. As datas ficam no objeto `CONFIG`, no topo.
- `assets/images/`: logo, fotos, fundos e selos, todos otimizados (WebP qualidade 75, selos com transparência).

Todos os caminhos são relativos, então a página funciona em qualquer subpasta sem alteração.

## Tags

GTM (GTM-MH7D35D), GA4 (G-9S2K7N5XCL) e os dois Meta Pixels do domínio vollpilates.com.br estão no `<head>`, conforme o documento "[VOLL] TAGs vollpilates.com.br".

## Cores

- Botões: `#00c3ba`, em caixa alta.
- Faixa da live: fixa no topo, fundo `#ff4b4b` e texto preto.
- Dourado (`--dourado`): títulos, para ligar todos os produtos à Ultra Black.
- Cada produto tem a sua cor de destaque (`.prod-*` no CSS).

## Fases

A página troca sozinha, pelo horário de Brasília:

| Fase | Período | O que muda |
|---|---|---|
| `antecipa` | até 02/11 | Topo com contador; VOLL+ como teaser, sem preço |
| `maratona` | 03/11 a 10/11 | Oferta do VOLL+ no ar, com os bônus da Maratona |
| `live` | 11/11 | Topo vira o player do YouTube; às 20h a barra passa a "AO VIVO AGORA" |
| `pos` | 12/11 em diante | Player vira a gravação; seção de sorteios e bônus da Maratona somem |

Um bloco aparece só nas fases listadas em `data-fases="..."`. Sem esse atributo, aparece sempre.

Para testar:

- `?fase=antecipa`, `?fase=maratona`, `?fase=live` ou `?fase=pos` força uma fase.
- `?agora=2026-11-11T19:00` simula uma data e hora.

## Pendências

Cada item está marcado no código com o comentário indicado.

- `URL-PENDENTE`: endereço final da página, para `canonical`, `og:url` e `og:image` (bloco comentado no `<head>`). Depois de publicar, incluir a URL no sitemap do site hospedeiro.
- `LINK-PENDENTE`: botão do VOLL+, que ainda aponta para `https://vollpilates.com.br/`. Os outros CTAs já têm as URLs finais e abrem em nova aba. O regulamento (`espacovidapilates.com.br/regulamento`) ainda não está no ar.
- `LIVE-PENDENTE`: link da live de 11/11 agendada no YouTube da VOLL. O link que constava no plano apontava para um vídeo de terceiros e foi removido. Quando existir:
  - preencher `videoId` em `assets/js/main.js` (sem ele, o player mostra só um aviso);
  - recolocar o botão "Ativar lembrete da live" no topo e o link do YouTube no rodapé;
  - atualizar a `url` do evento no JSON-LD do `<head>`.
- Capa de compartilhamento: `capa_seo_ultra_black_voll_2026.webp`, 1200x630.
- `TEXTO-PENDENTE`: condição de parcelamento da Formação Online e prêmio do sorteio de domingo do VOLL+.
- Cores dos produtos: Formação Online, VOLL+ e Franquias usam cores provisórias tiradas dos sites de cada produto (bloco "Cores por produto" no CSS). Trocar pelas cores dos logos oficiais quando eles chegarem. A Presencial já usa a cor do logo oficial.
- Fase `pos`: o wireframe não define a página depois da live. O comportamento atual é uma proposta e precisa de aprovação. A seção da Formação Presencial continua visível com "até 11/11".

## Imagens que ainda não estão em WebP

Nenhuma imagem em uso.

## Rodar localmente

```bash
npx serve .
```
