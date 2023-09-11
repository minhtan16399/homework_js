function tienLuong() {
    // input 
    var tien1gio = 100000;
    var soGio = +document.getElementById('nhapSoGio').value;
    // output 
    var tongLuong = 0;
    // process 
    tongLuong = tien1gio * soGio
    document.getElementById('tinhLuong').innerHTML = tongLuong + ' vnd'
}

