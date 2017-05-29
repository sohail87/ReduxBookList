import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {
  render() {
    //console.log(this.props.asdf) // -> 123
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
}

  // it takes in the entire application state as argument
  // whatever we return from this function will show up as props
  // inside of the class component (container)
  //
  // *** this function is the link between REDUX and REACT ***
function mapStateToProps(state){

  // whatever is returned will show up as props
  // inside of BookList
  return {
    //asdf: '123'
    books: state.books
  };
  //whatever is contained within this object
  //is going to be set equal to "this.props"
  // of our component
  //
}

//takes the map state to props function first and the component second,
//returning/exporting a container
// - it takes 2 sets of params ()()
// - the first function 'connect' returns another function and then that returned function is called immediately
export default connect(mapStateToProps)(BookList)


//KEY FACTS
// 1. whenever the application state changes, this container will instantly render with the new list of books
// 2. using 'connect' to create a container, whenever the state changes
//   the object in the state function will be assigned as props to the component
