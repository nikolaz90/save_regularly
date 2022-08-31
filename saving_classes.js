class YearlySavings{
    constructor(year){
        if(typeof year !== 'number') {
            alert('Not a number, please enter a number....')
            throw console.error('Not a number, please enter a number....');
        }
        else if(typeof year === 'number'){
            this.year = Number(year)
        }
        
        this.dateCreated =new Date().toDateString()
        this.months = {
            january:0, 
            febuary:0, 
            arch:0, 
            april:0, 
            may:0, june:0,
            july:0, 
            august:0, 
            septembre:0,
            octobre:0, 
            november:0, 
            december:0
        }
    }

    addYearlyTarget(target){
        if(typeof target !== 'number'){
            return 'Not a number, please enter a number....'
        }else if(typeof target === 'number'){
           this.yearlyTarget = Number(target) 
        }
    }

    addMonthlyTarget(target){
        if(typeof target !== 'number'){
            return 'Not a number, please enter a number....'
        }else if(typeof target === 'number'){
           this.monthlyTarget = Number(target)
           return `Monthly target of ${target} added. Nice one!`
        }
        
    }

    addMonthlyAmount(month, amount){
        this.months[month] = amount
    }


    yearTotal(){
        const monthlyAmounts = Object.values(this.months)
        const total = monthlyAmounts.reduce((acc, curr)=> acc + curr)
        return total
    }

    yearAverage(){
        const avg = this.yearTotal() / 12
        return avg
    }
    
}
