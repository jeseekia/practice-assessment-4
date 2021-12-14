function countLetters(word, letter) {
    let counter = 0;
    let lowerWord = word.toLowerCase();
    let lowerLetter = letter.toLowerCase();
    //look at each char in a word
    for(let i=0; i<lowerWord.length; i++){
        //check if the current char === letter
        if(lowerWord.charAt(i) === lowerLetter){
            //increment a counter
            counter++;
        }  
    }    
    //return counter
    return counter;
}

module.exports = countLetters;