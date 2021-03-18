var dataBarang = [
  "buku tulis",
  "pensil",
  "spidol"
];

function tampilBarang() {
  var listBarang.innerHTML = "";

  for (var i = 0; i < dataBarang.length; i++) {
    var btnEdit = "<a href="#" onclick='editBarang('+i+')'>Edit</a>";
    var btnHapus = "<a href="#" onclick='deleteBarang('+i+')'>Hapus</a>";

    listBarang.innerHTML += "<li>" + dataBarang[i] + " [" +btnEdit + " | " +btnHapus+ "]</li>";
  }
}
