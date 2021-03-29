'use strict';

const gallery = [
  {
    image: 'pics/cp77 1.png',
    title: 'Receptionist',
    blurb:
      'The receptionist illuminated by her computer screen. Picture taken from the game Cyberpunk 2077.',
  },
  {
    image: 'pics/cp77 2.png',
    title: 'Messenger',
    blurb:
      'The messenger delivering her messege. Picture taken from the game Cyberpunk 2077.',
  },
  {
    image: 'pics/cp77 3.png',
    title: 'Looking for fun?',
    blurb:
      'A random citizen of Night City looking for some company. Picture taken from the game Cyberpunk 2077.',
  },
  {
    image: 'pics/cp77 4.png',
    title: 'Brigitte',
    blurb:
      'Maman ("Mama") Brigitte, leader of the Voodoo Boyz gang. Picture taken from the game Cyberpunk 2077.',
  },
  {
    image: 'pics/cp77 5.png',
    title: 'Rogue',
    blurb:
      'Rogue listening to Johhny Silverhand. Picture taken from the game Cyberpunk 2077.',
  },
  {
    image: 'pics/cp77 6.png',
    title: 'Takemura',
    blurb:
      'Goro Takemura waiting for V. Picture taken from the game Cyberpunk 2077.',
  },
  {
    image: 'pics/cp77 7.png',
    title: 'Panam',
    blurb: 'Panam fixing her car. Picture taken from the game Cyberpunk 2077.',
  },
  {
    image: 'pics/cp77 8.png',
    title: 'Cyborg',
    blurb:
      'A random citizen of Night City. Picture taken from the game Cyberpunk 2077.',
  },
  {
    image: 'pics/cp77 9.png',
    title: 'Parade Attendant',
    blurb:
      'A random citizen of Night City enjoying the Japantown parade. Picture taken from the game Cyberpunk 2077.',
  },
  {
    image: 'pics/cp77 10.png',
    title: 'NCPD',
    blurb:
      'An NCPD officer looking for V. Picture taken from the game Cyberpunk 2077.',
  },
  {
    image: 'pics/doom 1.jpg',
    title: 'Imp',
    blurb:
      'An imp preparing to throw a fireball. Picture taken from the game Doom (2016).',
  },
  {
    image: 'pics/doom 2.jpg',
    title: 'U wot m8?!',
    blurb:
      'An imp screaming while a revenant looks on. Picture taken from the game Doom (2016).',
  },
  {
    image: 'pics/ed 1.jpg',
    title: 'Exploration',
    blurb:
      'A lone ship exploring the galaxy. Picture taken from the game Elite: Dangerous.',
  },
  {
    image: 'pics/jw 1.jpg',
    title: 'Dinosaurs',
    blurb:
      'Dinosaurs roaming their enclosures. Picture taken from the game Jurassic World Evolution.',
  },
  {
    image: 'pics/kcd 1.jpg',
    title: 'Medieval room',
    blurb:
      'Inside a medieval room. Picture taken from the game Kingdom Come Deliverance.',
  },
  {
    image: 'pics/mfs 1.jpg',
    title: 'New Zealand',
    blurb:
      'An ICON A5 on a New Zealand meadow. Picture taken from the game Microsoft Flight Simulator.',
  },
  {
    image: 'pics/mfs 2.jpg',
    title: 'Croatia',
    blurb:
      'An ICON A5 near Tisno, Croatia. Picture taken from the game Microsoft Flight Simulator.',
  },
  {
    image: 'pics/swj 1.jpg',
    title: 'Finish Him',
    blurb:
      'Cal finishes off an Imperial droid. Picture taken from the game Star Wars Jedi: Fallen Order.',
  },
  {
    image: 'pics/swj 2.jpg',
    title: 'Show Me The Way',
    blurb:
      'Cal illuminates his way in the darkness with his lightsaber. Picture taken from the game Star Wars Jedi: Fallen Order.',
  },
  {
    image: 'pics/wf 1.jpg',
    title: 'Excalibur',
    blurb: 'Excalibur taking aim. Picture taken from the game Warframe.',
  },
  {
    image: 'pics/wf 3.jpg',
    title: 'Ember',
    blurb:
      'Ember posing in front of some lights. Picture taken from the game Warframe.',
  },
  {
    image: 'pics/wf 4.jpg',
    title: 'Titania',
    blurb:
      'Titania admiring one of her butterflies. Picture taken from the game Warframe.',
  },
  {
    image: 'pics/wf 5.jpg',
    title: 'Nyx',
    blurb: 'Nyx shooting his pistol. Picture taken from the game Warframe.',
  },
  {
    image: 'pics/wf 6.jpg',
    title: 'Ember',
    blurb:
      'Ember showing off her powers. Picture taken from the game Warframe.',
  },
  {
    image: 'pics/bm 1.jpg',
    title: 'Batman',
    blurb:
      'Batman looking over Gotham City. Picture taken from the game Batman: Arkham Knight.',
  },
];

let current = 0;

for (let i = 0; i < gallery.length; i++) {
  $('#slideshow').append(
    $(
      `<div class='thumb' id="${i}"><img src="${gallery[i].image}"><p class='hidden'>${gallery[i].title}</p></div>`
    )
  );
  $(`#counter`).append(`<p class='${i}'>.</p>`);
}

function loadPicture(index) {
  $('#photo').attr('src', gallery[index].image);
  $('#title').text(gallery[index].title);
  $('#blurb').text(gallery[index].blurb);

  $('.thumb img').css('box-shadow', 'none');
  $('.thumb img').css('filter', 'grayscale(100%)');
  $('.thumb img').css('transform', 'scale(1)');
  $(`#${index} img`).css('box-shadow', '0 0 1px 3px white');
  $(`#${index} img`).css('filter', 'grayscale(0%)');
  $(`#${index} img`).css('transform', 'scale(1.1)');

  $(`.hidden`).css('display', 'none');
  $(`.hidden`).css('background', 'rgba(0, 128, 255, 0.5)');
  $(`.hidden`).css('color', 'white');
  $(`.hidden`).css(`text-shadow`, `0 0 10px black,0 0 5px black,0 0 5px black`);
  $(`#${index} .hidden`).css('display', 'block');
  $(`#${index} .hidden`).css('background', 'white');
  $(`#${index} .hidden`).css('color', 'black');
  $(`#${index} .hidden`).css(`text-shadow`, `none`);

  $(`#counter p`).css('color', 'black');
  $(`.${index}`).css('color', 'white');

  let position = document.getElementById(`${index}`).offsetLeft;
  document.getElementById(`slideshow`).scrollLeft =
    position - window.innerWidth / 2 + 95;

  $('#background').attr('src', gallery[index].image);

  current = index;
}

loadPicture(current);

$('#next').on('click', function () {
  if (current < gallery.length - 1) {
    current++;
    loadPicture(current);
  }
});
$('#previous').on('click', function () {
  if (current > 0) {
    current--;
    loadPicture(current);
  }
});

$('#slideshow').on('click', '.thumb', function () {
  loadPicture($(this).attr('id'));
});

$('.showOnHover').hover(
  function () {
    $('#counter p').fadeIn('fast');
    $('#description').fadeIn('fast');
    $('#title').fadeIn('fast');
    $('#blurb').fadeIn('fast');
  },
  function () {
    $('#counter p').fadeOut();
    $('#description').fadeOut();
    $('#title').fadeOut();
    $('#blurb').fadeOut();
  }
);
