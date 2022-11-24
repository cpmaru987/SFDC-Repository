public class CurrencyConverterClass {
    public static Decimal convertCurrencyToINR(Decimal eur){
        Decimal inr = 0.0;
        HTTP h = new HTTP();
        HTTPRequest req = new HTTPRequest();
        
        
        req.setEndPoint('https://v6.exchangerate-api.com/v6/c08f721efcb2eb1b23c4d186/latest/USD');
        req.setMethod('GET');
        HTTPResponse res = h.send(req);
        system.debug('res.getBody '+res.getBody());
        Map<String,Object> JsonBody = (Map<String,Object>)JSON.deserializeUntyped(res.getBody());
        system.debug('JsonBody'+JsonBody);
        Map<String,Object> mMap = (Map<String,Object>) JsonBody.get('conversion_rates');
        system.debug('mMap.get'+mMap.get('INR'));
        Decimal conversionRate = (Decimal)mMap.get('INR');
        inr = eur * conversionRate;
        system.debug('inr '+inr);
        
        return inr;
    }
}