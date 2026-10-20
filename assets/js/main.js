/* Ultra Black VOLL: fases da campanha, contador e player da live.
   Carregado no <head> sem defer para gravar a fase antes da primeira pintura. */

// Único lugar para alterar datas (horário de Brasília) e o vídeo da live.
var CONFIG = {
  maratona: "2026-11-03T00:00:00-03:00", // oferta do VOLL+ entra no ar
  live: "2026-11-11T00:00:00-03:00", // topo vira o player
  pos: "2026-11-12T00:00:00-03:00", // depois da live, até o fim da campanha
  inicioLive: "2026-11-11T20:00:00-03:00", // alvo do contador
  videoId: "LtufBHAe5Gs", // live Última Chamada no YouTube da VOLL
};

(function () {
  var FASES = ["antecipa", "maratona", "live", "pos"];
  var raiz = document.documentElement;
  var params = new URLSearchParams(location.search);

  // ?agora=2026-11-11T19:00 simula uma data; ?fase=live força uma fase.
  function agora() {
    var simulado = Date.parse(params.get("agora"));
    return isNaN(simulado) ? Date.now() : simulado;
  }

  function estado() {
    var t = agora();
    var fase = "antecipa";
    if (t >= Date.parse(CONFIG.pos)) fase = "pos";
    else if (t >= Date.parse(CONFIG.live)) fase = "live";
    else if (t >= Date.parse(CONFIG.maratona)) fase = "maratona";
    var aoVivo = fase === "live" && t >= Date.parse(CONFIG.inicioLive);

    var forcada = params.get("fase");
    if (FASES.indexOf(forcada) > -1) {
      fase = forcada;
      aoVivo = forcada === "live";
    }
    return { fase: fase, aoVivo: aoVivo, falta: Math.max(0, Date.parse(CONFIG.inicioLive) - t) };
  }

  function aplicar() {
    var e = estado();
    raiz.setAttribute("data-fase", e.fase);
    raiz.setAttribute("data-aovivo", e.aoVivo ? "sim" : "nao");
    return e;
  }

  function doisDigitos(n) {
    return String(n).padStart(2, "0");
  }

  function contador(ms) {
    var valores = {
      d: Math.floor(ms / 86400000),
      h: Math.floor((ms % 86400000) / 3600000),
      m: Math.floor((ms % 3600000) / 60000),
    };
    document.querySelectorAll("[data-cd]").forEach(function (el) {
      el.textContent = doisDigitos(valores[el.getAttribute("data-cd")]);
    });
  }

  // Thumb com play em todo [data-player] (topo antes da live e topo da live); o YouTube só carrega no clique.
  function player() {
    if (CONFIG.videoId) document.querySelectorAll("[data-player]:not([data-pronto])").forEach(montar);
  }

  function montar(alvo) {
    alvo.innerHTML =
      '<img src="assets/images/thumb_live_ultra_black_voll.webp" width="1280" height="720" alt="" />' +
      '<button class="play" type="button" aria-label="Assistir à live Última Chamada">' +
      '<svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></button>';
    alvo.querySelector(".play").addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + CONFIG.videoId + "?autoplay=1";
      iframe.title = "Live Última Chamada Ultra Black VOLL";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      alvo.textContent = "";
      alvo.appendChild(iframe);
    });
    alvo.setAttribute("data-pronto", "1");
  }

  function atualizar() {
    var e = aplicar();
    contador(e.falta);
    player();
  }

  // Chip da barra de navegação acende conforme a seção visível.
  function chipsAtivos() {
    if (!("IntersectionObserver" in window)) return;
    var chips = document.querySelectorAll(".chip");
    var obs = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (en) {
          if (!en.isIntersecting) return;
          chips.forEach(function (c) {
            c.classList.toggle("ativo", c.getAttribute("href") === "#" + en.target.id);
          });
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    document.querySelectorAll(".oferta, #sorteios").forEach(function (s) {
      obs.observe(s);
    });
  }

  aplicar();
  document.addEventListener("DOMContentLoaded", function () {
    atualizar();
    chipsAtivos();
    setInterval(atualizar, 30000);
  });
})();
