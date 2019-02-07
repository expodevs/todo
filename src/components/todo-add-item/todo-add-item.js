import React, {Component} from 'react';

import './todo-add-item.css';

export default class TodoAddItem extends Component {
    state = {
        titleLabel: ''
    };

    updateInput = (val) => {
        this.setState({
            titleLabel: val.target.value
        })

    };
    render() {
        const {onAddItem} = this.props;
        return (
            <div className="todo-add-item d-flex">
                <input type="text" value={this.state.titleLabel} onChange={(val) => this.updateInput(val)} className="form-control add-input" placeholder="Add new task "/>
                <button
                    className="btn btn-outline-success"
                    onClick={() => onAddItem(this.state.titleLabel)}>Add</button>
            </div>
        )
    }
}