import React, { useState } from "react";
import "./Gallery.css";

const images = [
   { id: 1, src:"https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-simon73-1266810.jpg&fm=jpg", category:"Nature"},
   { id: 2, src:"https://assets.ajio.com/medias/sys_master/root/20240906/qmOv/66daec0b6f60443f315e002e/-473Wx593H-700381307-multi-MODEL.jpg", category:"Art"},
   { id: 3, src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsbmTZu_uMrmJ0z--CrG-o1UIXytu1OCizQ&s", category:"Nature"},
   { id: 4, src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVrq_5GlnVyzzb3LKUPvmoYJrMaQ5nhr8J2x3LvuvHqCxhvyw_qoW4dHnOLccc2feUZFM&usqp=CAU", category:"Nature"},
   { id: 5, src:"https://bernardmarr.com/wp-content/uploads/2024/03/The-Future-Of-Generative-AI-6-Predictions-Everyone-Should-Know-About.webp", category:"Technology"},
   { id: 6, src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZCp7sA5b8H3aFqlgCytZjL8Hj50nT585d_w&s", category:"Technology"},
   { id: 7, src:"https://i.pinimg.com/236x/ba/48/47/ba4847bfeb989ed6a5c6be75d70a1e47.jpg", category:"Art"},
   { id: 8, src:"https://kotart.in/cdn/shop/products/Kotart-Modern-Art-Paintings-for-Living-Room-Bedroom-Home-and-Office-Wall-Decor-Nature-Inspired-Canvas-Painting-for-Home-Decor.jpg?v=1697553781&width=1946", category:"Art"},
   { id: 9, src:"https://imgcdn.stablediffusionweb.com/2024/3/10/8ffbe449-11ee-422f-b182-679693ea3c99.jpg", category:"Technology"},
   { id: 10, src:"https://writingsonthewall.in/cdn/shop/articles/Why-abstract-art-is-beautiful-Writings-On-The-Wall-911.jpg?v=1675103060", category:"Art"},
];

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [modalImage, setModalImage] = useState(null);

    //Filtered images based on category
    const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);


    return(
        <div className="gallery-container">
            <h1>Image Gallery</h1>

            {/* Filter buttons */}
            <div className="filter-buttons">
            {["All", "Nature", "Technology", "Art"].map((category) =>(
                <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "active" : ""}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))}
            </div>

            {/*Image Gallery */}
            <div className="gallery">
                {filteredImages.map((img) => (
                    <img
                    key={img.id}
                    src={img.src}
                    alt={img.category}
                    onClick={() => setModalImage(img.src)}/>
                ))}
            </div>

            {/* Modal Popup */}
            {modalImage && (
                <div className="modal" onClick={() => setModalImage(null)}>
                    <img src={modalImage} alt="Selected"/>
                    <span className="close"> &times;</span>
                    </div>
            )}
        </div>
    );
};

export default Gallery;