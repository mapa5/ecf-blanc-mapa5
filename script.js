fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.meals[0].idMeal);




        for (const elem in data.meals[0]) {
            console.log(`${elem}: ${data.meals[0][elem]}`);
            const sectionplat = document.querySelector(".random");
            let divplat = document.createElement("div");
            divplat.className = 'plat'
            sectionplat.appendChild(divplat);
            const plat = document.querySelector(".plat");

            switch (elem) {
                case "strMeal":
                    let diving = document.createElement("span");
                    diving.className = 'ingr'
                    const divseling = document.querySelector("");
                    divseling.appendChild(diving);

                case "strArea":
                    let = document.createElement("span");
                    .textContent = data.meals[0][`strMeasure${i}`];
                    const = document.querySelector(".ingr");
                    .appendChild();

                case "strInstructions":
                    let = document.createElement("span");
                    .textContent = data.meals[0][`strMeasure${i}`];
                    const = document.querySelector(".ingr");
                    .appendChild();

                case "strMealThumb":
                    let = document.createElement("span");
                    .textContent = data.meals[0][`strMeasure${i}`];
                    const = document.querySelector(".ingr");
                    .appendChild();

                case "strYoutube":
                    let = document.createElement("span");
                    .textContent = data.meals[0][`strMeasure${i}`];
                    const = document.querySelector(".ingr");
                    .appendChild();
            }
        }
        for (var i = 1; i <= 20; i++) {

            if (data.meals[0][`strIngredient${i}`] != "") {
                let divingr = document.createElement("div");
                divingr.className = 'ingr'
                plat.appendChild(divingr);

                const ingr = document.querySelector(".ingr");

                let imgingredient = document.createElement("img");
                let ingredient = document.createElement("span");
                let mesure = document.createElement("span");

                imgingredient.src = `https://www.themealdb.com/images/ingredients/${data.meals[0][`strIngredient${i}`]}-Small.png`;
                ingredient.textContent = data.meals[0][`strIngredient${i}`];
                mesure.textContent = data.meals[0][`strMeasure${i}`];;

                ingr.appendChild(imgingredient);
                ingr.appendChild(ingredient);
                ingr.appendChild(mesure);

            } else
                break
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