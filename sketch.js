//make a list to store your list of words
const wordsArray = [
  'LOVE',
  'MARGINALIZATION',
  'ANXIETY',
  'INTEGRITY',
  'MENTAL HEALTH',
  'MISOGYNY',
  'WOKE',
  'STRESS',
];

//find out the length of the list
const wordsLength = wordsArray.length;

//once you know this, you can generate a random value between 0 and the index of the last item
//indexes in an array ALWAYS start at 0 so your last index will be one below the total number of items
let randomWordNumber = Math.floor(Math.random() * wordsLength);

//to select from an array, write arrayName[ indexNumber ].
//This saves our random word in a variable so we can use it on the site and in the filename
let randomWord = wordsArray[randomWordNumber];

function setup() {
  createCanvas(1679, 905);
  background(255);

  //define our element as a variable
  const category = document.querySelector('#category');
  //check it exists so we don't get an error 
  if (category) {
    category.innerHTML = randomWord;
  }
}

function draw() {
  strokeWeight(0.0);
  stroke(0);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function mouseDragged () {
  strokeWeight(random(5, 1), 255);
  stroke(random (25, 0), 255);
  strokeCap(ROUND);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function saveImage() {
  save('The Word is ' + randomWord + '.jpg');
}