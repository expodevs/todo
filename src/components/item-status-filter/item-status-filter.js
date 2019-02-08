import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    render() {
        const {visibleAll, visibleDone} = this.props;
        return (
            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={visibleAll}>All
                </button>
                <button type="button"
                        className="btn btn-light">Active
                </button>
                <button
                    type="button"
                    className="btn btn-light"
                    onClick={visibleDone}>Done
                </button>
            </div>
        );
    }
}