import React, { Component } from 'react';
import CategoryList from './components/CategoryList';
import NoteList from './components/NoteList';
import NotesRegistrationForm from './components/NoteRegistrationForm';
import './assets/index.css';
import './assets/App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            notes: []
        };
    }

    createNote(title, text) {
        const newNote = { title, text };

        this.setState({
            notes: [...this.state.notes, newNote]
        });
    }

    deleteNote(index) {
        const newNotes = this.state.notes;
        newNotes.splice(index, 1);

        this.setState({
            notes: newNotes
        });
    }

    render() {
        return (
            <section className='content'>
                <NotesRegistrationForm
                    createNote={this.createNote.bind(this)}
                />

                <main className='main-content'>

                    <CategoryList />

                    <NoteList
                        notes={this.state.notes}
                        deleteNote={this.deleteNote.bind(this)}
                    />

                </main>
            </section>
        );
    }
}

export default App;