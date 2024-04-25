import style from '../Gallery/Gallery.module.css'

import G1 from "../../app/assests/images/GalleryImages/G1.svg";
import G2 from "../../app/assests/images/GalleryImages/G2.svg";
import G3 from "../../app/assests/images/GalleryImages/G3.svg";
import G4 from "../../app/assests/images/GalleryImages/G4.svg";
import G5 from "../../app/assests/images/GalleryImages/G5.svg";
import G6 from "../../app/assests/images/GalleryImages/G6.png";
import G7 from "../../app/assests/images/GalleryImages/G7.svg";
import G8 from "../../app/assests/images/GalleryImages/G8.svg";
import G9 from "../../app/assests/images/GalleryImages/G9.svg";
import G10 from "../../app/assests/images/GalleryImages/G10.svg";
import G11 from "../../app/assests/images/GalleryImages/G11.svg";
import G12 from "../../app/assests/images/GalleryImages/G12.svg";
import G13 from "../../app/assests/images/GalleryImages/G13.svg";
import G14 from "../../app/assests/images/GalleryImages/G14.svg";
import G15 from "../../app/assests/images/GalleryImages/G15.svg";
import G16 from "../../app/assests/images/GalleryImages/G16.svg";
import G17 from "../../app/assests/images/GalleryImages/G17.svg";
import G18 from "../../app/assests/images/GalleryImages/G18.svg";
import G19 from "../../app/assests/images/GalleryImages/G19.svg";
import G20 from "../../app/assests/images/GalleryImages/G20.svg";


 export const images = [
   {
     id: 1,
     img: `${G1}`,
     alt: "Image 1",
     name: "Pasta 1",
     category: "Italian 1",
   },
   {
     id: 2,
     img: `${G2}`,
     alt: "Image 2",
     name: "Pasta 2",
     category: "Italian 2",
   },
   {
     id: 3,
     img: `${G3}`,
     alt: "Image 3",
     name: "Pasta 3",
     category: "Italian 3",
    
   },
   {
     id: 4,
     img: `${G4}`,
     alt: "Image 4",
     name: "Pasta 4",
     category: "Italian 4",
   },
   {
     id: 5,
     img: `${G5}`,
     alt: "Image 5",
     name: "Pasta 5",
     category: "Italian 5",
   },
   {
     id: 6,
     img: `${G6}`,
     alt: "Image 6",
     name: "Pasta 6",
     category: "Italian 6",
   },
   {
     id: 7,
     img: `${G7}`,
     alt: "Image 7",
     name: "Pasta 7",
     category: "Italian 7",
   },
   {
     id: 8,
     img: `${G8}`,
     alt: "Image 8",
     name: "Pasta 8",
     category: "Italian 8",
   },
   {
     id: 9,
     img: `${G9}`,
     alt: "Image 9",
     name: "Pasta 9",
     category: "Italian 9",
   },
   {
     id: 10,
     img: `${G10}`,
     alt: "Image 10",
     name: "Pasta 10",
     category: "Italian 10",
   },
   {
     id: 11,
     img: `${G11}`,
     alt: "Image 11",
     name: "Pasta 11",
     category: "Italian 11",
   },
   {
     id: 12,
     img: `${G12}`,
     alt: "Image 12",
     name: "Pasta 12",
     category: "Italian 12",
   },
   {
     id: 13,
     img: `${G13}`,
     alt: "Image 13",
     name: "Pasta 13",
     category: "Italian 13",
   },
   {
     id: 14,
     img: `${G14}`,
     alt: "Image 14",
     name: "Pasta 14",
     category: "Italian 14",
   },
   {
     id: 15,
     img: `${G15}`,
     alt: "Image 15",
     name: "Pasta 15",
     category: "Italian 15",
   },
   {
     id: 16,
     img: `${G16}`,
     alt: "Image 16",
     name: "Pasta 16",
     category: "Italian 16",
   },
   {
     id: 17,
     img: `${G17}`,
     alt: "Image 17",
     name: "Pasta 17",
     category: "Italian 17",
   },
   {
     id: 18,
     img: `${G18}`,
     alt: "Image 18",
     name: "Pasta 18",
     category: "Italian 18",
   },
   {
     id: 19,
     img: `${G19}`,
     alt: "Image 19",
     name: "Pasta 19",
     category: "Italian 19",
   },
   {
     id: 20,
     img: `${G20}`,
     alt: "Image G20",
     name: "Pasta 20",
     category: "Italian 20",
   },
 ];

//Create component
const GalleryImages = () => {
 

    //create image-list method
    const imageList = images.map((item) => {
        return (
            <div key={item.id} className={style['img-item-container']}>
                <img src={item.img} alt={item.alt} className={style['img-item']} />

            </div>)
    })
    return (
        <div className={style['img-grid']}>
            {imageList}
            {/* {images.map((item, id) => <img src={item.img} alt={item.alt}  className={style['img-item']} />)} */}
        </div>
    )
}
//end of component

export default GalleryImages;