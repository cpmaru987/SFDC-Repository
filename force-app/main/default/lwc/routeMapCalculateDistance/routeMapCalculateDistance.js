import { LightningElement, track } from 'lwc';
import IMAGES from "@salesforce/resourceUrl/SiteSamples";
import getRouteFromAtaOrg from '@salesforce/apex/RouteSalesforceConnect.getRouteFromAtaOrg';
const SELECTED_IMAGE_STYLE = 'selectedImage slds-m-horizontal_x-large';
const UNSELECTED_IMAGE_STYLE = 'unselectedImage slds-m-horizontal_x-large';
export default class RouteMapCalculateDistance extends LightningElement {

    startCity;
    endCity;
    @track distance;
    travelSpeed = 80;
    @track travelTime;
    resourceImageCar = IMAGES + '/img/Car.png';
    @track carImageStyle = SELECTED_IMAGE_STYLE;
    resourceImageBike = IMAGES + '/img/Bike.png';
    @track bikeImageStyle = UNSELECTED_IMAGE_STYLE;
    resourceImageHuman = IMAGES + '/img/human.png';
    @track humanImageStyle = UNSELECTED_IMAGE_STYLE;
    resourceImageTrain = IMAGES + '/img/train.png';
    @track trainImageStyle = UNSELECTED_IMAGE_STYLE;

    unselectAll() {

        this.carImageStyle = UNSELECTED_IMAGE_STYLE;
        this.bikeImageStyle = UNSELECTED_IMAGE_STYLE;
        this.humanImageStyle = UNSELECTED_IMAGE_STYLE;
        this.trainImageStyle = UNSELECTED_IMAGE_STYLE;
    }
    getTime() {
        if (this.distance) {
            this.travelTime = parseFloat(this.distance / this.travelSpeed);
            console.log('&&****', this.travelTime);
        }
    }
    handleCarClick() {
        this.unselectAll();
        this.travelSpeed = 80;
        this.getTime();
        this.carImageStyle = SELECTED_IMAGE_STYLE;
    }
    handleBikeClick() {
        this.unselectAll();
        this.travelSpeed = 60;
        this.getTime();
        this.bikeImageStyle = SELECTED_IMAGE_STYLE;
    }
    handleHumanClick() {
        this.unselectAll();
        this.travelSpeed = 3;
        this.getTime();
        this.humanImageStyle = SELECTED_IMAGE_STYLE;
    }
    handleTrainClick() {
        this.unselectAll();
        this.travelSpeed = 90;
        this.getTime();
        this.trainImageStyle = SELECTED_IMAGE_STYLE;
    }

    handleChange(event) {
        if (event.target.label === 'Source City') {
            this.startCity = event.target.value;
            //console.log('startCity',this.startCity);

        }
        else if (event.target.label === 'Destination City') {
            this.endCity = event.target.value;
            //console.log('endCity',this.endCity);
        }
    }

    onHandleClick() {
        console.log('On Search Called');
        getRouteFromAtaOrg({ startCity: this.startCity, endCity: this.endCity })
            .then(result => {

                console.log('On Search result ', result);
                result = JSON.parse(result);
                if (result.isSuccess) {
                    this.distance = result.distance;
                } else {
                    this.error = result.error;
                }
            })
            .catch(error => {

                console.log('On Search error ', error);
                this.error = error;
                this.cityRecords = undefined;
            });
    }

}