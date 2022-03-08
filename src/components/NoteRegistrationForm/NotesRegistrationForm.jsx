import React, { Component } from 'react';
import './style.css';

export default class NotesRegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.title = '';
        this.text = '';
    }

    handleTitleChange(event) {
        event.stopPropagation();
        this.title = event.target.value;
    }

    handleTextChange(event) {
        event.stopPropagation();
        this.text = event.target.value;
    }

    createNote(event) {
        event.preventDefault();
        event.stopPropagation();

        if (this.title !== '' && this.text !== '')
            this.props.createNote(this.title, this.text);
    }

    render() {
        return (
            <form className='registration-form' onSubmit={this.createNote.bind(this)}>
                <input
                    type='text'
                    placeholder='Title'
                    className='registration-form_input'
                    onChange={this.handleTitleChange.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder='Write your note here...'
                    className='registration-form_input'
                    onChange={this.handleTextChange.bind(this)}>
                </textarea>
                <button
                    className='registration-form_input registration-form_submit'>
                    Create Note
                </button>
            </form>
        );
    }
}