import { LightningElement, track, wire } from 'lwc';
import IMAGES from "@salesforce/resourceUrl/EMIcons";
import FORM_FACTOR from '@salesforce/client/formFactor';
import fatchDoucument from '@salesforce/apex/GetDocumentRecord.fatchDoucument';
export default class SC_SearchDocumnetLWC extends LightningElement {

    handleSearchClick() {
        console.log('On Search Click');
    }
    resourcePDF = IMAGES + '/PDF_file_icon.svg.png';
    resourcePowerPoint = IMAGES + '/powerpoint.png';
    resourceTextFormat = IMAGES + '/textFormat.png';
    resourceWord = IMAGES + '/word-icon-png-4019.png';
    resourceEXLS = IMAGES + '/xls.png';
    resourceDownload = IMAGES + '/downloadIcon.png';
    resourceSearchIcon = IMAGES + '/searchIcon.png';

    downloadClick(event) {
        console.log('enter a block');
        console.log('link ', event.currentTarget.dataset.link);
        let downloadLink = event.currentTarget.dataset.link;

        window.open(downloadLink, '_blank');
    }
    get isDesktop() {
        return FORM_FACTOR === 'Large';
    }

    documentData;

    @track documentRecords;
    @wire(fatchDoucument)
    alldocumentData({ data, error }) {
        if (data) {
            this.handleIconDisplay(data);
        }
        else {
            this.error = error;
        }
    }

    handleIconDisplay(documents) {
        let documentArray = [];
        documents.forEach(element => {

            let fileType = element.Icon__c;
            let item = {
                Name: element.Name,
                fileLink: element.File__c,
                Icon: (fileType === 'Pdf' ? this.resourcePDF :
                    (fileType === 'Word' ? this.resourceWord :
                        (fileType === 'Txt' ? this.resourceTextFormat :
                            (fileType === 'PPT' ? this.resourcePowerPoint : this.resourceEXLS)))),
            };

            documentArray.push(item);
        });
        this.documentData = documentArray;
        console.log("DocumentArray :: ", this.documentData);
    }
}