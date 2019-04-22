import React from 'react';

class SearchBar extends React.Component{

state = {inputSearchText : ''}

    onFormSubmit = (e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.inputSearchText);
        this.setState({inputSearchText : ''});
    }

    render(){
        return(
            <div>
                    <form onSubmit = {this.onFormSubmit}>
                    <div className="card">
                    <label htmlFor="SearchInput">Search A video</label>
                    <div className="row card-body">
                    <br/>
                    <div className="col-10">
                    <input value={this.state.inputSearchText} onChange={e => this.setState({inputSearchText:e.target.value})} type="text" className="form-control" id="SearchInput" placeholder="Search Youtube Video ..."/>
                    </div>
                    <div className="col-2">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    </div>
                    </div>
                    </form>
            </div>
        )
    }
}
export default SearchBar;