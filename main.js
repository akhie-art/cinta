let jawaban = prompt("Kamu mau enggak jadi pacaraku?: [Mau/Tidak]");
alert(jawaban);

if (jawaban=="mau" || jawaban=="Mau") {
    document.write(`  <div class="stiker">
    <img src="love.gif" alt="" srcset="">
</div>
`);
    
}else{
    document.write( `<h1>Beneran gak mau? Kalau kamu gak mau aku gantung diri loooo</h1>`)
   

}