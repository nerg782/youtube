import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import history from '../helpers/history';
import {
  getSearchResult,
} from '../actions/SearchAction';

class SearchView extends React.Component {

  componentDidMount(){
    let search = this.props.match.params.search;
    this.props.getSearchResult(search);
  }

  onClickVideo = (id) => (event) =>{
    if (id) {
      history.push(`/video/${id}`);
    }else{
      alert("No podemos reproducirlo, es un canal");
    }
  }

  onLoadMore = (search, nextPageToken) => (event) =>{
    this.props.getSearchResult(search, nextPageToken);
  } 

  renderSearchList() {
    
    return this.props.items.map((item) => {
      console.log(item.id.videoId);
      
      return(
      <div key={item.id} className="col-9">
        <a href="#" style={{"text-decoration":"none", "color":"black"}} onClick={this.onClickVideo(item.id.videoId)}>
        <div className="card">
          <div className="card-body">
              <img className="img-thumbnail mr-2 rounded float-left Video" style={{"width":"200px", "height":"200px"}} src={item.snippet.thumbnails.high.url} alt="Card image cap" />
            <h6 className="card-title mt-1"><b>Title: {item.snippet.title}</b></h6>
            <p className="card-text mt-1">{item.snippet.description}</p>
            <p className="card-text mt-1"><small className="text-muted">Published At : {item.snippet.publishedAt}</small></p>
          </div>
        </div>
        </a>   
      </div>    
    )
    });
  }

  render() {
    console.log(this.props.items);
    return (
      <div className="container">
        <div className="row">
          {this.renderSearchList()}
        </div>
        {
          this.props.pageInfo &&
          this.props.pageInfo.totalResults > this.props.items.length && 
          <div className='row'>
            <div className="col-md-12">
              <button type="button" onClick={ this.onLoadMore(this.props.nextPageToken) } className="btn btn-light">Cargar Más</button>
            </div>
          </div>
        }
      </div>
    )
  };
}

const mapStateToProps = ({ result: { items, pageInfo, nextPageToken }}) => {
  return { items, pageInfo, nextPageToken };
};

const mapDispatchToProps = {
  getSearchResult,
}
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchView));