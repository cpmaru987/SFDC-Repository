public class GetDocumentRecord {
// adding  comment to MyBranch Repository

    @AuraEnabled(Cacheable = true)
    public static List<Document__c> fatchDoucument(){
       return [SELECT Id, Name , File__c, Icon__c FROM Document__c];
    }
}