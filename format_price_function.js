function formatPrice(amount){
    let formatObj = new Intl.NumberFormat('en-UK', {
        style: 'currency', 
        currency: 'GBP'
    })
    return formatObj.format(amount)
}
