import React from 'react';
import {Link} from "react-router-dom";

const BookPage = props => (
<>
{props.books.map((book) => {
  return(
    <div key = {book.rank}>
       <div className="full"style={{backgroundColor:'white',marginTop:"0px"}}>
          <div className="cont" style={{marginTop:"0px"}}>
            <div className="Book-Card">
              <div className="Books-Column" ></div>
              <Link to={{
                    pathname:`/book/${book.rank}`,
                    state:{book:book}
                    }}>
               <img className="img" alt={book.title} src = {book.book_image} />
              </Link>
              </div>
            </div>
          </div>
        </div>
      
  )
}
)}
</>

);

export default BookPage;