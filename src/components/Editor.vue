<template>
   <div id="note-editor">
    <textarea
      :value="activeNoteText"
      @input="editNote"
      class="form-control">
    </textarea>
  </div>
</template>

<script>


export default {
  computed:{
    activeNoteText(){
      return this.$store.state.activeNote.text;
    }
  },
  methods:{
    editNote(event){
      this.$store.dispatch('editNote',event.target.value);
    }
  }
}
</script>