//elementos del DOM
let contenedor_receta = document.getElementById('contenedor_receta');


fetch('https://api.spoonacular.com/recipes/random?apiKey=0b2469fe99034be2b677a34f75515489')
    .then((response) => {
        return response.json()
    })
    .then((object) => {
        let { title, summary, instructions, extendedIngredients } = object.recipes[0];
        contenedor_receta.innerHTML = ` <h2 class="receta_titulo">${title}</h2>
                                        <h3 class="receta_subtitulo">Si el inglés es un problema, acá esta tu amigo <a href="https://www.google.com/search?q=google+translator&rlz=1C5GCEM_en&oq=google+translator&aqs=chrome..69i57j69i59j69i64.6806j0j4&sourceid=chrome&ie=UTF-8" target="_blank">el traductor de Google</a></h3>
                                        <p class="titulo_ingredientes">Instrucciones</p>
                                        <p class="receta_instructions">${instructions}</p>
                                        <p class="titulo_ingredientes">Ingredientes y cantidades</p>
                                        <ul id="receta_item">`;
        extendedIngredients.forEach(element => {
            let lista = document.getElementById('receta_item');
            let parr = document.createElement('li')
            parr.innerHTML = `<p class="item_receta">${element.name}, ${element.amount}, ${element.unit}</p>`;
            lista.append(parr)
        });
        let powered = document.createElement('h3');
        powered.innerHTML = '<p id="powered>">Powered by <a target="_blank" href="https://spoonacular.com/food-api">spoonacular.com</a></p>'
        contenedor_receta.append(powered)
    });