import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getSearchResult,
} from '../actions/SearchAction';

class SearchView extends React.Component {

  componentDidMount(){
    let query = this.props.match.params.query;
    
    this.props.getSearchResult(query);
  }

  onClickVideo = (id) => (event) =>{
    console.log(id);
  }

  onLoadMore = (query,nextPageToken) => (event) =>{
    this.props.getSearchResult(query,nextPageToken);
  } 

  renderSearchList() {
    return this.props.items.map((item) => (
      <div key={item.id} className="col-3">
        <div className="card">
          <a href="#" onClick={this.onClickVideo(item.id)}>
          <img className="card-img-top Video" src={item.snippet.thumbnails.high.url} alt="Card image cap" />
          </a>   
          <div className="card-body">
            <h6 className="card-title">{item.snippet.title.substr(0,40)}...</h6>
            <p className="card-text">{item.snippet.description.substr(0,120)}...</p>
            <p className="card-text"><small className="text-muted">Published At : {item.snippet.publishedAt}</small></p>
          </div>
        </div>
      </div>    
    ));
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