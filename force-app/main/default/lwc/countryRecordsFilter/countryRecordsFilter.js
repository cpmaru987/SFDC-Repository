import { LightningElement ,wire } from 'lwc';
import getCountryRecords from '@salesforce/apex/ShowCountryRecords.getCountryRecords'
import getContentVersion from '@salesforce/apex/ShowCountryRecords.getContentVersion'
export default class CountryRecordsFilter extends LightningElement {
    value = 'All Value';
    options = [];
    countryRecords;
    countries;
    countryId;
    opt = [];
    urlCountry;
    options = [];
   
    handleClick(){
        console.log('chie@@@@@@@@@',this.countries);
        this.template.querySelector("c-child-component-for-country-filter").recordcountry = this.countries;

        this.template.querySelector("c-child-component-for-country-filter").handleClickChangeCountry();
    }
    @wire(getCountryRecords)
    wiredCountry({ data, error }) {
      if (data) {
        this.countryRecords = data;
        this.countries = data;
        console.log('++++++',this.countryRecords);

        
        let country1 = {label:'All Value', value:'All Value'};
            this.options.push(country1);
            for(let i = 0 ; i < this.countryRecords.length ; i++){
                this.countryId= this.countryRecords[i].Id;
            if(this.opt.includes(this.countryRecords[i].Name)){
                continue;
            }
            else{
                this.opt = [...this.opt,
                    this.countryRecords[i].Name
            ]
            }
        }
        for(let i = 0 ; i < this.opt.length ; i++){
            this.options = [...this.options,{
                label:this.opt[i], value:this.opt[i]
        }]
    }
      } else if (error) {
        this.error = error;
      }
      console.log('this.countryRecords : ',this.countryRecords);
    }
handleChangeCountry(event){
    var countryName = event.target.value;
    console.log(this.countries);
    if(countryName != 'All Value'){
        this.countries = this.countryRecords.filter(Country__c =>Country__c.Name.indexOf(countryName) !== -1);
        console.log('countries*********',this.countries);
    }
    else{
        this.countries = this.countryRecords;
    }
        console.log(this.countries);
}
handleContactBtn(event) {
    getContentVersion({ cId: this.countryId })
        .then(result => {
            console.log('resulttt=> ', result);
            
            this.urlCountry = '/sfc/servlet.shepherd/version/download/' + result.Id;
            console.log('urlCountry', this.urlCountry);
            console.log('resultOOOOOOOOOOOOOOO#',this.result);
        })
        .catch(error => {
            this.error = error;
        });
    this.template.querySelector('c-child-component-for-country-filter')?.clearSelectedValue()
    this.template.querySelector("c-child-component-for-country-filter").url = this.urlCountry;
}

}