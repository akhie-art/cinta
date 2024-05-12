let jawaban = prompt("Kamu mau enggak jadi pacaraku?: [Mau/Tidak]");

if (jawaban == "mau" || jawaban == "Mau") {
  document.write(`  <div class="stiker">
    <img src="love.gif" alt="" srcset="">
</div>
`);
} else {
  document.write(`<div class="stiker">
 <img src="tolak.gif" alt="" srcset="">
</div>`);
}
