<template>
    <div class="notes-container">
        <add-notes v-on:addNewNotes="addNewNotes($event)"></add-notes>
        <display-notes v-bind:allNotesData="this.filteredNotes"></display-notes>
        <!-- {{notesData.description}} -->
    </div>
</template>

<script>
import addNotes from '../components/Addnotes.vue'
import NotesService from '../Services/notesService.js'
import displayNotes from'./Display.vue'
export default {
    components:{
        'add-notes': addNotes,
        'display-notes': displayNotes
    },
    data() {
        return{
            notesData:{
                title: '',
                description: ''
            },
            allNotesData: []
        }
    },
    mounted(){
        this.displayNotes()
    },
    methods:{
        addNewNotes: function(newNotes){
            this.notesData.title = newNotes.get('title')
            this.notesData.description = newNotes.get('description')
            console.log(newNotes.get('title')+"Emit One")
            console.log(newNotes.get('description')+"Emit One")
            console.log(this.notesData.description)
            console.log(this.notesData.description)
            this.displayNotes()
        },
        displayNotes: function(){
            NotesService.getNotes()
            .then(response => {
                // console.log(response)
                this.allNotesData = response.data.data.data
                this.allNotesData.reverse()
            })
            .catch(e => {
                console.log(e)
            })
        }
    },
    computed:{
        filteredNotes: function(){
            return this.allNotesData.filter((notes) => {
                return (notes.isArchived === false) && (notes.isDeleted === false)
            })
        }
    }
}
</script>