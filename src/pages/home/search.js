import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Template from '../../components/Template';
import axios from 'axios';

const Search = () => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState([])
    const [dataModal, setDataModal] = useState({})
    const [page, setPage] = useState(1)
    const param = useParams()

    useEffect(() => {
        getData()
    }, [page])

    const getData = () => {
        let params = {
            apiKey: process.env.REACT_APP_API_KEY,
            s: param.search,
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



    return (
        <Template>
            <h5 className='font-weight-bold mt-3'>Search : {param.search}</h5>
            <div className='row'>
                {data.length > 0 && data.map((items, i) => {
                    return (
                        <div className='col-md-3' style={{ cursor: "pointer" }} key={i} onClick={() => onDetail(items)}>
                            <div className='bg-white rounded mr-2 mb-2'>
                                <img
                                    style={{ height: 300, borderRadius: 10 }}
                                    src={items?.Poster}
                                    alt={items?.Poster}
                                    className="d-block w-100"
                                />
                                <p className='font-weight-bold'>{items.Title}</p>
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

export default Search;
