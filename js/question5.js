function tong2so() {
    // input 
    var soCo2chuSo = +document.getElementById('nhapSo2ChuSo').value;
    var soHangDonVi = 0;
    var soHangChuc = 0;
    // output 
    var tong2So = 0;
    // process 
    soHangChuc = Math.floor(soCo2chuSo / 10);
    soHangDonVi = Math.floor(soCo2chuSo % 10);
    tong2So = soHangChuc + soHangDonVi;
    document.getElementById('tong2KySo').innerHTML = tong2So;
}