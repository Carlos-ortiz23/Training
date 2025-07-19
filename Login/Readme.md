# Login Project

This project is a simple login page built to help you learn about modern web development using HTML, CSS, and JavaScript modules.  
Below you’ll find a detailed explanation of what each part does, so you can understand and learn from your own code.

---

## What does this project do?

- Shows a login form where users can enter a username and password.
- Uses **CryptoJS** to hash (encrypt) the password before checking it.
- Checks if the entered password matches a pre-defined (hashed) password.
- Gives feedback if the login is successful or if the credentials are incorrect.
- Has a modern, responsive design with a background image and styled form.

---

## How is it structured?

### 1. **HTML (`index.html`)**

- **Header:** Loads styles and the CryptoJS library for password hashing.
- **Main Content:**  
  - Shows an image on the left and the login form on the right.
  - The form asks for a username and password.
  - There’s a logo at the top and a footer with a registration link.
- **Scripts:**  
  - Loads the main JavaScript module (`main.js`) at the end.

### 2. **CSS (`styles.css`)**

- **Body and Layout:**  
  - Uses Flexbox to center the login box on the page.
  - The main area is split into two: an image and the login form.
  - Rounded corners and shadows give a modern look.
- **Form and Inputs:**  
  - Inputs and buttons have gradients and smooth transitions.
  - The login button changes color and size when hovered or clicked.
- **Responsive Design:**  
  - The layout uses relative units, added function in css to adapt to any screen type.

### 3. **JavaScript Modules**

- **`main.js`:**  
  - Handles the login form submission.
  - Gets the username and password from the form.
  - Uses `validateFields` to check that both fields are filled.
  - Hashes the password using `generateSHA256Hash`.
  - Compares the hash to a stored hash (for the password `admin123*`).
  - Shows alerts for success or failure.

- **`generateHash.js`:**  
  - Exports a function to hash a password using SHA-256 with CryptoJS.

- **`validator.js`:**  
  - Exports a function to check that both username and password are not empty.

---

## What did you learn by building this?

- **How to structure a login page** with HTML and CSS.
- **How to use JavaScript modules** to organize your code.
- **How to hash passwords** in the browser for basic security (never store plain passwords!).
- **How to use external libraries** (like CryptoJS) in your project.
- **How to give user feedback** with alerts and console logs.
- **How to style forms and buttons** for a modern look.

---

## How to use this project

1. Download or clone the repository.
2. Open `index.html` in your browser.
3. Try logging in with any username and the password `admin123*` (this is the only password that works).
4. If you enter the correct password, you’ll see a success message. Otherwise, you’ll get an error.

---

## Notes

- This project is for learning purposes.  
- In real applications, password checking should always be done on the server, not in the browser.
- You can expand this project by adding registration, better validation, or connecting to a backend.

---

**Happy coding and keep learning!**