const tUbahWarna = document.getElementById('tUbahWarna');

// menangkap body bisa dengan selector :
// const body = document.getElement.getElementsByTagName('body')[0]
tUbahWarna.onclick = function() {
  // document.body.style.backgroundColor = 'pink';

  // saya akan kasih kelas pink ke dalam body
  // memberi atribute kelas html
  // on/off kan style css (syntax di bawah)
  // document.body.setAttribute('class', 'pink');

  // toggle = ada kelas "hilangkan", ada kelas "tambahkan"
  document.body.classList.toggle('pink');
}

// Membuat tombol menggunakan javascript
const tRandomWarna = document.createElement('button');
const teksTombol = document.createTextNode('Random Warna');
tRandomWarna.appendChild(teksTombol);
tRandomWarna.setAttribute('type', 'button');
tUbahWarna.after(tRandomWarna);

// event backgroun warnanya berubah secara acak
tRandomWarna.addEventListener('click', function() {
  // fungsi pembulatan ada 3 = round, floor, ceil
  const r = Math.round(Math.random() * 255 + 1); //rumus angka 1-255
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


// Slider ---------------------------------------------------
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener('change', function() {
  // Mengambil nilai di elemen input (textfield, radiButton, comboBox, cekBox)
  // console.log(sMerah.value);
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sHijau.addEventListener('change', function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('change', function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


// MENGUBAH WARNA DENGAN CURSOR
document.body.addEventListener('mouseover', function() {
  
})
