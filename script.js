window.addEventListener("load",function(e){
    var album  = document.getElementById('album');
    var display = document.getElementById('display');
    var fotos = ["IMAG0554.jpg",
				"IMAG0558.jpg",
				"IMAG0559.jpg",
				"IMAG0561.jpg",
				"IMAG0562.jpg",
				"IMAG0564.jpg",
				"IMAG0565.jpg",
				"IMAG0566.jpg",
				"IMAG0567.jpg",
				"IMAG0568.jpg",
				"IMAG0569.jpg",
				"IMAG0570.jpg",
				"IMAG0571.jpg",
				"IMAG0572.jpg",
				"IMAG0573.jpg",
				"IMAG0574.jpg",
				"IMAG0575.jpg",
				"IMAG0576.jpg",
				"IMAG0577.jpg"];
    
    for(i=0; i<19;i++){
        var foto = new Image();
        foto.src = "images/klein/" + fotos[i];
        foto.style.border = "2px solid #333";
        foto.style.margin = "2px";
        album.appendChild(foto);
        foto.id = i;
        foto.addEventListener("click",function(ev){
            console.log(ev.target.id);
            display.src = "images/groot/" + fotos[ev.target.id];
        });
    }
});
    