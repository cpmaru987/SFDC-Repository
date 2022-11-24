import { LightningElement ,wire} from 'lwc';
import fatchImage from '@salesforce/apex/AppDev_ProductController.fatchImage';
export default class DisplayImageThumbNail extends LightningElement {
    showImage;
    showImageUrl;
    @wire(fatchImage) wiredImg({data,error}){
        if(data){
            this.showImage = data.Product_Image__c;
            console.log('##', this.showImage);
          
            let startLen = this.showImage.indexOf('src="')+ 5;
            let endLen = this.showImage.indexOf('" ');
            console.log('startLen', startLen + ' EndLen', endLen);
            this.showImageUrl = this.showImage.substring(startLen,endLen);
            this.showImageUrl = this.showImageUrl.replaceAll('&amp;', '&');
            console.log('%%%%',this.showImageUrl)
        }
        else{
            this.error = error;
        }
        //https://ataprojects-dev-ed.develop.file.force.com/servlet/rtaImage?eid=01t5h000007E0NO&feoid=00N5h00000DnGD6&refid=0EM5h000006BHll
    }
}