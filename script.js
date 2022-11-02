function doc(x)
{
    return document.getElementById(x);
}


let randWords = ["dogs", "bunny", "halloween", "devmarboy"];
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

    let myHack = randWords[randomizer].indexOf(userGuess);

    if(userGuess == randWords[randomizer])
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

    randWords.push(lowered);

    console.log(randWords);
}