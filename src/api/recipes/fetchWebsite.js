import axios from 'axios';

const getSubstitute = (websiteData, ingredient) => {
    let name = ingredient.name
    console.log(name)
    console.log(websiteData.substitutes)
    return websiteData.substitutes[name];
};
const getSubstitutes = (websiteData, ingredients) => {
    return ingredients.map((ingredient) => getSubstitute(websiteData, ingredient))
};
const fetchWebsite = async (website) => {
    var websiteData = await axios.get(`http://localhost:3001/${website}`, {
        headers: {
        'Content-Type': 'application/json'
    }})
        .then((response) => response.data)
        .catch((error) => console.log(error));
    var ingredients = websiteData.ingredients;
    var substitutes = getSubstitutes(websiteData, ingredients);
    console.log([ingredients, substitutes])
    return [ingredients, substitutes];
}

export default fetchWebsite;