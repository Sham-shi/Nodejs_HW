import './book.css'
import reviewText1 from '../../files/review1.txt?raw'
import reviewText2 from '../../files/review2.txt?raw'

function ReviewCard({authorName, reviewText}) {
    return  (
        <div className='review-card'>
            <h4 className='review-author'>{authorName}</h4>
            <p className='review-text'>{reviewText}</p>
        </div>
    )
}

export default function ReviewContainer() {
    return (
        <>
            <div className='review-container'>
                <h3 className='review-header'>Рецензии</h3>
                <div className='review-cards'>
                    <ReviewCard authorName="Автор: Татьяна Смирнова" reviewText={reviewText1}/>
                    <ReviewCard authorName="Автор: Алексей" reviewText={reviewText2}/>
                </div>
            </div>
        </>
    )
}