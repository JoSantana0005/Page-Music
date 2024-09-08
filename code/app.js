const music = new Audio("../audio/X2.mp3")
const songs = [
    {
      id: '1',
      content: 'X2 <div class="subTitle"> Dei V </div> ',
      img: '../imagen/DEIV.JPEG'
    },
    {
      id: '2',
      content: 'Clima <div class="subTitle"> Dei V </div>',
      img: '../imagen/clima.jpeg'
    },
    {
      id: '3',
      content: ' Martini <div class="subTitle"> Dei V </div>',
      img: '../imagen/Martini.jpeg'
    },
    {
      id: '4',
      content: 'Rapido <div class="subTitle"> Dei V feat Cris MJ </div>',
      img: '../imagen/rapido.jpeg'
    },
    {
        id: '5',
        content: 'Quien es Dei V? <div class="subTitle"> Dei V </div>',
        img: '../imagen/rapido.jpeg'
    },
    {
        id: '6',
        content: 'Treding REMIX <div class="subTitle"> Dei V feat Myke Towers </div>',
        img: '../imagen/Treding.jpeg'
    },
  ];
  
  const songElements = document.getElementsByClassName('SongMusic');
  
  Array.from(songElements).forEach((element, i) => {
    const imgElement = element.getElementsByTagName('img')[0];
    const nameElemnt = element.getElementsByTagName('h5')[0];
    if (imgElement && nameElemnt) {
      imgElement.src = songs[i].img;
      nameElemnt.innerHTML = songs[i].content
      
    } else {
      console.error(`No se encontró elemento img en el elemento SongMusic ${i}`);
    }
  });
  //evnto de los iconos para reproducir y cambiar musica
  let play = document.getElementById('MasterPlay')
  let wave = document.getElementsByClassName('Waves')[0]
  play.addEventListener('click',() =>{
    if(music.paused || music.currentTime <= 0){
      play.classList.remove('bi-play-fill');
      play.classList.add('bi-pause-fill');
      wave.classList.add('active');
      music.play();
    }else{
      play.classList.remove('bi-pause-fill');
      play.classList.add('bi-play-fill');
      wave.classList.remove('active');
      music.pause()
    }
  })
  //Event para pausar y reproducir las canciones de la playlist
  let makeplay = () =>{
    Array.from(document.getElementsByClassName('PlaylistPlay')).forEach((element) =>{
      element.classList.add('bi-play-circle-fill');
      element.classList.remove('bi-pause-circle-fill');
    }) 
  }
  let index = 0

  Array.from(document.getElementsByClassName('PlaylistPlay')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
      index = e.target.id
      console.log(index)
      makeplay();
      e.target.classList.remove('bi-play-circle-fill');
      e.target.classList.add('bi-pause-circle-fill');
      music.src = `../audio/${index}.mp3`
      music.play()
    })
  }) 