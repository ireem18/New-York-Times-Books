import React , {Component} from 'react';
import './App.css';
import Header from "./components/Header"
import Search from "./components/Search"
import Footer from "./components/Footer"
import BookPage from "./components/BookPage"

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
     books: []
    };
  }
  getBook = async e => {
    const bookName = e.target.elements.bookName.value;
    e.preventDefault();
    const api_call = await fetch
    (`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=R9wSwuuv3M3Y2DGgzxPmrrfwRkxOkKTC`)
    const data = await api_call.json();
    this.setState({ books: data.results.books });
   
  };
  async componentDidMount(){
    const url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=R9wSwuuv3M3Y2DGgzxPmrrfwRkxOkKTC"
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    this.setState({books:data.results.books});
  };
  render(){
    const { books } = this.state;
    return(
      <>
      <Header />
      <Search books={books} setParentState={this.changeState} />
      <BookPage books={books} />
      <Footer />
      </>
    )
  }
  changeState = (changes) => {
    this.setState(changes);
  }
}

export default App;
