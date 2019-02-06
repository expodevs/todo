import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    render() {
        return (
            <div className="btn-group">
                <button type="button"
                        className="btn btn-success">All
                </button>
                <button type="button"
                        className="btn btn-light">Active
                </button>
                <button type="button"
                        className="btn btn-light">Done
                </button>
            </div>
        );
    }
}