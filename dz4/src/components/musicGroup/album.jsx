export default function GroupAlbum({title, year, cover}) {
    return (
        <div className="group-album">
            <img src={cover} width="300" height="300" alt={title}/>
            <div className="album-info">
                <p className="album-title">{title}</p>
                <p className="album-year">{year}</p>
            </div>
        </div>
    )
}