<template>
    <div class="dashboard-page">
        <app-bar></app-bar>
        <!-- <notes></notes> -->
        <router-view />
    </div>
</template>

<script>
import appBar from './Appbar.vue'
// import Notes from '../components/Notes.vue'
export default {
    components: {
        'app-bar': appBar,
        // 'notes': Notes
    },
    data() {
        return{
            notesData: {
                title: '',
                description: '',
            },
            // Notes
        }
    }
}
</script>

<style scoped>
.note-class{
    position: absolute;
    top:150px;
}
</style>