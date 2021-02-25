import axiosService from './axiosService'

class NotesService{
    addNotes(notesData){
        return axiosService.post(`notes/addNotes`,notesData)
    }
    getNotes(){
        return axiosService.get(`notes/getNotesList`)
    }
    updateNotes(updateNotesData){
        return axiosService.post(`notes/updateNotes`, updateNotesData)
    }
    archiveNotes(data){
        return axiosService.post(`notes/archiveNotes`,data)
    }
    getArchiveNotes(){
        return axiosService.get(`notes/getArchiveNotesList`)
    }
    trashNotes(data){
        return axiosService.post(`notes/trashNotes`,data)
    }
    getTrashNotes(){
        return axiosService.get(`notes/getTrashNotesList`)
    }
}
export default new NotesService 