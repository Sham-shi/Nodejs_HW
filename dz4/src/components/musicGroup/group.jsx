import './group.css'
import groupCover from '../../assets/group/radio-tapok.png'
import InfoTable from './infoTable'
import Albums from './albums'

export default function Group() {
    return (
        <>
            <div className="group-container">
                <img className='group-cover' src={groupCover} width="400" height="250" alt="Обложка группы"/>
                <div className="group-info">
                    <InfoTable/>

                    <Albums/>
                </div>
            </div>
        </>
    )
}