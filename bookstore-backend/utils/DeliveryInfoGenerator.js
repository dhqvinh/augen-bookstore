import moment from 'moment';
import { DELIVERY_SERVICES, DATE_FORMAT } from '../constants'
import Utils from '../utils/Utils'

export default class DeliveryInfoGeneratorFactory {
    static createGenerator(deliveryService, cost) {
        let generator = null

        // Creating appropriate generator instance
        switch (deliveryService) {
            case DELIVERY_SERVICES.MOTOBIKE:
                generator = new MotobikeDeliveryInfoGenerator(cost);
                break;
            case DELIVERY_SERVICES.TRAIN:
                generator = new TrainDeliveryInfoGenerator(cost);
                break;
            case DELIVERY_SERVICES.AIRCRAFT:
                generator = new AircraftDeliveryInfoGenerator(cost);
                break;
            default:
                throw new Error('Unknown delivery service: ' + deliveryService)
        }
        return generator;
    }
}

class DeliveryInfoGenerator {
    constructor(deliveryService, cost) {
        this.deliveryService = deliveryService
        this.cost = cost;
    }

    generateInfo() {}

    generateRandomDate() {
        let days = Utils.getRandomInt(1, 10)
        return moment()
            .add(days, 'd')
            .format(DATE_FORMAT)
    }

    getRandomItem(items) {
        let index = Utils.getRandomInt(0, items.length - 1)
        return items[index]
    }
}

class MotobikeDeliveryInfoGenerator extends DeliveryInfoGenerator {
    constructor(cost) {
        super(DELIVERY_SERVICES.MOTOBIKE, cost);
    }

    generateInfo() {
        return {
            driverName: this.generateDriverName(),
            mobilePhone: this.generateMobilePhone(),
            deliveryDate: this.generateRandomDate(),
            deliveryService: this.deliveryService,
            cost: this.cost
        }
    }

    generateDriverName() {
        const ITEMS = ['Oliver', 'Jack', 'Harry', 'Jacob', 'Charlie', 'Thomas', 'George', 'Oscar', 'James']
        return this.getRandomItem(ITEMS)
    }

    generateMobilePhone() {
        const ITEMS = ['123456789', '323456759', '723256789', '721251782', '923235589', '223256729', '733256789']
        return this.getRandomItem(ITEMS)
    }
}

class TrainDeliveryInfoGenerator extends DeliveryInfoGenerator {
    constructor(cost) {
        super(DELIVERY_SERVICES.TRAIN, cost);
    }

    generateInfo() {
        return {
            trainNo: this.generateTrainNo(),
            stationOfArrival: this.generateStationName(),
            dateOfArrival: this.generateRandomDate(),
            deliveryService: this.deliveryService,
            cost: this.cost
        }
    }

    generateTrainNo() {
        const ITEMS = ['4324-222', '2334-122', '3332-123', '1332-124', '5335-123', '6362-163']
        return this.getRandomItem(ITEMS)
    }

    generateStationName() {
        const ITEMS = ['Auckland', 'Penrose', 'Manukau', 'Eden', 'Albert', 'Britomart']
        return this.getRandomItem(ITEMS)
    }
}

class AircraftDeliveryInfoGenerator extends DeliveryInfoGenerator {
    constructor(cost) {
        super(DELIVERY_SERVICES.AIRCRAFT, cost);
    }

    generateInfo() {
        return {
            flightNo: this.generateFlightNo(),
            gateOfArrival: this.generateGate(),
            dateOfArrival: this.generateRandomDate(),
            deliveryService: this.deliveryService,
            cost: this.cost
        }
    }

    generateFlightNo() {
        const ITEMS = ['4324', '2334', '3332', '1332', '5335', '6362']
        return this.getRandomItem(ITEMS)
    }

    generateGate() {
        const ITEMS = ['A', 'B', 'C', 'D', 'E', 'F']
        return this.getRandomItem(ITEMS)
    }
}
