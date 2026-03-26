import './book.css'
import BookContainer from './bookContainer'
import ReviewContainer from './reviewContainer'

export default function Book() {
    return (
        <>
            <div className='book-container'>
                <BookContainer/>
                <ReviewContainer/>
            </div>
        </>
    )
}