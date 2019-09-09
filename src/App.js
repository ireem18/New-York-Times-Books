import React , {Component} from 'react';
import './App.css';
import Header from "./components/Header"
import Search from "./components/Search"
import Footer from "./components/Footer"
import BookPage from "./components/BookPage"

const API_KEY = "R9wSwuuv3M3Y2DGgzxPmrrfwRkxOkKTC";
class App extends Component{
  state = {
     books : []
  }
 
 getBook = async (e) => {
  const bookName = e.target.elements.bookName.value;
  e.preventDefault();
  const api_call = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`)
  const data = await api_call.json();
  //console.log(data.results.books[0].rank)
  this.setState({books : data.results.books})
  //console.log(this.state.books)
 }
 async componentDidMount(){
  const url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=R9wSwuuv3M3Y2DGgzxPmrrfwRkxOkKTC"
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  this.setState({books:data.results.books});
};

  render(){
    
    return(
      <>
      <Header />
      <Search books={this.state.books} setParentState={this.changeState}/>
      <BookPage books = {this.state.books} />
      <Footer />
      </>
    )
  }
  changeState = (changes) => {
    this.setState(changes);
  }

}

export default App;
