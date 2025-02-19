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
        for (var i = 1; i <= 20; i++) {

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
        for (var i = 1; i <= 14; i++) {
            let divsepcateg = document.createElement("div");
            divsepcateg.className = `categ${i} categ`
            categ.appendChild(divsepcateg);
            let inscateg = document.querySelector(`.categ${i}`)
            let nomcateg = document.createElement("span");
            let imgcateg = document.createElement("img");
            let desccateg = document.createElement("span");
            nomcateg.textContent = data.categories[i].strCategory;
            imgcateg.src = data.categories[i].strCategoryThumb;
            desccateg.textContent = data.categories[i].strCategoryDescription;
            inscateg.appendChild(nomcateg);
            inscateg.appendChild(imgcateg);
            inscateg.appendChild(desccateg);
        }
    })
    .catch((err) => {
        console.error(err);
    });