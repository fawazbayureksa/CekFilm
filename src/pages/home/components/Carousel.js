import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import axiosInstance from '../../../components/axios/AxiosInstance';

let Style = () => (
    <style>{`
    .background-image {
        height: 500px;
        width: 100%;   
        object-fit: cover;   
      }
    `}</style>
)

const CarouselComponent = ({ title }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        let params = {
            title: 'game', limit: '5', sortArg: 'asc'
        }
        axiosInstance.get(`title/v2/find`, { params }).then(response => {
            setData(response.data.results)
        }).catch(error => {
            console.log(error);
        })
    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <Carousel>
                <Style />
                {data?.length > 0 && data.map((item, index) => (
                    <Carousel.Item interval={1000}>
                        <img
                            style={{ borderRadius: 10 }}
                            className="w-100 background-image "
                            src={item.image.url}
                            alt={item.image.url}
                        />
                        <Carousel.Caption>
                            <h3 className='text-dark font-weight-bold bg-white rounded' >{item?.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default CarouselComponent;
