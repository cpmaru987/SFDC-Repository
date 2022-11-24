import { LightningElement } from 'lwc';

export default class HelloWord extends LightningElement {
    greeting = 'Word'
    changeHendler(event){
        this.greeting = event.target.value;
    }
}