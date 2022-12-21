import React from 'react';
import Carousel from 'react-multi-carousel';


const Latest = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div>
            <Carousel responsive={responsive}>
                {props.data.length > 0 && props.data.map((items, i) => (
                    <div className='bg-white rounded mr-2'>
                        <img
                            style={{ height: 300, borderRadius: 10 }}
                            src={items?.i?.imageUrl}
                            alt={items?.i?.imageUrl}
                            className="d-block w-100"
                        />
                        <p className='font-weight-bold position-absolute ml-3 text-white' style={{ top: "90%" }}>{items.l}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Latest;
