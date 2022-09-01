const allYears = {}
let expectedInterestRate = 1
function createNewYear(year){
    if (typeof year !== 'number') {
        return 'Not a number, please enter a number....'
    }
    if(allYears[`${year}`]){
        return 'there is already a year saved with that year'
    }else{
        allYears[`${year}`] = new YearlySavings(year)
        return `Created the year ${year}`
    }
}


// adding info to HTML page
const section = document.getElementById('section-1')
const article = document.getElementById('article-1')
const generateArticles = ()=>{
    article.innerHTML = ""
    let yearsArray = Object.values(allYears)
    yearsArray.map((item, index)=>{
        article.innerHTML += `<li>${index + 1} : ${item.year} total amount saved is ${formatPrice(item.yearTotal())}
        the average amount saved every month is ${formatPrice(item.yearAverage())}</li>`
    })

    spanTotal.textContent = `A total of ${formatPrice(totalSavingWithoutInterest())} saved without interest included.`
}

const spanTotal = document.getElementById('total-of-totals')
//spanTotal.textContent = totalSavingWithoutInterest()




function addExpectedInterestRate(rate){
    if(typeof rate !== 'number'){
        return 'Not a number, please enter a number....'
    }else if(typeof rate === 'number'){
        expectedInterestRate = Number((rate /100)+1)
        return `Added an expected interest rate of ${rate}`
    }
}

function totalSavingWithoutInterest(){
    let tempArray = Object.values(allYears)
    return tempArray.reduce((acc, curr)=>{
        acc = acc + curr.yearTotal()
        return acc
    }, 0)
}


function totalSavingWithInterest(){
    let tempArray = Object.values(allYears)
    let accumulated = 0
    let yearsArray = tempArray.map((item)=>{
        accumulated += item.yearTotal()
        return Number(accumulated * expectedInterestRate)
    })
    return yearsArray[yearsArray.length-1]
}