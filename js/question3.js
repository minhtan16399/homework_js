function Quydoi() {
    // input 
    var vndx1 = 23500;
    var usd = +document.getElementById('nhapSoUSD').value;
    // output 
    var vnd = 0;
    // process 
    vnd = usd * vndx1;
    document.getElementById('tienQuyDoi').innerHTML = new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(vnd);
}