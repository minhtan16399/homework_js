function tinhGiaTriTB() {
//    input 
var soThuc1 = +document.getElementById('nhapSo1').value;
var soThuc2 = +document.getElementById('nhapSo2').value;
var soThuc3 = +document.getElementById('nhapSo3').value;
var soThuc4 = +document.getElementById('nhapSo4').value;
var soThuc5 = +document.getElementById('nhapSo5').value;
// output 
var giaTriTrungBinh = 0;
// process 
giaTriTrungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
document.getElementById('tinhTB').innerHTML = giaTriTrungBinh
}