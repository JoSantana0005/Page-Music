const music = new Audio("../../audio/1.mp3")
const songs = [
    {
      id: '1',
      content: 'X2 <div class="subTitle"> Dei V </div> ',
      img: '../../imagen/1.jpeg'
    },
    {
      id: '2',
      content: 'Clima <div class="subTitle"> Dei V </div>',
      img: '../../imagen/2.jpeg'
    },
    {
      id: '3',
      content: ' Martini <div class="subTitle"> Dei V </div>',
      img: '../../imagen/3.jpeg'
    },
    {
      id: '4',
      content: 'Rapido <div class="subTitle"> Dei V feat Cris MJ </div>',
      img: '../../imagen/4.jpeg'
    },
    {
        id: '5',
        content: 'Quien es Dei V? <div class="subTitle"> Dei V </div>',
        img: '../../imagen/5.jpeg'
    },
    {
        id: '6',
        content: 'Treding REMIX <div class="subTitle"> Dei V feat Myke Towers </div>',
        img: '../../imagen/6.jpeg'
    },
    {
      id: '7',
      content: 'Verde Menta <div class="subTitle">Rauw Alejandro</div>',
      img: '../../imagen/7.jpeg'
    },
    {
      id: '8',
      content: 'By the way <div class="subTitle"> RHCP </div>',
      img: '../../imagen/8.jpeg'
    },
    {
      id: '9',
      content: 'Ponte pa mi <div class="subTitle"> Justin Quiles </div>',
      img: '../../imagen/9.jpeg'
    },
    {
      id: '10',
      content: 'Un coco <div class="subTitle"> Bad Bunny </div>',
      img: '../../imagen/10.jpeg'
    },
    {
      id: '11',
      content: 'I known <div class="subTitle"> Travis Scott </div>',
      img: '../../imagen/11.jpeg'
    },
    {
      id: '12',
      content: 'Fantasias <div class="subTitle"> Mora </div>',
      img: '../../imagen/12.jpeg'
    },
    {
      id: '13',
      content: 'Hoy Aqui <div class="subTitle"> Rauw Alejandro </div>',
      img: '../../imagen/13.jpeg'
    },
    {
      id: '14',
      content: 'Noche de Aventura <div class="subTitle"> Ozuna </div>',
      img: '../../imagen/14.jpeg'
    },
    {
      id: '15',
      content: 'La amiga <div class="subTitle"> Justin Quiles </div>',
      img: '../../imagen/15.jpeg'
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
  //evento de los iconos para reproducir y cambiar musica
  let play = document.getElementById('MasterPlay')
  let wave = document.getElementsByClassName('Waves')[0]
  play.addEventListener('click',() =>{
    if(music.paused || music.currentTime <= 0){
      music.play()
      play.classList.add('bi-play-fill');
      play.classList.remove('bi-pause-fill');
      wave.classList.add('active');
    }else{
      music.pause()
      play.classList.remove('bi-pause-fill');
      play.classList.add('bi-play-fill');
      wave.classList.remove('active');
    }
  })
  //Event para pausar y reproducir las canciones de la playlist
  const makeplay = () =>{
    Array.from(document.getElementsByClassName('PlaylistPlay')).forEach((element) =>{
      element.classList.add('bi-play-circle-fill');
      element.classList.remove('bi-pause-circle-fill');
    }) 
  }
  const makebackground = () =>{
    Array.from(document.getElementsByClassName('SongMusic')).forEach((element) =>{
      element.style.background = "000"
    }) 
  }
  let index = 0
  let poster = document.getElementById('Poster')
  let Title = document.getElementById('title')
  Array.from(document.getElementsByClassName('PlaylistPlay')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
      index = e.target.id
      console.log(index)
      makeplay();
      e.target.classList.remove('bi-play-circle-fill');
      e.target.classList.add('bi-pause-circle-fill');
      music.src = `../../audio/${index}.mp3`
      poster.src = `../../imagen/${index}.jpeg`
      let song__title = songs.filter((ele) =>{
        return ele.id == index
      })

      song__title.forEach(ele =>{
        let {content} = ele
        Title.style = 'color: #aaa; font-size: 11px'
        Title.innerHTML = content
      })
      if (music.play()) {
        play.classList.remove('bi-play-fill');
        play.classList.add('bi-pause-fill');
        wave.classList.add('active');
      } else {
        play.classList.add('bi-play-fill');
        play.classList.remove('bi-pause-fill');
        wave.classList.remove('active');
      }
      music.addEventListener('ended',() =>{
        play.classList.remove('bi-pause-fill');
        play.classList.add('bi-play-fill');
        wave.classList.remove('active');
      })
      makebackground()
      Array.from(document.getElementsByClassName('SongMusic'))[`${index-1}`].style.background = "#000"
      music.play()
    })
  }) 

