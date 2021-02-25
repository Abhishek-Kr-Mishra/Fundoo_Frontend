<template>
    <div class="archiveNotes-container">
        <display v-bind:allNotesData="allTrashNotes"></display>
    </div>
</template>

<script>
import NotesService from '../Services/notesService'
import Display from '../components/Display.vue'
export default {
    components:{
        'display': Display
    },
    data(){
        return{
            allTrashNotes: []
        }
    },
    mounted(){
        this.getTrashNotes()
    },
    methods:{
        getTrashNotes: function(){
            NotesService.getTrashNotes()
            .then((response) => {
                console.log(response)
                this.allTrashNotes = response.data.data.data
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>

<style scoped>
.archiveNotes-container{
    margin-top: 70px;
}
</style>