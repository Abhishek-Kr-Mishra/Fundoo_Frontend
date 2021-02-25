<template>
    <v-container>
        <v-layout row wrap justify-center class="note-input" v-if=!open v-on:click=checkOpen>
            <v-flex xs12 sm12 md5 lg6>
                <v-text-field label="Take Note...." solo dense rounded-lg>
                    <template slot="append">
                    <v-icon>mdi-check-box-outline</v-icon>
                    <v-icon>mdi-brush</v-icon>
                    <v-icon>mdi-image-outline</v-icon>
           </template>
                </v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row justify-center class="note-input" v-if=open>
            <v-flex xs12 sm12 md5 lg7>
                <v-card
                    d-flex flex-column
                    elevation="4"
                    outlined
                    v-click-outside="addNotes"
                >
                <v-text-field placeholder="Title" flat solo v-model="notesData.title">
                    <template slot="append">
                        <v-icon
                            v-on:click=addNotes
                        >mdi-pin-outline</v-icon>
                    </template>
                </v-text-field>
                <v-text-field placeholder="Take a note" flat solo v-model="notesData.description">
                </v-text-field>
                    <v-card-actions>
                        <v-icon class="mr-4">mdi-bell-plus-outline</v-icon>
                        <v-icon class="mr-4">mdi-account-plus-outline</v-icon>
                        <v-icon class="mr-4">mdi-palette</v-icon>
                        <v-icon class="mr-4">mdi-image-outline</v-icon>
                        <v-icon class="mr-4">mdi-package-down</v-icon>
                        <div class="d-flex justify-content-lg-end close-btn">
                            <v-btn
                                text
                                v-on:click="addNotes"
                            >
                                close
                            </v-btn>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import NotesService from '../Services/notesService.js'
export default {
    data() {
        return{
            notesData:{
                title: '',
                description: ''
            },
            open: false
        }
    },
    methods:{
        checkOpen: function(){
            if(!this.open){
                this.open=true
            }
            else{
                this.open=false
            }
        },
        addNotes: function(){
            console.log(this.notesData.title)
            console.log(this.notesData.description)
            var formData = new FormData()
            formData.append('title', this.notesData.title)
            formData.append('description', this.notesData.description)

            NotesService.addNotes(formData)
            .then(response => {
                this.$emit('addNewNotes', formData)
                console.log(response)
                this.reset()
                this.checkOpen()
            })
            .catch(e => {
                console.log(e)
                this.checkOpen()
            })
        },
        reset: function(){
            this.notesData.title = ''
            this.notesData.description = ''
        }
    }
}
</script>

<style scoped>
.note-input{
    margin-top: 90px ;
}
.content{
    margin-left: 350px;
}
.close-btn{
    position: absolute;
    bottom: 0px;
    right: 0px;
}
</style>