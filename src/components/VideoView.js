import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getComments,
} from '../actions/VideoViewAction';

class VideoList extends React.Component {

  componentDidMount(){
    let videoId= this.props.match.params.videoId;
    console.log(videoId);
    
    this.props.getComments(videoId,null);
  }

  onLoadMore = (videoId,nextPageToken) => (event) =>{
    this.props.getComments(videoId,nextPageToken);
  } 

  renderCommentList() {
  
    return this.props.items.map((item) => {
      let snippet = item.snippet.topLevelComment.snippet;
      console.log(snippet);
      let text = document.createElement( 'html' );
      text = snippet.textDisplay;
      
      return (
      <div class="card" key={this.props.items.id} style={{"border":"none"}}>
        <div class="card-body">
          <div class="comment mb-2 row">
              <div class="comment-avatar col-md-1 col-sm-2 text-center pr-1">
                  <a href=""><img class="mx-auto rounded-circle img-fluid" src={snippet.authorProfileImageUrl} alt="avatar" /></a>
              </div>
              <div class="comment-content col-md-11 col-sm-10">
                  <h6 class="small comment-meta"><a href="#">{snippet.authorDisplayName}</a> {snippet.publishedAt.substr(0,10)}</h6>
                  <div class="comment-body">
                      <p>
                        {text}
                      </p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  });
}

  render() {
    let videoId = this.props.match.params.videoId;
    return (
      <div className="container" style={{"background-color":"#ffffff"}}>
        <div className="row">
          <div className="col-md-12 col-sm-12">
              <div class="embed-responsive embed-responsive-21by9">
                  <iframe class="embed-responsive-item" style={{"margin-top":"15px"}} src={`https://www.youtube.com/embed/${videoId}?rel=0`} allowfullscreen></iframe>
              </div>
          </div>
          <div class="row">
            <br />
            <div className="col-md-12">
              <hr />
            </div>
            <div class="comments col-md-9 col-sm-5" id="comments">
              <br />
              <h3 class="mb-2" style={{"margin-left":"10px"}}>Comments</h3>
              {this.renderCommentList()}
            </div>
          </div>
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

const mapStateToProps = ({ commentList: { items, pageInfo, nextPageToken }}) => {
  return { items, pageInfo, nextPageToken };
};

const mapDispatchToProps = {
  getComments,
}
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList));