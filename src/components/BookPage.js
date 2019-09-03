import React from 'react';
import {Link} from "react-router-dom"


const BookPage = props => (
      <>
      
    {props.books.map((book) => {
      console.log(book)
      return (
        
        <div key={book.rank}>
          <div className="full"style={{backgroundColor:'white'}}>
          <div className="cont">
            <div className="Form-Card">
            <div className="Form-Column" >
              <div>
              <Link to={{
                    pathname:`/book/${book.rank}`,
                    state:{book:book}
                    }}>
               <img className="img" alt={book.title} src = {book.book_image ? book.book_image : ''} />
                </Link>
               </div>
              
                </div>
              </div>
            </div>
          </div >
        
        </div>
      )
    })}
      </>
    );
  
export default BookPage;