@RestResource(urlMapping='/Routes/*')
global class RouteWebService {
    @HttpGet
    global static Result getRouteDistance() {     
        Result result = new Result('', False, '0');
        RestRequest request = RestContext.request;
        Map <String,String> headerMap = request.headers;
        String startCity = (headerMap.containsKey('City1')? headerMap.get('City1') : NULL );
        String endCity = (headerMap.containsKey('City2')? headerMap.get('City2') : NULL );
        if(startCity <> NULL && endCity <> NULL){
            Route__c soqlResult =  new Route__c();
            soqlResult = [SELECT Name, City_2__c, Distance__c 
                          FROM Route__c 
                          WHERE Name =: startCity AND City_2__c =: endCity limit 1];
            if(soqlResult <> NULL){
                result.isSuccess = True;
                result.distance = soqlResult.Distance__c + '';
            }
        }else{
            result.error = 'Please re-check the City Searched';
        }
        //Distance ? City1 to city2
        List<Route__c> results =  [SELECT Name, City_2__c, Distance__c 
                                   FROM Route__c];
        return result;
    }
    
    global class Result{
        String error;
        Boolean isSuccess;
        String distance;
        Result(String err, Boolean flag, String dis){
            this.error = err;
            this.isSuccess = flag;
            this.distance = dis;
        }
    }
}