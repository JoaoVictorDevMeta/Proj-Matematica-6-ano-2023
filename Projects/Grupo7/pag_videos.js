function criar_video(videos, descricao) {
  const container = document.createElement('div');
  container.classList.add('container');

  const video = document.createElement('video');
  video.classList.add('video');
  video.setAttribute('controls', '');

  const source = document.createElement('source');
  source.setAttribute('src', videos);
  source.setAttribute('type', 'video/mp4');

  video.appendChild(source);
  container.appendChild(video);

  const p = document.createElement('p');
  p.innerHTML = descricao;
  p.classList.add('descricao');

  container.appendChild(p);

  document.body.appendChild(container);
}

function colocar_video() {
  const videos = ["./assets/videos/WhatsApp Video 2023-12-09 at 13.38.02.mp4", "./assets/videos/WhatsApp Video 2023-12-09 at 13.38.02 (1).mp4", "./assets/videos/WhatsApp Video 2023-12-09 at 13.38.02 (2).mp4", "./assets/videos/WhatsApp Video 2023-12-09 at 13.38.03.mp4"];

  const descricao = ["Múltiplos de um número", "O que são divisores?", "Frações ou números fracionários", "Tipos de fração"];

  for (let i = 0; i < videos.length; i++) {
      criar_video(videos[i], descricao[i]);

      if (i !== videos.length - 1) {
          const linha = document.createElement('hr');
          linha.classList.add('linha');
          document.body.appendChild(linha);
      }
  }
}
colocar_video();