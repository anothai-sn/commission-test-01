function calculateCommission() {
    // Get the values from the form
    const locks = parseInt(document.getElementById('locks').value) || 0;
    const stocks = parseInt(document.getElementById('stocks').value) || 0;
    const berrels = parseInt(document.getElementById('berrels').value) || 0;

    const price = {
        locks: 45,
        stocks: 30,
        berrels: 25
    };

    const data = {
        locks: locks,
        stocks: stocks,
        berrels: berrels
    };

    const sales = data.locks * price.locks + data.stocks * price.stocks + data.berrels * price.berrels;
    let commission = 0;

    document.getElementById('locks-result').textContent = `Locks: ${data.locks}`;
    document.getElementById('stocks-result').textContent = `Stocks: ${data.stocks}`;
    document.getElementById('berrels-result').textContent = `Berrels: ${data.berrels}`;
    document.getElementById('sales-result').textContent = `Total: ${sales}`;

    if (sales > 1800) {
        commission = 0.10 * 1000 + 0.15 * 800 + 0.20 * (sales - 1800);
    } else if (sales >= 1000) {
        commission = 0.10 * 1000 + 0.15 * (sales - 1000);
    } else {
        commission = 0;
    }

    document.getElementById('commission-result').textContent = `Commission: ${commission}`;
}

const dataId = {}

function clearFields() {
    document.getElementById('locks').value = '';
    document.getElementById('stocks').value = '';
    document.getElementById('berrels').value = '';
    document.getElementById('locks-result').textContent = '';
    document.getElementById('stocks-result').textContent = '';
    document.getElementById('berrels-result').textContent = '';
    document.getElementById('sales-result').textContent = '';
    document.getElementById('commission-result').textContent = '';
}
