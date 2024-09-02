function calculateCommission(locks: number, stocks: number, berrels: number) {
    interface setData {
        locks: number,
        stocks: number,
        berrels: number,
    }

    interface setPrice {
        locks: number,
        stocks: number,
        berrels: number
    }

    const price: setPrice = {
        locks: 45,
        stocks: 30,
        berrels: 25
    }

    // Set Data
    const data: setData ={
        locks: locks,
        stocks: stocks,
        berrels: berrels
    }

    const sales: number = data.locks * price.locks + data.stocks * price.stocks + data.berrels * price.berrels
    var commission = 0

    console.log(`Locks: ${data.locks}`)
    console.log(`Stocks: ${data.stocks}`)
    console.log(`Berrels: ${data.berrels}`) 
    console.log(`Total: ${sales}\n`)

    if(sales > 1800) {
        commission = 0.10 * 1000 + 0.15 * 800 + 0.20 * (sales - 1800)
        console.log(`Commission: ${commission}`)
    } else if(sales >= 1000) {
        commission = 0.10 * 1000 + 0.15 * (sales - 1000)
        console.log(`Commission: ${commission}`)
    } else {
        commission = 0
        console.log(`Commission: ${commission}`)
    } return commission
}