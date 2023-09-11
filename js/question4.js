function tinhHinhchunhat() {
    // input 
    var canhDai = +document.getElementById('nhapChieuDai').value;
    var canhRong = +document.getElementById('nhapChieuRong').value;
    // output 
    var chuVi = 0;
    var dienTich = 0;
    // process 
    chuVi = (canhDai + canhRong) * 2;
    dienTich = canhDai * canhRong;
    document.getElementById('chuVidienTich').innerHTML = 'Chu vi: ' + chuVi + ' - ' + 'Diện tích: ' + dienTich
}