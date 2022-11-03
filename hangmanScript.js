function doc(x)
{
    return document.getElementById(x);
}


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

let randomizer = Math.random() * randWords.length;
randomizer = Math.floor(randomizer);
console.log(randomizer);

doc("randWord").onclick = function()
{
    randomizer = Math.random() * randWords.length;
    randomizer = Math.floor(randomizer);
    console.log(randomizer);
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