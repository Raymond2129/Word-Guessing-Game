//Create array of words and choose word randomly
//create underderscore based on length of words.
//get uers gues
//Correct guess and incorrect guess

//create the array

//choose word randomly
var randomWordArray = ["rod", "reel", "pole", "bass", "trout", "perch", "liplesscrank", "squarebill", "stick bait", "jerkbait", "worms", "grubs", "poontoon", "basstracker", "icefishing", "spoons", "castmaster", "bassmaster"];
var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
var s;
var count = 10;
var answerArray = [];
var win= answerArray.length;

function startUp() {
for  (var i = 0; i< randomWord.length; i++) {
    answerArray[i] = "_";
}
s = answerArray.join(" ");
document.getElementById("answer").innerHTML = s;
}
function Letter () {
var letter = document.getElementById("letter").value;

if (letter.length > 0) {
    for (var i = 0; i < randomWord.length; i++){
        if (randomWord[i] === letter) {
            answerArray[i] = letter;
        }
    }
    count--
    document.getElementById("counter").innerHTML = "Number of trys left: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
}
if (count < 5 ) {
    document.getElementById("stat").innerHTML = "Only have 5 more guesses - You can do this!!";
}
if (answerArray.indexOf('_') == -1) {
    document.getElementById("stat").innerHTML = "You Win!!";
} else if (count <= 0) {
    document.write('<style>html{background-image:url("../images/you-lose.jpg")}</style><h2>You Lose</h2><br><p>Please refresh page to play again!</p>');
}
}
