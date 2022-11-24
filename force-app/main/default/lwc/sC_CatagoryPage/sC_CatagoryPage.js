import { LightningElement, track } from 'lwc';
import getCategory from '@salesforce/apex/SC_ProductController.getCategory';
import { NavigationMixin } from "lightning/navigation";
import IMAGES from "@salesforce/resourceUrl/EMIcons";
//import getProductData from '@salesforce/apex/SC_ProductController.RelatedProducts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import FORM_FACTOR from '@salesforce/client/formFactor';
import { publish, createMessageContext, releaseMessageContext, subscribe, unsubscribe } from 'lightning/messageService';

export default class SC_CatagoryPage extends NavigationMixin(LightningElement) {
    @track categoryList;
    @track displayList = false;
    @track showSpinner = false;
    @track showSearchButton = false;
    defaultImage = IMAGES + '/scIcon.gif';

    connectedCallback() {
        this.getCategoryIfNull();
    }

    get isDesktop() {
        return FORM_FACTOR === 'Large';
    }

    async getCategoryIfNull() {
        await getCategory({})
            .then((result) => {
                //App Dev 30 changes
                //11/10/22
                this.handleResultToList(result)
            })
            .catch((error) => {
                console.log('error :::::::', error);
            });
    }

    //App Dev 30 changes
    //11/10/22
    handleResultToList(result) {

        // console.log('Result::', JSON.stringify(result))
        this.categoryList = JSON.parse(JSON.stringify(result));
        this.categoryList.forEach(service => {
            if (service.Service_Image__c) {
                let showImage = service.Service_Image__c;
                console.log('##', showImage);

                let startLen = showImage.indexOf('src="') + 5;
                let endLen = showImage.indexOf('" ');
                console.log('startLen', startLen + ' EndLen', endLen);
                service.defaultImage = showImage.substring(startLen, endLen);
                service.defaultImage = service.defaultImage.replaceAll('&amp;', '&');
                console.log('%%%%', service.defaultImage)
            } else {
                service.defaultImage = this.defaultImage;
            }
        });
        this.displayList = JSON.stringify(this.categoryList) === '[]' ? false : true;
    }

    handleCategoryClick(event) {
        // let Id = event.currentTarget.dataset.id;
        // let Name = event.currentTarget.dataset.name;

        // let breadcrumb = [
        //     { Label: 'Service Catalog', page: 'service-catalog-home' },
        //     { Label: Name, page: 'service-subcatalog-home' },
        // ]
        // let subCatelog = [];
        // this.categoryList.forEach(service => {
        //     if (service.Id === Id) {
        //         subCatelog.push(service);
        //     }
        // });
        // console.log('subCatelog', JSON.stringify(subCatelog));
        // localStorage.setItem('SC_BreadCrumb', JSON.stringify(breadcrumb));
        // localStorage.setItem('SC_subCatalog', JSON.stringify(subCatelog));

        // this.navigateToInternalPage();
    }

    // navigateToInternalPage() {
    //     this[NavigationMixin.Navigate]({
    //         type: 'comm__namedPage',
    //         attributes: {
    //             pageName: 'service-subcatalog-home'
    //         }
    //     });
    // }

    handleEnter(event) {
        // if (event.target.value == '') {
        //     this.getCategoryIfNull();
        // }
        // else if (event.target.value.length >= 3) {
        //     this.searchKey = event.target.value;
        //     this.SearchProductHandler();
        // }
    }

    SearchProductHandler() {
        // this.showSpinner = true;
        // console.log(':: Key::', this.searchKey);
        // getProductData({ textkey: this.searchKey })
        //     .then(result => {
        //         console.log('Result', result);
        //         if (result != null && result != undefined) {
        //             //App Dev 30 changes
        //             //11/10/22
        //             this.handleResultToList(result);
        //             this.showSpinner = false;
        //         }
        //         else if (result == null) {
        //             console.log('::Result null');
        //             this.dispatchEvent(
        //                 new ShowToastEvent({
        //                     title: "warning",
        //                     message: "No products found with this search",
        //                     variant: "warning",
        //                     duration: 3000
        //                 })
        //             );
        //             this.showSpinner = false;
        //             this.getCategoryIfNull();
        //         }
        //     })

        //     .catch(error => {
        //         this.accounts = null;
        //     });
    }


}