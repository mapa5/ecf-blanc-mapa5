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
        for (var i = 20; i >= 1; i--) {
            console.log(
                data.meals[0][`strMeasure${i}`]
            );
        }




    })
    .catch((err) => {
        console.error(err);
    });


// const nouveauDivexe6 = document.createElement("p");
// nouveauDivexe6.textContent = "Nouvel élément créé en JavaScript";
// const conteneurexe6 = document.querySelector(".exe6");
// conteneurexe6.appendChild(nouveauDivexe6);



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