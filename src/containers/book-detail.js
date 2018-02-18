import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render(){
    if(!this.props.book){
      return <div>Select a book to show details.</div>
    }
    return(
      <div>{this.props.book.title} - {this.props.book.pages}</div>
    );
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
