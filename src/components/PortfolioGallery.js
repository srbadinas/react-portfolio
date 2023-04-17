import PortfolioGalleryImage from "./PortfolioGalleryImage";

export default function PortfolioGallery({ projects, onHandleToggleModal }) {
    const gallery1 = [];
    const gallery2 = [];
    const gallery3 = [];

    let currentGallery = 1;

    [...projects].map((item) => {
        if (currentGallery === 1) {
            gallery1.push(item);
            currentGallery = 2;
            return false;
        }

        if (currentGallery === 2) {
            gallery2.push(item);
            currentGallery = 3;
            return false;
        }

        if (currentGallery === 3) {
            gallery3.push(item);
            currentGallery = 1;
            return false;
        }

        return true;
    });

    return (
        <div className="flex flex-wrap w-full">
            {
                (gallery1 && <div className="flex flex-col w-[100%] md:w-[50%] lg:w-[33.3%]">
                    {
                        gallery1.map((item, i) => {
                            return <PortfolioGalleryImage key={i} id={item.id} projectName={item.name} projectTechnologies={item.technologies} fileName={item.images[0]?.fileName} onHandleToggleModal={onHandleToggleModal} />
                        })
                    }
                </div>)
            }
            {
                (gallery2 && <div className="flex flex-col w-[100%] md:w-[50%] lg:w-[33.3%]">
                    {
                        gallery2.map((item, i) => {
                            return <PortfolioGalleryImage key={i} id={item.id} projectName={item.name} projectTechnologies={item.technologies} fileName={item.images[0]?.fileName} onHandleToggleModal={onHandleToggleModal} />
                        })
                    }
                </div>)
            }
            {
                (gallery3 && <div className="flex flex-col w-[100%] md:w-[50%] lg:w-[33.3%]">
                    {
                        gallery3.map((item, i) => {
                            return <PortfolioGalleryImage key={i} id={item.id} projectName={item.name} projectTechnologies={item.technologies} fileName={item.images[0]?.fileName} onHandleToggleModal={onHandleToggleModal} />
                        })
                    }
                </div>)
            }
        </div>
    );
}