// event para colocar el tiempo de la cancion
let start = document.getElementById('StartItems')
let end = document.getElementById('EndItems')
let seek = document.getElementById('seek-play')
let bar__music = document.getElementById('bar__music2')
let dot = document.getElementsByClassName('dotted')[0]
music.addEventListener('timeupdate', () =>{
  let music__cur = music.currentTime
  let music__dura = music.duration
  let minu = Math.floor(music__dura/60)
  let second = Math.floor(music__dura%60)
  
  if (second < 10) {
    second = `0${second}`
  }
  end.style = "font-weight: 300"
  end.innerText = `${minu} : ${second}`
  
  let minu1 = Math.floor(music__cur/60)
  let second1 = Math.floor(music__cur%60)
  
  if (second1 < 10) {
    second1 = `0${second1}`
  }
  start.style = "font-weight: 300"
  start.innerText = `${minu1} : ${second1}`
  let progresson = parseInt((music__cur/music__dura)*100)
  seek.value = progresson
  let seekBar = seek.value
  bar__music.style.width = `${seekBar}%`
  dot.style.left = `${seekBar}%`
})
// event para el seek 
seek.addEventListener('change', () =>{
     music.currentTime = (seek.value * music.duration)/100 
})

// event para el volumen de la musica
let icon = document.getElementById('Vol--icon');
let volumen = document.getElementById('seek--vol');
let dot_vol = document.getElementById('vol__dot');
let bar__vol = document.getElementsByClassName('bar__vol2')[0]

volumen.addEventListener('change', () =>{
  if(volumen.value == 0){
    icon.classList.remove('bi-volume-down')
    icon.classList.add('bi-volume-mute-fill')
    icon.classList.remove('bi-volume-up')
  }
  if(volumen.value > 0){
    icon.classList.add('bi-volume-down')
    icon.classList.remove('bi-volume-mute-fill')
    icon.classList.remove('bi-volume-up-fill')
  }
  if(volumen.value > 50){
    icon.classList.remove('bi-volume-down')
    icon.classList.remove('bi-volume-mute-fill')
    icon.classList.add('bi-volume-up')
  }
  let vol__music = volumen.value
  bar__vol.style.width = `${vol__music}%`
  dot_vol.style.left = `${vol__music}%`
  music.volume = vol__music/100
})

// Event de los arrow
let left = document.getElementById('Back-music')
let right = document.getElementById('Next-music')

left.addEventListener('click', () =>{
     index -= 1
     if (index < 1) {

      index = Array.from(document.getElementsByClassName('SongMusic')).length
      }
      music.src = `../../audio/${index}.mp3`
      poster.src = `../../imagen/${index}.jpeg`
      let song__title = songs.filter((ele) =>{
        return ele.id == index
      })
 
      song__title.forEach(ele =>{
        let {content} = ele
        Title.style = 'color: #aaa; font-size: 11px'
        Title.innerHTML = content
       })
       makeplay()
 
       document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
       document.getElementById(`${index}`).classList.add('bi-pause-circle-fill');
       if (music.play()) {
        play.classList.remove('bi-play-fill');
        play.classList.add('bi-pause-fill');
      } else {
        play.classList.add('bi-play-fill');
        play.classList.remove('bi-pause-fill');
      }
 
       makebackground()
       Array.from(document.getElementsByClassName('SongMusic'))[`${index-1}`].style.background = "#000"
       music.play()
})
right.addEventListener('click', () =>{
  index -= 0
  index += 1
  if (index > Array.from(document.getElementsByClassName('SongMusic')).length) {
    index = 1
   }
   music.src = `../../audio/${index}.mp3`
   poster.src = `../../imagen/${index}.jpeg`
   let song__title = songs.filter((ele) =>{
     return ele.id == index
   })

   song__title.forEach(ele =>{
     let {content} = ele
     Title.style = 'color: #aaa; font-size: 11px'
     Title.innerHTML = content
    })
    makeplay()

    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle-fill');
    if (music.play()) {
      play.classList.remove('bi-play-fill');
      play.classList.add('bi-pause-fill');
      wave.classList.add('active');
    } else {
      play.classList.add('bi-play-fill');
      play.classList.remove('bi-pause-fill');
      wave.classList.remove('active');
    }

    makebackground()
    Array.from(document.getElementsByClassName('SongMusic'))[`${index-1}`].style.background = "#000"
    music.play()
})

