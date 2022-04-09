//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
  const choice = document.querySelector('input').value

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("h2").innerText = data.drinks[0].strDrink
        document.querySelector('img').setAttribute("src", data.drinks[0].strDrinkThumb)
        document.getElementById('ing1').innerText = data.drinks[0].strIngredient1
        document.getElementById('ing2').innerText = data.drinks[0].strIngredient2
        document.getElementById('ing3').innerText = data.drinks[0].strIngredient3
        document.getElementById('ing4').innerText = data.drinks[0].strIngredient4
        document.getElementById('ing5').innerText = data.drinks[0].strIngredient5
        document.getElementById('instructions').innerText = data.drinks[0].strInstructions
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}