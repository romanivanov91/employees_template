import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearchPanel = (e) => {
        const inputValue = e.target.value;
        this.setState({term: inputValue});
        this.props.onUpdateSearch(inputValue);
    }

   render() {
    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearchPanel}/>
    )
   }
}

export default SearchPanel;