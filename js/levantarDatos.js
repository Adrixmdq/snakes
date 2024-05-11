function leerArchivoJSON(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al leer el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            return data; // Retorna los datos del archivo JSON
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Ejemplo de uso
let url = './datos/inflacion.json';
leerArchivoJSON(url)
    .then(datos => {
       window.inflacion = datos
    });
url = './datos/sueldoVariacion.json';
 leerArchivoJSON(url)
    .then(datos => {
        // las dejo en una variable global
        window.sueldo =datos
    });
