import React from 'react';
import history from '../helpers/history';

class NavBar extends React.Component {

   searchClick = (id) => (event) =>{
    let param=document.getElementById('searchBar').value;
    if(param){
        history.push(`/search/${param}`);
    }
  };   

    render() {
        return (
        <nav className="navbar navbar-light bg-light">            
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <a className="navbar-brand" href="#">
                            <img src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                            Bootstrap
                        </a>                        
                    </div>
                    <div className="col-md">
                        <form className="form-inline">
                            <div className="input-group">
                            <input id="searchBar" type="search" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                            <div className="input-group-prepend">
                                <button className="input-group-text btn btn-light" onClick={this.searchClick()} id="basic-addon1">@</button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
        )
    }
};

export default NavBar;