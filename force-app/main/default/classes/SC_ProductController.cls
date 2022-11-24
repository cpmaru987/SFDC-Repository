public  class SC_ProductController {
    // Get the Network ID
    // @AuraEnabled
    // public static String getNetworkId() {
    //     System.debug('::Method Called on Load:::');
    //     String networkId = System.Network.getNetworkId();
    //     return String.isNotBlank(networkId) ? networkId : '';
    // }
    
    // // Get the logged in user's ID
    // @AuraEnabled
    // public static String getUserId() {
    //     return UserInfo.getUserId();
    // }
    
    @AuraEnabled
    public static List<Product2> getCategory() {
        return [SELECT Id, Name, Parent_Product__c, Description  FROM Product2
                WHERE Parent_Product__c = NULL
               ];
    }
    // @AuraEnabled
    // public static List<Product2> getSubCategory(Id parentId) {
    //     return [SELECT Id, Name, Parent_Product__c FROM Product2
    //             WHERE Parent_Product__c =: parentId
    //            ];
    // }
    // @AuraEnabled
    // public static product2 getProductDetails(Id parentId) {
    //     return [SELECT Id, Name, ProductCode, Family, ExternalId, DisplayUrl, QuantityUnitOfMeasure, Parent_Product__c FROM Product2
    //             WHERE Parent_Product__c =: parentId
    //            ];
    // }
    // @AuraEnabled
    // public static product2 getProductBreadCrumb(List<Id> parentIds) {
    //     return [SELECT Id, Name, DisplayUrl FROM Product2 WHERE Id IN: parentIds];
    // }
    
    // @AuraEnabled
    // public static Integer getProductCount(Id parentId) {
    //     Integer currentCount = 0;
	//     currentCount = [SELECT Id FROM Product2 WHERE Parent_Product__c =: parentId].size();
    //     Product2 savedCount =  [SELECT Id, Sub_Products_Count__c FROM Product2 WHERE Id =: parentId Limit 1];
    //     if(currentCount != Integer.valueOf(savedCount.Sub_Products_Count__c)){
    //         savedCount.Sub_Products_Count__c = currentCount; 
    //         Update savedCount;  
    //     }
    //     return currentCount;
    // }
    
    
    // @AuraEnabled(Cacheable = true)
    // public static list<Product2> RelatedProducts(String textkey) {
    //     list<Product2> prdList = new list<Product2>();
    //     if(textkey.length() >= 3) {
    //         System.debug('::: Search key :::'+textkey);
    //         textkey = '%' + textkey + '%';
    //         prdList = [SELECT  Id, Name From Product2 WHERE Name LIKE :textkey];
    //     }
    //     System.debug('::: List To Be displayed :::'+prdList);
    //     if(prdList.isEmpty()) {
    //         return null;
    //     }
    //     else{
    //         return prdList; 
    //     }
        
    // }
}