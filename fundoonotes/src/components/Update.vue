<template>
    <div class="update-container">
        <v-row justify="center">
        <v-dialog
        v-model="dialog"
        width="600px"
        >
            <v-card>
                <v-card-title>
                    <v-text-field placeholder="Title" flat solo />
                </v-card-title>
                <v-card-text>
                    <v-text-field placeholder="Take a note" flat solo />
                </v-card-text>
            </v-card>
        </v-dialog>
        </v-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>