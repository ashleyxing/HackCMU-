const fetchWebsite = () => {
    let recipe;
    fetch('https://api.spoonacular.com/recipes/extract?apiKey=6b87762d3baa4f7d911132a401c70e65&url=https://foodista.com/recipe/ZHK4KPB6/chocolate-crinkle-cookies')
        .then((response) => response.json())
        .then((data) => {
            recipe = data;
            console.log(recipe);
            return recipe;
        })
        .catch((error) => console.log("fuck"));
    return recipe;
}

export default fetchWebsite;