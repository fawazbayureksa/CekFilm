import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axiosInstance from '../../components/axios/AxiosInstance';
import RoutePath from '../../components/RoutePath';
import Template from '../../components/Template';
import Carousel from './components/Carousel';

const Home = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [dataModal, setDataModal] = useState({})
    const [show, setShow] = useState(false)

    useEffect(() => {
        getData()
    }, [page])

    const getData = () => {
        let params = {
            apiKey: process.env.REACT_APP_API_KEY,
            s: 'batman',
            page: page
        }
        axios.get(`${process.env.REACT_APP_BASE_API_URL}`, { params }).then(response => {
            if (page == 1) {
                setData(response.data.Search)
            } else {
                let newList = data.concat(response.data.Search)
                setData(newList)
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const onDetail = (item) => {
        setShow(true)
        setDataModal(item)
    }

    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setPage(page + 1)
        }
    }

    const truncate = str => {
        if (str.length > 20) {
            return str.slice(0, 20) + '...';
        } else {
            return str;
        }
    };

    return (
        <Template>
            <div className='row mt-3'>
                {data.length > 0 && data.map((items, i) => {
                    return (
                        <div className='col-md-3' style={{ cursor: "pointer" }} key={i} >
                            <div className='bg-white rounded mr-2 mb-2 border-EC9700 p-3'>
                                <img
                                    style={{ height: 300, borderRadius: 10 }}
                                    src={items?.Poster}
                                    alt={items?.Poster}
                                    className="d-block w-100"
                                    onClick={() => onDetail(items)}
                                />
                                <Link className='text-dark text-decoration-none' to={RoutePath.DETAIL.replace(":id", items.imdbID)}>
                                    <p className='font-weight-bold'>{truncate(items.Title)}</p>
                                    <p className='font-weight-bold'>{truncate(items.Year)}</p>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Modal
                show={show}
                size='lg'
                onHide={() => setShow(false)}
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <img
                        src={dataModal?.Poster}
                        alt='card'
                        className="d-block w-100"
                    />
                    <h3 className='font-weight-bold mt-3'>
                        Title : {dataModal.Title}
                    </h3>
                </Modal.Body>
            </Modal>
        </Template>
    );
}

export default Home;
