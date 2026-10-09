# Ultra Black VOLL 2026

Página única da campanha Ultra Black VOLL (13/10 a 30/11/2026), em HTML, CSS e JS puros, feita a partir do wireframe "Página Ultra Black VOLL — Wireframe".

## Estrutura

- `index.html`: todo o conteúdo, incluindo os blocos de todas as fases.
- `assets/css/styles.css`: mobile first, com variáveis de cor e fonte no `:root`.
- `assets/js/main.js`: fases da campanha, contador e player da live. As datas ficam no objeto `CONFIG`, no topo.
- `assets/images/`: fotos e capa de compartilhamento (ainda vazia).

Todos os caminhos são relativos, então a página funciona em qualquer subpasta sem alteração.

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
- `LINK-PENDENTE`: os links abaixo apontam provisoriamente para `https://vollpilates.com.br/` e precisam das URLs finais com UTM:
  - Formação Presencial
  - Formação Online
  - Maratona do Pilates (inscrição)
  - VOLL+
  - Franquia VOLL
  - Regulamento dos sorteios (na seção de sorteios e no rodapé)
- `FOTO-PENDENTE`: duas fotos, hoje com espaço reservado:
  - `formacao_presencial_ultra_black_voll.webp`, proporção 5:4
  - `formacao_online_ultra_black_voll.webp`, proporção 16:10
- Capa de compartilhamento: `capa_seo_ultra_black_voll_2026.webp`, 1200x630.
- `TEXTO-PENDENTE`: condição de parcelamento da Formação Online e prêmio do sorteio de domingo do VOLL+.
- `GTM-PENDENTE`: snippet do Google Tag Manager, se a página for usar.
- Fase `pos`: o wireframe não define a página depois da live. O comportamento atual é uma proposta e precisa de aprovação. A seção da Formação Presencial continua visível com "até 11/11".

## Imagens que ainda não estão em WebP

Nenhuma imagem em uso.

## Rodar localmente

```bash
npx serve .
```
