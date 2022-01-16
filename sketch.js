let img,
  dvd,
  slider,
  pg,
  val,
  button,
  tv,
  remote,
  sta,
  b,
  cha,
  cha2,
  momo,
  song,
  fr,
  screen;

function preload() {
  img = loadImage("DVD.png");
  sta = loadImage("static.png");
  b = loadImage("tv.png");
  momo = loadImage("momo2.jpeg");
  song = loadSound("scream.wav");
}

function setup() {
  createCanvas(1100, 450);

  // adding tv outline
  tv = createGraphics(850, 450);

  // adding the black screen:
  pg = createGraphics(800, 400);

  // creating the slider:
  slider = createSlider(1, 10, 1, 0);
  slider.position(905, 225);
  slider.style("width", "85px");

  // creating the button:
  button = createButton("Randomize");
  button.position(908, 175);

  // creating the channel
  cha = createButton("Do not click!");
  cha.position(905, 325);
  cha.mousePressed(rando);

  // setting screen to static
  screen = sta;

  // creating the dvd symbol:
  dvd = new Logo();
  fr = new Frame(dvd.x, dvd.y);
}

function draw() {
  background(255);

  // draw tv outline
  tv.background(b);
  image(tv, 0, 0);

  // draw black screen
  pg.background(screen);
  image(pg, 25, 25, 800, 400);

  // draw remote
  remote = rect(900, 150, 100, 250, 20);
  // slider text
  val = slider.value();
  text("Speed:", 927, 210, 100, 25);

  button.mousePressed(randomize);

  function randomize() {
    dvd.x = random(25, 725);
    fr.x = dvd.x;
    dvd.y = random(25, 375);
    fr.y = dvd.y;
    dvd.show(img);
  }

  // update and draw dvd position
  dvd.update(val, img);
  dvd.show(img);

  fr.update(val);
  fr.show();
}

// when 'do not click' is clicked, change static to momo
function rando() {
  song.play();
  screen = momo;
  cha2 = createButton("Return");
  cha2.position(922, 290);
  cha2.mousePressed(returns);
}

function returns() {
  screen = sta;
}
