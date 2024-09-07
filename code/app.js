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