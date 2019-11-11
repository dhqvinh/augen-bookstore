<template>
    <div class="modal fade" id="messageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Message</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div v-if="message" class="modal-body">
                    <div v-if="message.deliveryService === 'M'">
                        <div>Driver name: {{message.driverName}}</div>
                        <div>Mobile: {{message.mobilePhone}}</div>
                        <div>Delivery date: {{message.deliveryDate}}</div>
                        <div>Cost: {{message.cost}}</div>
                    </div>
                    <div v-if="message.deliveryService === 'T'">
                        <div>Train no: {{message.trainNo}}</div>
                        <div>Station of arrival: {{message.stationOfArrival}}</div>
                        <div>Date of arrival: {{message.dateOfArrival}}</div>
                        <div>Cost: {{message.cost}}</div>
                    </div>
                    <div v-if="message.deliveryService === 'A'">
                        <div>Flight no: {{message.flightNo}}</div>
                        <div>Gate of arrival: {{message.gateOfArrival}}</div>
                        <div>Date of arrival: {{message.dateOfArrival}}</div>
                        <div>Cost: {{message.cost}}</div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ConfirmModal",
    props: {
        message: Object
    }
}
</script>

<style scoped>

</style>