// Event para los scroll
let left__scroll = document.getElementById('Left--scroll--panel')
let right__scroll = document.getElementById('right--scroll--panel')
let popular__song = document.getElementsByClassName('Music')[0];
left__scroll.addEventListener('click',()=>{
  popular__song.scrollLeft -= 330
})
right__scroll.addEventListener('click',()=>{
  popular__song.scrollLeft += 330
})

let left__scrolls = document.getElementById('Left--scrolls--panel')
let right__scrolls = document.getElementById('right--scrolls--panel')
let popular__singer = document.getElementsByClassName('Artists')[0];
left__scrolls.addEventListener('click',()=>{
  popular__singer.scrollLeft -= 330
})
right__scrolls.addEventListener('click',()=>{
  popular__singer.scrollLeft += 330
})
//Evento para cambiar la musica , ponerla en aletaorio , etc..
let shuffle = document.getElementById('Music-change');
let cambio = 'next'
shuffle.addEventListener('click',()=>{
  let referencia = cambio
  switch (referencia) {
    case 'next':
      shuffle.classList.remove('bi-repeat')
      shuffle.classList.add('bi-repeat-1');
      shuffle.classList.remove('bi-shuffle');
      cambio = 'repeat'
      break;
  
    case 'repeat':
      shuffle.classList.remove('bi-repeat')
      shuffle.classList.remove('bi-repeat-1');
      shuffle.classList.add('bi-shuffle');
      cambio= 'repeat-1'
      break;
    case 'repeat-1':
      shuffle.classList.remove('bi-repeat-1');
      shuffle.classList.remove('bi-shuffle');
      shuffle.classList.add('bi-repeat')
      cambio = 'next'
      break;
  }
})
//Evento como tal
let cantidad = document.getElementsByClassName('SongMusic').length;
music.addEventListener('ended',()=>{
  if(shuffle.classList.contains('bi-repeat')){
    if(index == songs.length){
      index == 1
    }else{
      index++;
    }
    console.log(index)
    makeplay();
    music.src = `../../audio/${index}.mp3`
    poster.src = `../../imagen/${index}.jpeg`
    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle-fill');
    let song__title = songs.filter((ele) =>{
      return ele.id == index
    })
    song__title.forEach(ele =>{
      let {content} = ele
      Title.style = 'color: #aaa; font-size: 11px'
      Title.innerHTML = content
    })
    if (music.play()) {
      play.classList.remove('bi-play-fill');
      play.classList.add('bi-pause-fill');
      wave.classList.add('active');
    } else {
      play.classList.add('bi-play-fill');
      play.classList.remove('bi-pause-fill');
      wave.classList.remove('active');
    }
    makebackground()
    Array.from(document.getElementsByClassName('SongMusic'))[`${index-1}`].style.background = "#000"
    music.play()
    
  }else if(shuffle.classList.contains('bi-shuffle')){
    let aleatorio = Math.floor(Math.random() * cantidad)
    console.log(aleatorio)
    makeplay();
    music.src = `../../audio/${aleatorio}.mp3`
    poster.src = `../../imagen/${aleatorio}.jpeg`
    document.getElementById(`${aleatorio}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${aleatorio}`).classList.add('bi-pause-circle-fill');
    let song__title = songs.filter((ele) =>{
      return ele.id == aleatorio
    })
    song__title.forEach(ele =>{
      let {content} = ele
      Title.style = 'color: #aaa; font-size: 11px'
      Title.innerHTML = content
    })
    if (music.play()) {
      play.classList.remove('bi-play-fill');
      play.classList.add('bi-pause-fill');
      wave.classList.add('active');
    } else {
      play.classList.add('bi-play-fill');
      play.classList.remove('bi-pause-fill');
      wave.classList.remove('active');
    }
    makebackground()
    Array.from(document.getElementsByClassName('SongMusic'))[`${aleatorio-1}`].style.background = "#000"
    music.play()
  }else{
    makeplay();
    music.src = `../../audio/${index}.mp3`
    poster.src = `../../imagen/${index}.jpeg`
    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle-fill');
    let song__title = songs.filter((ele) =>{
      return ele.id == index
    })
    song__title.forEach(ele =>{
      let {content} = ele
      Title.style = 'color: #aaa; font-size: 11px'
      Title.innerHTML = content
    })
    if (music.play()) {
      play.classList.remove('bi-play-fill');
      play.classList.add('bi-pause-fill');
      wave.classList.add('active');
    } else {
      play.classList.add('bi-play-fill');
      play.classList.remove('bi-pause-fill');
      wave.classList.remove('active');
    }
    makebackground()
    Array.from(document.getElementsByClassName('SongMusic'))[`${index-1}`].style.background = "#000"
    music.play()
  }
})
