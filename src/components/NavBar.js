import React from 'react';
import history from '../helpers/history';
import img from '../img/YouTube_Logo_2017.svg'

class NavBar extends React.Component {

   searchClick = (id) => (event) =>{
    let param=document.getElementById('searchBar').value;
    if(param){
        history.push(`/search/${param}`);
    }
  };   

    render() {
        return (
        <nav className="navbar navbar-light NavBar">            
            <div className="container">
                <div className="row" style={{"width":"100%"}}>
                    <div className="col-md-3">
                        <a className="navbar-brand" href="#">
                            <img src={img} style={{"width":"60px", "height":"40px"}} className="d-inline-block align-top" alt=""/>
                        </a>                        
                    </div>
                    <div className="col-md-6" style={{"width":"100%"}}>
                        <form className="form-inline">
                            <div className="input-group" style={{"width":"100%"}}>
                            <input id="searchBar" style={{"margin-top":"3px"}} type="search" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                            <div className="input-group-prepend">
                                <button className="input-group-text btn btn-light" style={{"margin-top":"3px"}} onClick={this.searchClick()} id="basic-addon1">Go!</button>
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