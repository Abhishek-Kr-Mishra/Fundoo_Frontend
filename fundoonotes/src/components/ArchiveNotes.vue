<template>
    <div class="archiveNotes-container">
        <display v-bind:allNotesData="allArchiveNotes"></display>
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
            allArchiveNotes: []
        }
    },
    mounted(){
        this.getArchiveNotes()
    },
    methods:{
        getArchiveNotes: function(){
            NotesService.getArchiveNotes()
            .then((response) => {
                console.log(response)
                this.allArchiveNotes = response.data.data.data
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