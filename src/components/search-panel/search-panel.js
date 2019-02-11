import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
    state = {
        term: ''
    };
    searchText = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.searchText(term);
    };
    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="type to search"
                value={this.state.term}
                onChange={this.searchText}
            />
        );
    }
};