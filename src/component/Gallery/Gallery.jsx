import style from '../Gallery/Gallery.module.css'
import GalleryImages from './GalleryImages';

const Gallery = () =>{
    return (
      <div id="gallery" className={style["gallery"]}>
        <h2>Our Gallery</h2>
        <div className={style["gallery-img"]}>
          <GalleryImages />
        </div>
      </div>
    );
}

export default Gallery;