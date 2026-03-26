import './group.css'
import groupAlbum1 from '../../assets/group/nasledie.jpg'
import groupAlbum2 from '../../assets/group/epoha.jpg'
import groupAlbum3 from '../../assets/group/blitzcrig.jpg'
import GroupAlbum from './album'

export default function Albums() {
    return (
        <>
            <h4 className='albums-header'>Альбомы</h4>
            <div className='group-info-albums'>
                <GroupAlbum title="Наследие" year="2022" cover={groupAlbum1}/>
                <GroupAlbum title="Эпоха Империй" year="2023" cover={groupAlbum2}/>
                <GroupAlbum title="Блицкриг" year="2025" cover={groupAlbum3}/>
            </div>
        </>
    )
}