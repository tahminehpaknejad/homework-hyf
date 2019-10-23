

const numbers = [1, 2, 3, 4]

const newNumbers = numbers.filter(value => { 
    if (value % 2 !== 0) {
      return true 
    } else{
        return false
    }
    
}).map(value => value * 2)
console.log("The doubled numbers are", newNumbers);

