import React, { useState } from "react";
// import SpoonacularApi from '../../../node_modules/spoonacular_api';
// let defaultClient = SpoonacularApi.ApiClient.instance;
// Configure API key authorization: apiKeyScheme
const fetchWebsite = () => {
    // let apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
    // apiKeyScheme.apiKey = '6b87762d3baa4f7d911132a401c70e65';
    // apiKeyScheme.apiKeyPrefix = 'Token';
    const { myData, setMyData } = useState(null)
    let apiKey =  '6b87762d3baa4f7d911132a401c70e65';
    // let apiInstance = new SpoonacularApi.RecipesApi();
    let url = "https://foodista.com/recipe/ZHK4KPB6/chocolate-crinkle-cookies"; // String | The URL of the recipe page.
    let opts = {
    'forceExtraction': true, // Boolean | If true, the extraction will be triggered whether we already know the recipe or not. Use this only if information is missing as this operation is slower.
    'analyze': false, // Boolean | If true, the recipe will be analyzed and classified resolving in more data such as cuisines, dish types, and more.
    'includeNutrition': false, // Boolean | Include nutrition data in the recipe information. Nutrition data is per serving. If you want the nutrition data for the entire recipe, just multiply by the number of servings.
    'includeTaste': false // Boolean | Whether taste data should be added to correctly parsed ingredients.
    };
    function fetchData() {
        fetch(
            'https://api.spoonacular.com/recipes/extract?apiKey=6b87762d3baa4f7d911132a401c70e65&url=https://foodista.com/recipe/ZHK4KPB6/chocolate-crinkle-cookies'
        ).then((response) => response.json())
        .then((data) => setMyData(data))
        .catch((error) => console.log("fuck"))
    }
    // apiInstance.extractRecipeFromWebsite(url, opts, (error, data, response) => {
    // if (error) {
    //     console.error(error);
    // } else {
    //     console.log('API called successfully. Returned data: ' + data);
    // }
    // });
}
