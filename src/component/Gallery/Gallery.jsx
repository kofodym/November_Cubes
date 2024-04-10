import style from '../Gallery/Gallery.module.css'
import GalleryImages from './GalleryImages';

const Gallery = () =>{
    return(
        <div className={style['gallery']}>
        <h2>Our Gallery</h2>
        <p className={style['gallery-img']}>
        <GalleryImages />
        </p>
        </div>
    )
}

export default Gallery;