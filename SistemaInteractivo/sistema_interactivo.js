// Add an event listener to the form with id 'myForm' for the submit event
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get the value from the input with id 'namee' and remove whitespace
    const namee = document.getElementById('namee').value.trim();
    // Get the value from the input with id 'age' and remove whitespace
    const ageInput = document.getElementById('age').value.trim();

    // Convert the age input to an integer
    const age = parseInt(ageInput);

    // If the age is not a valid number or less than or equal to zero, show an alert
    if (isNaN(age) || age <= 0) {
        alert("Edad no válida. Por favor, ingresa un número positivo.");
        // If the age is 18 or older, show a message for adults
    } else if (age >= 18) {
        alert(`Hola ${namee}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
        // If the age is less than 18, show a message for minors
    } else {
        alert(`Hola ${namee}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
    }
});