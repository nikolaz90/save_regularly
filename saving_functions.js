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




const allYears = {}



const section = document.getElementById('section-1')
const article = document.getElementById('article-1')

const list = document.createElement('li')


const generateArticles = ()=>{
    let yearsArray = Object.values(allYears)
    yearsArray.map((item, index)=>{
        article.append(list, `${index + 1} : ${item.year} total amount saved is ${item.yearTotal()}
        the average amount saved every month is ${item.yearAverage()}`)
        // list.textContent = `${index + 1} : ${item.year} total amount saved is ${item.yearTotal()}
        // the average amount saved every month is ${item.yearAverage()}`
    })
}