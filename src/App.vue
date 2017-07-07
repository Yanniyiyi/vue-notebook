<template>
  <div id="app">
    <Toolbar></Toolbar>
    <NoteList></NoteList>
    <Editor></Editor>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Toolbar from './components/Toolbar'
import NoteList from './components/NoteList'
import Editor from './components/Editor'

export default {
  name: 'app',
  components: {
    Toolbar,
    NoteList,
    Editor
  }
}
</script>
