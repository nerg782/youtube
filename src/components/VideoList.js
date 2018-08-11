import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import history from '../helpers/history';
import {
  getAllVideos,
} from '../actions/VideoListAction';

class VideoList extends React.Component {

  componentDidMount(){
    this.props.getAllVideos();
  }

  onClickVideo = (id) => (event) =>{
    history.push(`/video/${id}`);
  }

  onLoadMore = (nextPageToken) => (event) =>{
    this.props.getAllVideos(nextPageToken);
  } 

  renderVideoList() {
    return this.props.items.map((item) => (
      <div key={item.id} className="col-3">
        <div className="card Video-Description">
          <div className="card-body">
            <a href="javascript:void(0)" onClick={this.onClickVideo(item.id)}>
            <img className="card-img-top Video" src={item.snippet.thumbnails.high.url} alt="Card image cap" />
            </a>   
            <h6 className="card-title description-Title">{item.snippet.title.substr(0,40)}...</h6>
            <p className="card-text description-Text ">{item.snippet.description.substr(0,100)}...</p>
            <p className="card-text text-small"><small className="text-muted">Published At : {item.snippet.publishedAt.substr(0,10)}</small></p>
          </div>
        </div>
      </div>    
    ));
  }

  render() {
    console.log(this.props.items);
    return (
      <div className="container">
        <div className="row" style={{"backgroundColor":"#fafafa"}}>
          {this.renderVideoList()}
        </div>
        <br />
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

const mapStateToProps = ({ list: { items, pageInfo, nextPageToken }}) => {
  return { items, pageInfo, nextPageToken };
};

const mapDispatchToProps = {
  getAllVideos,
}
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList));