
const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];


function findShotrestWord(danishWords) {
    const shortestWord = danishWords.reduce((preWord , currWord) => { 
        if (currWord .length < preWord .length) {
             return currWord;            
        }
         else {
            return preWord;
        }
        
    });
    return shortestWord;
}
    
 const result = findShotrestWord(danishWords);
console.log(result);





 
