import { validateFields } from './validator.js';
import { generateSHA256Hash } from './generateHash.js';

// Hash predefinido para 'admin123*'
const STORED_HASH = '0208788aa2035cd5be6697efbd285df1afa881c8fd25e4bd5bbb247c29c58454';

// Verificación inicial
// console.log('Verificación inicial:');
// console.log('Hash esperado para "admin123*":', STORED_HASH);
// console.log('Hash generado para "admin123*":', CryptoJS.SHA256('admin123*').toString());

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!validateFields(username, password)) return;
    
    console.log('Contraseña recibida:', JSON.stringify(password));
    console.log('Hash directo de CryptoJS:', CryptoJS.SHA256(password).toString());
    const passwordHash = generateSHA256Hash(password);
    console.log('Hash generado:', passwordHash);
    console.log('Hash almacenado:', STORED_HASH);
    
    if (passwordHash === STORED_HASH) {
        console.log('Login exitoso');
        document.getElementById("alert").innerText = 'Login exitoso!!';
        document.getElementById("alert").style.color='lightgreen';
    } else {
        console.log('Credenciales incorrectas');
        alert(`Credenciales incorrectas. Hash generado: ${passwordHash}`);
        document.getElementById("alert").innerText = 'contraseña incorrecta :(';
        document.getElementById("alert").style.color='red';
    }
});