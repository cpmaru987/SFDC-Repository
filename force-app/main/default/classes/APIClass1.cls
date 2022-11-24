@RestResource(urlMapping = '/Lead/Create')
global class APIClass1
{
	@HTTPPost
    global static String stringdoPost()
    {
		String fieldValue; 
        String fieldName;
        String firstName;
        String lastName;
        String comp;
        //List<String> leadString = new String[3];
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        System.debug('Param is : '+req.params);
        System.debug('Param is : '+req.requestBody);
        String arr = req.requestBody.toString();
        JSONParser parser = JSON.createParser(arr);
       while(parser.nextToken() != null)
        {
            if(parser.getCurrentToken() != JSONTOKEN.END_OBJECT)
            {
                parser.nextValue();
                fieldName = parser.getCurrentName();
                fieldValue = parser.getText();
                if(fieldName == 'First Name')
                {
                    firstName = parser.getText();
                }
                else if(fieldName == 'Last Name')
                {
                    lastName = parser.getText();
                }
                else if(fieldName == 'Company')
                {
                    comp = parser.getText();
                }
            }
        }
        Lead lc = new Lead(FirstName = firstName, LastName = lastName, Company = comp);
        insert lc;
        return lc.Id;  
    }
     
}