public class SampleController {
     
    Public string selectedObj {get;set;}
    public String selectedField {get; set;}
    public string customLabelValue{get;set;}
    Integer i=2;
    public SampleController(){
        customLabelValue = System.Label.Pagination;
    }
     
    Public List<Selectoption> getObjList(){
        List<Schema.SObjectType> objList = Schema.getGlobalDescribe().Values();     
        List<SelectOption> objNames = new List<SelectOption>();
        objNames.add(new SelectOption('','-- Select --'));
        for(Schema.SObjectType obj : objList)
        {   
            if(i<1000){
            objNames.add(new SelectOption(obj.getDescribe().getName(),obj.getDescribe().getLabel()));
            i++;
            }
        }
        objNames.sort();
        return objNames;
    }
     
    public List<SelectOption> getObjectFields() {
        List<SelectOption> fieldNames = new List<SelectOption>();
        if(!String.isBlank(selectedObj)){
            Map<String, Schema.SObjectType> schemaMap = Schema.getGlobalDescribe();
            Schema.SObjectType ObjSchema = schemaMap.get(selectedObj);
            Map<String, Schema.SObjectField> fieldMap = ObjSchema.getDescribe().fields.getMap();
            for (String fieldName: fieldMap.keySet()) 
            {  
                fieldNames.add(new SelectOption(fieldName, fieldMap.get(fieldName).getDescribe().getLabel()));
            }
        }
        return fieldNames;
    }      
}