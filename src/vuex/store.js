const state = {
	notes: [],
	activeNote: {}
}

const mutations = {
    ADD_NOTE(state){
		const newNote = {
			text: 'New Note',
			favorite: false
		}
		state.notes.push(newNote);
		state.activeNote = newNote;
	},
	EDIT_NOTE(state,text){
		state.activeNote.text = text;
	},
	DELETE_NOTE(state){
		state.notes.$remove(state.activeNote);
	},
	TOGGLE_FAVORITE(state){
		state.activeNote.favorite = !state.activeNote.favorite;
	},
	SET_ACTIVE_NOTE(state,note){
		state.activeNote = note;
	}
}

const actions = {
	addNote(context){
	context.commit('ADD_NOTE');
	},

	editNote(context, text){
		context.commit('EDIT_NOTE', text);
	},

	deleteNote(context){
		context.commit('DELETE_NOTE');
	},

	setActiveNote(context,note){
		context.commit('SET_ACTIVE_NOTE',note);
	},

	toggleFavorite(context){
		context.commit('TOGGLE_FAVORITE');
	},
}

export default {
  state,
  mutations,
  actions
}