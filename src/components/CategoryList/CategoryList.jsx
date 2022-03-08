import React, { Component } from 'react'
import './style.css'

export default class CategoryList extends Component {

    handleKeyboardInput(event) {
        if (event.key === 'Enter')
            this.addCategory();
    }

    addCategory() {

    }

    render() {
        return (
            <section className='category'>
                <ul className='category-list'>
                    <li className='category-list_item'> Category 1 </li>
                    <li className='category-list_item'> Category 2 </li>
                </ul>
                <input
                    className='category-list_item'
                    type='text'
                    placeholder='Add Category'
                    onKeyUp={this.handleKeyboardInput.bind(this)} />
            </section>
        );
    }
}