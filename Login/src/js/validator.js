export function validateFields(username, password) {
    if (!username || !password) {
        console.error('Error: Ambos campos son requeridos');
        return false;
    }
    return true;
}