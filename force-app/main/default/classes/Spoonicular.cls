public class Spoonicular {
    private static final String spoonicular_Api = 'https://api.spoonacular.com';
    private static final String api_Key = 'ee6fdca65e7e4c6a925f732286136e57';
    public static void getRendomRecipes(){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(spoonicular_Api+'/recipes/random?apiKey='+api_Key);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        System.debug('response code :'+response.getStatusCode());
        // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200) {
            System.debug('Response'+response.getBody());
        }
    }
    public static void getRecipes(String recipeId){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(spoonicular_Api+'/recipes/recipeId/information?apiKey='+api_Key);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        System.debug('response code :'+response.getStatusCode());
        // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200) {
            System.debug('Response'+response.getBody());
        }
    }
    public static void getRecipesByIngredient(String ingredients){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(spoonicular_Api+'/recipes/findByIngredients?apiKey='+api_Key+'&ingredients='+ingredients);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        System.debug('response code :'+response.getStatusCode());
        // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200) {
            System.debug('Response'+response.getBody());
        }
    }
}