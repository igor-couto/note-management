import React, { Component } from "react";
import './style.css';
import { ReactComponent as TrashCan } from '../../assets/images/trash-can.svg';

export default class NoteCard extends Component {
    deleteNote() {
        console.log(this.props.index);
        this.props.deleteNote(this.props.index);
    }

    render() {
        return (
            <section className="note-card">
                <header className="note-card_header">
                    <h3 className="note-card_title">{this.props.title}</h3>
                    <TrashCan
                        onClick={this.deleteNote.bind(this)}
                    />
                </header>
                <p className="note-card_text">
                    {this.props.text}
                </p>
            </section>
        );
    }
}