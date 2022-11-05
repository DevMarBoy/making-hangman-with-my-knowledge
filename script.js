function doc(x)
{
    return document.getElementById(x);
}

let playerLife = 5;

doc("pLife").innerHTML = "PLayer Life: " + playerLife;

let randWords = ["animals", "dog", "cat", "bunny", "hamster"];
let topic2 = ["programming languages", "c++", "javascript", "python", "java", "c#"];
let topic3 = ["phones", "samsung", "apple", "lg", "nokia"];

let theTopics = [randWords, topic2, topic3];

let topicRand = Math.random() * theTopics.length;
topicRand = Math.floor(topicRand);
console.log("topic = " + topicRand);



doc("topic").innerHTML = "Topic: " + theTopics[topicRand][0];

doc("newTop").onclick = function()
{
    topicRand = Math.random() * theTopics.length;
    topicRand = Math.floor(topicRand);

    doc("topic").innerHTML = "Topic: " + theTopics[topicRand][0];
}


let guessedRight = [];

console.log(randWords);

let randomizer = Math.random() * theTopics[topicRand].length;

console.log("the topic", theTopics[topicRand])

randomizer = Math.floor(randomizer);
if(randomizer == 0)
{
    randomizer += 1;
}
console.log(randomizer, randWords[randomizer]);

let guessWord = theTopics[topicRand][randomizer].length;
console.log("Word Length Is " + guessWord);

let underScore;

for(let i = 0; i <= guessWord - 1; i++)
{
    console.log("isWorking");

    underScore += " _ ";

    underScore = underScore.replaceAll("undefined", "");
    
    doc("wordHelp").innerHTML = underScore;
}


// guessWord = guessWord.replaceAll(guessWord, " _ ");
// console.log(guessWord);

doc("randWord").onclick = function()
{
    randomizer = Math.random() * theTopics[topicRand].length;
    randomizer = Math.floor(randomizer);
    if(randomizer == 0)
    {
        randomizer += 1;
    }
    console.log(randomizer, theTopics[topicRand][randomizer]);

    let guessWord2 = theTopics[topicRand][randomizer].length;
    let underScore2;

    for(let i = 0; i <= guessWord2 - 1; i++)
    {
        console.log("UnderScored");

        underScore2 += " _ ";

        underScore2 = underScore2.replaceAll("undefined", "");
        
        doc("wordHelp").innerHTML = underScore2;
    }
}

doc("submitGuess").onclick = function()
{
    let userGuess = doc("inputGuess").value;

    userGuess = userGuess.toLowerCase();

    let myHack = theTopics[topicRand][randomizer].indexOf(userGuess);

    if(userGuess == theTopics[topicRand][randomizer])
    {
        alert("correct");
    }
    else if(myHack >= 0)
    {
        guessedRight.push(userGuess);

        doc("rightGLet").innerHTML = guessedRight;

        console.log(guessedRight);

        console.log("You Got The Letter " + randWords[randomizer].charAt(myHack))
    }
    else if(myHack < 0)
    {
        playerLife -= 1;
        doc("pLife").innerHTML = "PLayer Life: " + playerLife;
        if(playerLife == 0)
        {
            alert("You Have Lost The Game Reload To Restart\nPress Ok To Restart");
            window.location.reload();
        }

        console.log("you lost a life");
    }
}

doc("submitNew").onclick = function()
{
    let wordAdded = doc("addWord").value;

    let lowered = wordAdded.toLowerCase();

    theTopics[topicRand].push(lowered);

    console.log(theTopics);

}