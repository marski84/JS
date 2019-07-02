const names = ["Jagienka", "Dobrawa (Dobrusia)", "Daria", "Asia", "Kira", "Marysia", "Anastazja", "Kasia"];

const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"];

const button = document.querySelector('button');
const div = document.querySelector('div');

// let nameIndex = Math.floor(Math.random() * 10);
// let prefixsIndex2= Math.floor(Math.random() * 10);


function generateName() {

    let nameIndex = Math.floor(Math.random() * names.length);
    let prefixsIndex = Math.floor(Math.random() * prefixs.length);
    console.log(nameIndex)

    div.textContent = `${prefixs[prefixsIndex]} że najfajniejsze imię to ${names[nameIndex]}`;
}



button.addEventListener('click', generateName)