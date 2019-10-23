

const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function avarage (housePrices) {
    let total=0;
       for (const item of housePrices){
       total += item;
    }
    return  total/housePrices.length ;
    }
        
    console.log(avarage(housePrices));


    function median(housePrices) {
        const item =(housePrices.length)/2;
        if (housePrices.length % 2 === 0){
        return (housePrices[item] + housePrices[item-1])/2;
        } else { 
            return housePrices[Math.floor(item)]
        }
    }

    console.log(median(housePrices));
    
    