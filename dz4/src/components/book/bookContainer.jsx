import './book.css'
import bookCover from '../../assets/book/nizghiy.jpeg'
import annotationText from '../../files/annotation.txt?raw'

export default function BookContainer() {
    return (
        <>
            <div className='book-info-container'>
                <img src={bookCover} width="250" height="400" alt="Обложка книги"/>

                <div className='book-info'>
                    <h3 className='book-title'>Низший</h3>
                    <h3 className='author'>Дем Михайлов</h3>
                    <h4 className='genre'>Роман / Фантастика, Боевая фантастика, Антиутопия</h4>
                    <p className='char-count'>447 160 зн.</p>
                    <h5 className='annotation'>Аннотация</h5>
                    <p className='annotation-text'>{annotationText}</p>
                </div>
            </div>
        </>
    )
}