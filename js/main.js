function muda_cor(){
    let body = document.getElementById("bg");
    let cores = ["#483D8B", "#2F4F4F", "#006400", "#556B2F", "#A0522D", 
                 "#4B0082", "#8B008B", "#DC143C", "#8B0000", "#A52A2A"]
    let x = Math.floor(Math.random() * 11);

    body.style.backgroundColor = cores[x];
}

function muda_cor_hex(){
    let body = document.getElementById("bg");
    const hex = "0123456789ABCDEF";
    let cor = "#";

    for(let i=0; i<6; i++){
        cor += hex.charAt(Math.floor(Math.random() * hex.length))
    }
    body.style.backgroundColor = cor;
}