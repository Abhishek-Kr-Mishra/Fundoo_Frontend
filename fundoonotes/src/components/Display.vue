<template :key="componentKey">
    <div class="display-page" v-app>
        <v-container style="width:70%">
            <v-layout row wrap>
                <v-flex
                    v-for="notesData in allNotesData" :key="notesData.id"
                >
                    <v-hover v-slot:default="{ hover }" >
                        <v-card
                            outlined
                            elevation="4"
                            width="230px"
                            min-height="175px"
                            class="mt-4 mr-1"
                            rounded="lg"
                        >
                            <div class="d-flex justify-end" v-if="hover">
                                 <v-icon>mdi-pin-outline</v-icon>
                            </div>
                            <div class="textAndDescription"  @click.stop="dialog = true; getUpdateValue(notesData);">
                                <v-card-title>
                                    {{notesData.title}}
                                </v-card-title>
                                <v-card-text>
                                    {{notesData.description}}
                                </v-card-text>
                            </div>
                            <v-card-actions v-if="hover">
                                <icon v-bind:notesData="notesData"></icon>
                                <!-- <v-icon class="mr-4">mdi-bell-plus-outline</v-icon>
                                <v-icon class="mr-4">mdi-account-plus-outline</v-icon>
                                <v-icon class="mr-4">mdi-palette</v-icon>
                                <v-icon class="mr-4">mdi-image-outline</v-icon>
                                <v-icon class="mr-2" v-on:click="archiveNote(notesData)">mdi-package-down</v-icon>
                                <v-icon class="mr-4" v-on:click="trashNote(notesData)">mdi-trash-can-outline</v-icon> -->
                            </v-card-actions>
                        </v-card>
                    </v-hover>
                </v-flex>
            </v-layout>
        </v-container>
        <v-row justify="center">
                <v-dialog
                    v-model="dialog"
                    width="600px"
                >
            <v-card>
                <v-card-title>
                    <v-text-field placeholder="Title" flat solo v-model="updateNotesData.title"/>
                </v-card-title>
                <v-card-text>
                    <v-text-field placeholder="Take a note" flat solo v-model="updateNotesData.description"/>
                </v-card-text>
                <v-card-actions>
                    <div class="close-btn">
                        <v-btn
                            text
                            v-on:click=updateNotes
                        >
                            close
                        </v-btn>
                    </div>
                </v-card-actions>
            </v-card>
        </v-dialog>
        </v-row>
    </div>
</template>

<script>
import Icons from '../components/Icon'
import NotesService from '../Services/notesService'

export default {
    components:{
        'icon': Icons
    },
    data(){
        return{
            updateNotesData: [],
            dialog: false,
            componentKey: 0,
        }
    },
    props:['allNotesData'],

    methods:{
        trashNote: function(notes){
            console.log("notes", notes)
            let data = {
                noteIdList: [notes.id],
                isDeleted: true
            }
            console.log(data)
            NotesService.trashNotes(data)
            .then(response => {
                console.log("archive response",response)
                console.log(notes)
            })
            .catch(e => {
                console.log(e)
            })
        },
        getUpdateValue: function(notes){
            this.updateNotesData.id = notes.id,
            this.updateNotesData.title = notes.title,
            this.updateNotesData.description = notes.description

            console.log(this.updateNotesData)
        },
        updateNotes: function(){
            var formNotesData = new FormData()
            formNotesData.append('noteId', this.updateNotesData.id)
            formNotesData.append('title', this.updateNotesData.title)
            formNotesData.append('description', this.updateNotesData.description)
            
            console.log(formNotesData.get('noteId'))
            console.log(formNotesData.get('title'))
            console.log(formNotesData.get('description'))

            NotesService.updateNotes(formNotesData)

            .then(response => {
                console.log(response)
                this.dialog = false
                this.componentKey += 1
            })
            .catch(e => {
                console.log(e)
                this.dialog = false
            })
        }
    }
}
</script>

<style scoped>
/* .pin-icon{
    position: absolute;
    left: 190px;
} */
.close-btn{
    position: absolute;
    right: 0px;
    bottom: 0px;
}
</style>