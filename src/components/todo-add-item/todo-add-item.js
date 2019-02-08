import React, {Component} from 'react';

import './todo-add-item.css';

export default class TodoAddItem extends Component {
    state = {
        titleLabel: ''
    };

    updateInput = (e) => {
        this.setState({
            titleLabel: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.titleLabel);
        this.setState({
            titleLabel: ''
        })
    };
    render() {
        return (
            <form
                className="todo-add-item d-flex"
                onSubmit={this.onSubmit} >
                <input
                    type="text"
                    onChange={this.updateInput}
                    className="form-control add-input"
                    placeholder="Add new task"
                    value={this.state.titleLabel}/>
                <button className="btn btn-outline-success">Add</button>
            </form>
        )
    }
}