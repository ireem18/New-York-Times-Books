import React from 'react';
import {Link} from 'react-router-dom'

class Book extends React.Component{
    state = {
        activeBook : []
    };
componentDidMount = async () => {
    const book = this.props.location.state.book;
    this.setState({activeBook : book});

};
render(){
return(
    <div>
        {
            this.state.activeBook.length !== 0 && (
                <>
                <div className="active-container">
                    <div className="book-container">
                        <img className = "active-img"
                        src = {this.state.activeBook.book_image}
                        alt = {this.state.activeBook.rank} />
                    </div>
                    <div className = "active-information-container">
                        <h4 className = "title">{this.state.activeBook.title}</h4>
                        <p><b>Author:</b>{this.state.activeBook.author}</p>
                        <p><b>Contributor:</b>{this.state.activeBook.contributor}</p>
                        <p><b>Description:</b>{this.state.activeBook.description}</p>
                        <b>Publisher:</b><span>{this.state.activeBook.publisher}</span>
                    </div>
                </div>
                <Link to = "/">
                    <div className="home-container">
                        <button className = "btn-2" style = {{color:"black",fontSize:"20"}}>
                            Home
                        </button>
                    </div>
                </Link>
                </>
            )
        }
    </div>
)
}
}

export default Book;