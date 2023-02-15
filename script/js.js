var img = [];
for (var i = 0; i < 5; i++) {
    img[i] = new Image();
    img[i].src = "" + i + ".JPG";
    let index = 0 ;
    function pre() {
        index--;
        if (index < 0) {
            index = img.length - 1;
        }
        var anh = document.getElementById('anh');
    }
    // nút next
    function next() {
        index++;
        if (index >= img.length) {
            index = 0;
        }
        var anh = document.getElementById('anh');
        anh.src = img[index].src;
        thongbao.innerHTML = "Ảnh " + index + " / " + img.length;    
    }
    /imges/banner_1.jpeg

