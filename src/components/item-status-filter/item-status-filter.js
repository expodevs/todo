import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    buttons = [
        {name: 'all', label: 'All', id: 1},
        {name: 'active', label: 'Active', id: 2},
        {name: 'done', label: 'Done', id: 3},
        {name: 'important', label: 'Important', id: 4}
    ];
    render() {
        const {filter,onSearchChange} = this.props;
        const buttons = this.buttons.map(({name, label, id}) => {
            const isActive = filter === name;
            const classButton = isActive ? ' btn-success' : ' btn-outline-secondary';
            return (
                <button
                    key={id}
                    type="button"
                    className={`btn ${classButton}`}
                    onClick={() => onSearchChange(name)}
                    >{label}
                </button>
            )
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}