//Importamos los archivos axios y build.
import {buildCharacter} from "./build.js"
import {axiosCharacter} from "./axios.js"

// Se define el PATCH de la API
const API_URL = 'https://rickandmortyapi.com/api/character';

// Ejecuto el llamado de la función que desencadena el axio.
const data = await axiosCharacter(API_URL)

buildCharacter(data.results)

const toggle = document.getElementById('container');
const main = document.querySelector('main');

toggle.onclick = function() {
toggle.classList.toggle('active');
main.classList.toggle('active');;
}
