import { LightningElement, wire } from 'lwc';
import showAccountRecords from '@salesforce/apex/GetAccountRecords.showAccountRecords';

export default class ShowAccountRecords extends LightningElement {
    //wire as a property(variable)
    wire(showAccountRecords)
    accountData;
}