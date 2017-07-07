<template>
  <div id="notes-list">

    <div id="list-header">
      <h2>Notes</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Notes button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="changeDisplayType('all')"
            :class="{active: displayType === 'all'}">
            All Notes
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="changeDisplayType('favorites')"
            :class="{active: displayType === 'favorites'}">
            Favorites
          </button>
        </div>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes"
          class="list-group-item" href="#"
          :class="{active: activeNote === note}"
          @click="setActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.text.trim().substring(0, 30)}}
          </h4>
        </a>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  data(){
    return{
      displayType:'all',
    }
  },
  computed:{
    activeNote(){
      return this.$store.state.activeNote;
    },
    filteredNotes(){
      if(this.displayType === 'all'){
        return this.$store.state.notes;
      }

      if(this.displayType === 'favorites'){
        return this.$store.state.notes.filter(note => note.favorite);
      }
    }
  },
  methods:{
    changeDisplayType(type){
      this.displayType = type;
    },
    setActiveNote(note){
      this.$store.dispatch('setActiveNote',note);
    }
  }
}
</script>