document.addEventListener("DOMContentLoaded",function(){
    const recipeForm=document.getElementById("recipe-form");
    const recipeList=document.getElementById("recipe-list");

    const recipes=JSON.parse(localStorage.getItem("recipes")) || [];

    function displayRecipes(){
        recipeList.innerHTML="";
        recipes.forEach((recipe,index)=>{
            const recipeCard=document.createElement("div");
            recipeCard.classList.add("recipe-card");
            recipeCard.innerHTML=`
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong></p>
            <p>${recipe.ingredients}</p>
            <button onclick="deleteRecipe(${index})">Delete</button>
            `;

            recipeList.appendChild(recipeCard);
        });
    }

    recipeForm.addEventListener("submit",function(e){
        e.preventDefault();

        const name=document.getElementById("recipe-name").value;
        const ingredients=document.getElementById("recipe-ingredients").value;

        const newRecipe={name, ingredients};
        recipes.push(newRecipe);
        localStorage.setItem("recipes",JSON.stringify(recipes));
        
        displayRecipes();
        recipeForm.reset();
    });

    window.deleteRecipe=function(index){
        recipes.splice(index,1);
        localStorage.setItem("recipes",JSON.stringify(recipes));
        displayRecipes();
    };

    displayRecipes();
});