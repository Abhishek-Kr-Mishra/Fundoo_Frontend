<template>
    <div class="icon-page">
        <v-icon class="mr-3">mdi-bell-plus-outline</v-icon>
        <v-icon class="mr-3">mdi-account-plus-outline</v-icon>
        <v-icon class="mr-3">mdi-palette</v-icon>
        <v-icon class="mr-3">mdi-image-outline</v-icon>
        <v-icon class="mr-0" v-on:click="archiveNote(notesData)">mdi-package-down</v-icon>
        <!-- <v-icon class="mr-4" v-on:click="trashNote(notesData)">mdi-trash-can-outline</v-icon> -->
        <!-- <div class="menu-btn"> -->
            <v-btn
              icon
              id="testButton"
              v-on="on"
            >
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            <v-menu top offset-y activator="#testButton">
                <v-list>
                    <v-list-item link>
                        <v-list-item-title>Delete Note</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    <!-- </div> -->
</template>

<script>
import NotesService from '../Services/notesService'
export default {
    data(){
        return{
            items: [
                { title: 'Delete Note' }
            ]
        }
    },
    props:['notesData'],
    methods:{
        archiveNote: function(notes){
            console.log("notes", notes)
            let data = {
                noteIdList: [notes.id],
                isArchived: true
            }
            console.log(data)
            NotesService.archiveNotes(data)
            .then(response => {
                console.log("archive response",response)
                console.log(notes)
                this.componentKey += 1
                console.log(this.componentKey)
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>

<style scoped>

</style>