

player.loader()
player.musica.addEventListener("timeupdate", () =>{window.player.atualizarTempo()} )
player.botaoPlayPause.addEventListener("click", () =>{window.player.playPause()})
player.botaoPular.addEventListener("click", () =>{window.player.pular()})
player.botaoVoltar.addEventListener("click", () =>{window.player.voltar()})
player.barraDeTempo.addEventListener("change", () => {window.player.moverTempo()})
player.musica.addEventListener("ended", () =>{window.player.pular()} )
player.botaoVol.addEventListener("click", () => {window.player.mostrarVol()})
player.volBarr.addEventListener("change", () => {window.player.alterarVol()})