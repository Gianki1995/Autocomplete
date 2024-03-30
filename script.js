const input = document.getElementById("ricerca");
input.addEventListener("keyup", autoComplete);
const risultati = document.getElementById("risultati");

const nomi = [
  "andrea",
  "anna",
  "marco",
  "luca",
  "giovanni",
  "giovanna",
  "chiara",
  "clara",
];

function autocompleteMatch(valore){
    if(valore == "") return []
     const reg = new RegExp(valore)
     return nomi.filter(nome =>{
        if(nome.match(reg)) return nome
     })
}

function autoComplete(input){
    let nomiConsigliati = "";
    const nomi = autocompleteMatch(input.target.value)
    nomi.forEach((nome) => {
      nomiConsigliati += `<li class="hover:bg-gray-200" onclick="seleziona(event)">${nome}</li>`;

    });
    risultati.innerHTML = `<ul>${nomiConsigliati}</ul>`;
}

function seleziona(event){
    risultati.innerHTML = "";
   input.value = event.target.textContent;
}