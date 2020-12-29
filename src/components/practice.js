

const BookList = ({ books }) => (
  <div className="book-list">

  </div>
)

























const BookList = ({ book }) => {
  <div className="book-list">
  </div>
}





class ChildComponent extends Component {
  render() {
    //The wrapping 'div' here has been replaced with a React fragment. now if
    I render two of these components in a parent element's render, they'll
    all appear under the same div (the parent element's div in it's render function).
    return (
      <>
        <p>Hey, I am a child</p>
        <p>My name is child component</p>
      </>
    )
  }
}
