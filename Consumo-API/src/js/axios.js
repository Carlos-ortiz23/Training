
/**
 * axiosCharacter
 * 
 * Función que se encarga de consumir la API con axios
 * @param {string} API_URL 
 */

export async function axiosCharacter(API_URL) {
    try {
        const response = await axios(API_URL);
        console.log(response);
        return await response.data;
    } catch (error) {
        console.log("Hay un error en la API")
    }
}