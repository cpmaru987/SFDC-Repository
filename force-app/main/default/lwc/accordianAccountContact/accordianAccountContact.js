import { LightningElement, api, wire, track} from 'lwc';
import getAccountData from '@salesforce/apex/AccordianAccountContact.getAccountData';
export default class AccordianAccountContact extends LightningElement {
    @track multiple = true;
    @track accounts ;
    @wire(getAccountData)
    wiredAccountss({
        error,
        data
    }) {
        if (data) {
            this.accounts = data;
            console.log('hello= '+data);
            console.log(JSON.stringify(data, null, '\t'));
            
            data.forEach(function (item, key) {
                console.log(key); 
                console.log(item); 
            });
            
        } else if (error) {
            this.error = error;
        }
    }
}