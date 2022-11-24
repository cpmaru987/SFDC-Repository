//Class Name :- AppDev_ProductController
//Description :- Controller For Product2 Funtionality
//Initial Coding :- Chandra Prakash
//Dp Date  :- App dev-21 by Chandra Prakash
public class AppDev_ProductController {
    //Name :- Chandra Prakash
    //Date :- 10/Nov/2022
    //Story :- App-dev 21
    //Description :- To Fatch Image From Product2 Rich Text Type
        @AuraEnabled(Cacheable = true)
        public static Product2 fatchImage(){
            return [SELECT Product_Image__c FROM Product2 Limit 1];
        }
	
}