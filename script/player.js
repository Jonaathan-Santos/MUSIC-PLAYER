window.player = {

    barraDeTempo: document.getElementById("temp-barr"),
    botaoPlayPause: document.getElementById("play-pause"),
    botaoPular: document.getElementById("pular"),
    botaoVoltar: document.getElementById("voltar"),
    tempoReal : document.querySelector("#tempo-real"),
    tempoDuracao : document.querySelector("#tempo-duracao"),
    imgPlayPause : document.querySelector(".play-pause"),
    divVol : document.querySelector("#div-vol"),
    volBarr : document.querySelector("#vol-barr"),
    botaoVol : document.querySelector("#volume"),
    localCapa : document.querySelector("#local-capa"),
    imgCapa : document.querySelector(".img-capa"),

    musica : document.querySelector("audio"),

    data : playlist,
    indicePlaylist : 0,

    

    loader () {

        this.musica.src = this.data[this.indicePlaylist]["arquivo"]
        this.imgCapa.src = this.data[this.indicePlaylist]["capa"]
        this.musica.onloadeddata = () =>{
            this.duracao = this.musica.duration 
            this.barraDeTempo.max = `${this.duracao}`
            this.tempoDuracao.textContent = "0" +`0${Math.floor(this.duracao / 60)}:`.slice(-2) + `0${Math.floor(this.duracao % 60)}`.slice(-2)
            
        }
        
        

        
    },

    start () {
        this.musica.play()
        console.log(this.musica.currentTime)
        this.imgPlayPause.src = 'icones/pause.png'
        
    },
 
    pular () {
        this.indicePlaylist ++
        if ( this.indicePlaylist == this.data.length  ){
            this.indicePlaylist = 0
        }
        this.loader()
        this.localCapa.className = "pular"
        setTimeout(() => {
            this.localCapa.className = " "
            
        },500 );
        this.start()

        
    },

    voltar () {
        this.indicePlaylist --
        if (this.indicePlaylist < 0){
            this.indicePlaylist = this.data.length - 1
        }
        this.loader()
        this.start()
    },

    pausar () {
        this.musica.pause()
        this.imgPlayPause.src = 'icones/play.png'
    },

    atualizarTempo () {
        let min =  `0${Math.floor(this.musica.currentTime / 60)}:`
        let seg = `0${Math.floor(this.musica.currentTime % 60)}`
        
        this.barraDeTempo.value = this.musica.currentTime
        this.tempoReal.textContent = "0" + min.slice(-2) + seg.slice(-2)
    },

    playPause (){

        if(this.musica.paused){
            
            this.start()
            
        }
        else {
            this.pausar()
            
        }


    },

    moverTempo () {

        this.musica.currentTime = this.barraDeTempo.value
    },

    mostrarVol () {

        this.volBarr.value = this.musica.volume

        this.divVol.style.display = "inline-block"
    
        setTimeout(() => {
            this.divVol.style.display = "none"
        
        }, 5000);
    },

    alterarVol () {

        this.musica.volume = this.volBarr.value

    }


}

