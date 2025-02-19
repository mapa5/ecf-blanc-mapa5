fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
        let sectionplat = document.querySelector(".random");
        let divplat = document.createElement("div");
        divplat.className = 'plat container'
        sectionplat.appendChild(divplat);
        let plat = document.querySelector(".plat");
        for (let elem in data.meals[0]) {
            switch (elem) {
                case "strMeal":
                    {
                        let nomplat = document.createElement("h2");
                        nomplat.textContent = data.meals[0].strMeal
                        plat.appendChild(nomplat);
                        continue
                    }
                case "strArea":
                    {
                        let descpays = document.createElement("span");
                        descpays.textContent = data.meals[0].strArea;
                        descpays.className = 'pays'
                        plat.appendChild(descpays);
                        continue
                    }
                case "strInstructions":
                    {

                        let recette = document.createElement("span");
                        recette.textContent = data.meals[0].strInstructions;
                        recette.className = 'recette'
                        plat.appendChild(recette);
                        continue
                    }
                case "strMealThumb":
                    {

                        let thumbplat = document.createElement("img");
                        thumbplat.src = data.meals[0].strMealThumb;
                        plat.appendChild(thumbplat);
                        continue
                    }
                case "strYoutube":
                    {
                        let ytlink = document.createElement("iframe");
                        let ytchiant1 = data.meals[0].strYoutube.slice(0, 24)
                        let ytchiant2 = data.meals[0].strYoutube.slice(32)
                        ytlink.src = ytchiant1 + 'embed/' + ytchiant2;
                        plat.appendChild(ytlink);
                        continue
                    }
            }
        }
        for (let i = 1; i <= 20; i++) {

            if (data.meals[0][`strIngredient${i}`] != "") {
                let divingr = document.createElement("div");
                divingr.className = `ingr${i} ingr`
                plat.appendChild(divingr);
                let ingr = document.querySelector(`.ingr${i}`);
                let imgingredient = document.createElement("img");
                let ingredient = document.createElement("span");
                let mesure = document.createElement("span");
                imgingredient.src = `https://www.themealdb.com/images/ingredients/${data.meals[0][`strIngredient${i}`]}-Small.png`;
                ingredient.textContent = data.meals[0][`strIngredient${i}`] + " ";
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



fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((response) => response.json())
    .then((data) => {
        let sectioncateg = document.querySelector(".categories");
        let divcateg = document.createElement("div");
        divcateg.className = 'categdiv container'
        sectioncateg.appendChild(divcateg);
        let categ = document.querySelector(".categdiv");
        for (let i = 1; i <= 14; i++) {
            let divsepcateg = document.createElement("div");
            divsepcateg.className = `categ${i} categ`
            categ.appendChild(divsepcateg);
            let inscateg = document.querySelector(`.categ${i}`)
            let nomcateg = document.createElement("span");
            let imgcateg = document.createElement("img");
            let desccateg = document.createElement("span");
            nomcateg.textContent = data.categories[i].strCategory;
            nomcateg.className = 'nomcateg'
            imgcateg.src = data.categories[i].strCategoryThumb;
            desccateg.textContent = data.categories[i].strCategoryDescription;
            desccateg.className = 'desccateg'

            divsepcateg.addEventListener("click", function() {
                location.href = `categorie.html?c=${data.categories[i].strCategory}`
            })
            inscateg.appendChild(nomcateg);
            inscateg.appendChild(imgcateg);
            inscateg.appendChild(desccateg);
        }
    })
    .catch((err) => {
        console.error(err);
    });


let params = new URLSearchParams(document.location.search);
let c = params.get("c");

if (c != null) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${c}`)
        .then((response) => response.json())
        .then((data) => {
            let sectioncateg = document.querySelector(".categorie");
            let divcateg = document.createElement("div");
            divcateg.className = 'categdiv container'
            sectioncateg.appendChild(divcateg);
            let categ = document.querySelector(".categdiv");
            for (let i = 1; i <= 14; i++) {
                let divsepcateg = document.createElement("div");
                divsepcateg.className = `categ${i} categ`
                categ.appendChild(divsepcateg);
                let inscateg = document.querySelector(`.categ${i}`)
                let nomcateg = document.createElement("span");
                let imgcateg = document.createElement("img");
                let desccateg = document.createElement("span");
                nomcateg.textContent = data.meals[i].strMeal;
                nomcateg.className = 'nomcateg'
                imgcateg.src = data.meals[i].strMealThumb;
                desccateg.textContent = data.meals[i].idMeal;
                desccateg.className = 'desccateg'

                divsepcateg.addEventListener("click", function() {
                    location.href = `meal.html?i=${data.meals[i].idMeal}`
                })
                inscateg.appendChild(nomcateg);
                inscateg.appendChild(imgcateg);
            }
        })
        .catch((err) => {
            console.error(err);
        });
}

let params2 = new URLSearchParams(document.location.search);
let i = params2.get("i");

if (i != null) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${i}`)
        .then((response) => response.json())
        .then((data) => {
            let sectionplat = document.querySelector(".meal");
            let divplat = document.createElement("div");
            divplat.className = 'plat container'
            sectionplat.appendChild(divplat);
            let plat = document.querySelector(".plat");
            for (let elem in data.meals[0]) {
                switch (elem) {
                    case "strMeal":
                        {
                            let nomplat = document.createElement("h2");
                            nomplat.textContent = data.meals[0].strMeal
                            plat.appendChild(nomplat);
                            continue
                        }
                    case "strArea":
                        {
                            let descpays = document.createElement("span");
                            descpays.textContent = data.meals[0].strArea;
                            descpays.className = 'pays'
                            plat.appendChild(descpays);
                            continue
                        }
                    case "strInstructions":
                        {

                            let recette = document.createElement("span");
                            recette.textContent = data.meals[0].strInstructions;
                            recette.className = 'recette'
                            plat.appendChild(recette);
                            continue
                        }
                    case "strMealThumb":
                        {

                            let thumbplat = document.createElement("img");
                            thumbplat.src = data.meals[0].strMealThumb;
                            plat.appendChild(thumbplat);
                            continue
                        }
                    case "strYoutube":
                        {
                            let ytlink = document.createElement("iframe");
                            let ytchiant1 = data.meals[0].strYoutube.slice(0, 24)
                            let ytchiant2 = data.meals[0].strYoutube.slice(32)
                            ytlink.src = ytchiant1 + 'embed/' + ytchiant2;
                            plat.appendChild(ytlink);
                            continue
                        }
                }
            }
            for (let i = 1; i <= 20; i++) {

                if (data.meals[0][`strIngredient${i}`] != "") {
                    let divingr = document.createElement("div");
                    divingr.className = `ingr${i} ingr`
                    plat.appendChild(divingr);
                    let ingr = document.querySelector(`.ingr${i}`);
                    let imgingredient = document.createElement("img");
                    let ingredient = document.createElement("span");
                    let mesure = document.createElement("span");
                    imgingredient.src = `https://www.themealdb.com/images/ingredients/${data.meals[0][`strIngredient${i}`]}-Small.png`;
                    ingredient.textContent = data.meals[0][`strIngredient${i}`] + " ";
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
}

let params3 = new URLSearchParams(document.location.search);
let f = params3.get("f");

if (f != null) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${f}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            data.meals.forEach((mealselem, j) => {
                console.log(mealselem);
                let sectionplat = document.querySelector(".lettermeal");
                let divplat = document.createElement("div");
                divplat.className = `plat${j} plat container`
                sectionplat.appendChild(divplat);
                let plat = document.querySelector(`.plat${j}`);
                for (let elem in mealselem) {
                    switch (elem) {
                        case "strMeal":
                            {
                                let nomplat = document.createElement("h2");
                                nomplat.textContent = mealselem.strMeal
                                plat.appendChild(nomplat);
                                break
                            }
                        case "strArea":
                            {
                                let descpays = document.createElement("span");
                                descpays.textContent = mealselem.strArea;
                                descpays.className = 'pays'
                                plat.appendChild(descpays);
                                break
                            }
                        case "strInstructions":
                            {

                                let recette = document.createElement("span");
                                recette.textContent = mealselem.strInstructions;
                                recette.className = 'recette'
                                plat.appendChild(recette);
                                break
                            }
                        case "strMealThumb":
                            {

                                let thumbplat = document.createElement("img");
                                thumbplat.src = mealselem.strMealThumb;
                                plat.appendChild(thumbplat);
                                break
                            }
                        case "strYoutube":
                            {
                                let ytlink = document.createElement("iframe");
                                let ytchiant1 = mealselem.strYoutube.slice(0, 24)
                                let ytchiant2 = mealselem.strYoutube.slice(32)
                                ytlink.src = ytchiant1 + 'embed/' + ytchiant2;
                                // plat.appendChild(ytlink);
                                break
                            }
                    }
                }
                for (let i = 1; i <= 20; i++) {

                    if (mealselem[`strIngredient${i}`]) {
                        let divingr = document.createElement("div");
                        divingr.className = `ingr${i} ingr`
                        plat.appendChild(divingr);
                        let ingr = document.querySelector(`.plat${j} .ingr${i}`);
                        let imgingredient = document.createElement("img");
                        let ingredient = document.createElement("span");
                        let mesure = document.createElement("span");
                        imgingredient.src = `https://www.themealdb.com/images/ingredients/${mealselem[`strIngredient${i}`]}-Small.png`;
                        ingredient.textContent = mealselem[`strIngredient${i}`] + " ";
                        mesure.textContent = mealselem[`strMeasure${i}`];;
                        ingr.appendChild(imgingredient);
                        ingr.appendChild(ingredient);
                        ingr.appendChild(mesure);
                    } else
                        break
                }
            })
        })
        .catch((err) => {
            console.error(err);
        });
}