import { LightningElement ,api} from 'lwc';
import getCountryRecords from '@salesforce/apex/ShowCountryRecords.getCountryRecords'
export default class ChildComponentForCountryFilter extends LightningElement {
    @api recordcountry;
    @api url
    @api handleClickChangeCountry(){
        console.log('ChildComponentForCountryFilter',JSON.stringify(this.recordcountry));
        this.recordcountry = JSON.parse(JSON.stringify(this.recordcountry));
        console.log('recordcountry@@@',this.recordcountry)
    }
}