fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.meals[0].idMeal);




        for (const elem in data.meals[0]) {
            console.log(`${elem}: ${data.meals[0][elem]}`);

            switch (elem) {
                case "strMeal":
                case "strArea":
                case "strInstructions":
                case "strMealThumb":
                case "strYoutube":
            }
        }
        for (var i = 1; i <= 20; i++) {

            
            
            let imgingredient = document.createElement("img");
            imgingredient.src = `https://www.themealdb.com/images/ingredients/${data.meals[0][`strIngredient${i}`]}-Small.png`;
            const imgingr = document.querySelector(".ingr");
            imgingr.appendChild(imgingredient);

            let ingredient = document.createElement("span");
            ingredient.textContent = data.meals[0][`strIngredient${i}`];
            const ingr = document.querySelector(".ingr");
            ingr.appendChild(ingredient);

            let mesure = document.createElement("span");
            mesure.textContent = data.meals[0][`strMeasure${i}`];
            const mes = document.querySelector(".ingr");
            mes.appendChild(mesure);
        }
    })
    .catch((err) => {
        console.error(err);
    });





// <div class="plat">
//    <h2></h2>
//    <figure>
//        <img src="">
//        <figcaption></figcaption>
//    </figure>
//    <figure>
//        <img src="">
//        <figcaption></figcaption>
//    </figure>
//    <div class="ingr">
//        <img src="">
//        <span></span>
//        <span></span>
//    </div>
//    <span></span>
//    <video></video>
// </div>
