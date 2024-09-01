import { BiHeart } from "react-icons/bi";
import { list_gallery, menuicons } from "../../assets/assets";
import PentagonGallery from "../../components/Gallery/PentagonGallery";
import "./Gallery.css";
import {
  CheckBox,
  Favorite,
  FavoriteBorder,
  Preview,
} from "@mui/icons-material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Gallery = () => {
  return (
    <div className="photos">
      <h3 className="project-title">
        Gallery Page
        <div className="underline-project">
          <span></span>
        </div>
      </h3>

      <div className="photos-container">
        <div className="box-photos">
          <div className="photos-list">
            {list_gallery ? (
              list_gallery.map((gallery, index) => (
                <div className="photo-info" key={index}>
                  <div className="photo-lefth">
                    <img src={gallery.image} alt="" className="logo-photo" />
                    <div>
                      <h2 className="photo-title">{gallery.title}</h2>
                      <p>{gallery.description}</p>
                    </div>
                  </div>
                  <div className="photo-right">
                    <p>2024-02-25</p>
                    <div className="photo-reaction">
                      <div className="action">
                        <FavoriteBorder className="preview" /> <p>12.3 k</p>
                      </div>
                      <div className="action">
                        <button className="preview">
                          <Preview />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>Empty Page</>
            )}
          </div>
        </div>

        <div className="box-photos">
          <div>
            <PentagonGallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
