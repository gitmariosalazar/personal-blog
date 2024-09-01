import "./PentagonGallery.css";
import { list_gallery } from "../../assets/assets";

const PentagonGallery = () => {
  const gallery = list_gallery;
  console.log(gallery);
  return (
    <div>
      <div className="gallery">
        {gallery ? (
          <>
            {gallery.map((data, index) => (
              <div key={index}>
                <img
                  src={data.image}
                  alt={data.description}
                  className="gallery-image"
                />
              </div>
            ))}
          </>
        ) : (
          <>Not found</>
        )}
      </div>
    </div>
  );
};

export default PentagonGallery;
