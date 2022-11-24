public class GetAccountUsingRESTAPI {
    
    public class deserializeResponse
    {
        public String id;
        public String access_token;
    }
    public static String ReturnAccessToken()
    {
          String clientId = '3MVG9wt4IL4O5wvL9JIhI30HzoL3BTYyduuNjr_TcJX9fU9hwyRyNQefzPXB5bdWPj6eO.aTl6A.vc3JHHsXQ';
          String clientSecret = '0AAC6CB7A113A8CFA6893E309F52F65D0B27259B5CC62B3CEA3DF0A48F177004';
          String username = 'marucp@gmail.com';
          String password = 'chandubhai123';
        String reqbody = 'grant_type=password' + '&client_id='+clientId +
            '&client_secret='+clientSecret + '&username='+username + '&password='+password;
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setBody(reqbody);
        req.setMethod('POST');
        req.setEndpoint('https://login.salesforce.com/services/oauth2/token');
        HttpResponse res = h.send(req);
        deserializeResponse response = (deserializeResponse)JSON.deserialize(res.getbody(),deserializeResponse.class);
        system.debug('@@@@access_token@@'+response );
        return response.access_token;
    }
    public static String callGetAccount()
    {
        String accessToken = GetAccountUsingRESTAPI.ReturnAccessToken();
        String endPoint = 'https://ibirdsservices-9c-dev-ed.my.salesforce.com/services/apexrest/v1/getAccounts/';
        Http h2 = new Http();
        HttpRequest req1 = new HttpRequest();
        req1.setHeader('Authorization','Bearer ' + accessToken);
        req1.setHeader('Content-Type','application/json');
        req1.setHeader('accept','application/json');
        req1.setMethod('GET');
        req1.setEndpoint(endPoint);
        HttpResponse res1 = h2.send(req1);
        JSONParser parser = JSON.createParser(res1.getBody());
        system.debug('res1.getBody'+res1.getBody());      
        return res1.getBody();
    }
}