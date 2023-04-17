import { Fade } from 'react-slideshow-image';
export default function ProjectGallery({ images }) {
    return (<>
        {
            images?.length > 1 ? <Fade easing="ease">
                {images.map((img, i) => {
                    return (<div key={i} className="each-slide">
                        <div style={{ backgroundImage: `url('/assets/images/${img.fileName}')`, ...sliderImageStyles }}></div>
                    </div>)
                })}
            </Fade> : <img src={'/assets/images/' + images[0].fileName} alt="Not found."/>
        }

    </>)
};

const sliderImageStyles = {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '367px',
}