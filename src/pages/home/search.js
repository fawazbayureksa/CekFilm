import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../components/axios/AxiosInstance';
import Template from '../../components/Template';

const Search = () => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState([])
    const [dataModal, setDataModal] = useState({})
    const param = useParams()

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        let params = {
            q: param.search
        }
        axiosInstance.get(`auto-complete`, { params }).then(response => {
            setData(response.data.d)
            setDataModal(response.data.d[0])
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setShow(true)
        })
    }

    return (
        <Template>
            <h5 className='font-weight-bold mt-3'>Search : {param.search}</h5>
            <div className='row'>
                {data.length > 0 && data.map((items, i) => (
                    <div className='col-md-3'>
                        <div className='bg-white rounded mr-2 mb-2'>
                            <img
                                style={{ height: 300, borderRadius: 10 }}
                                src={items?.i?.imageUrl}
                                alt={items?.i?.imageUrl}
                                className="d-block w-100"
                            />
                            <p className='font-weight-bold position-absolute ml-3 text-white' style={{ top: "80%" }}>{items.l}</p>
                        </div>
                    </div>
                ))}
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
                        src={dataModal?.i?.imageUrl}
                        alt='card'
                        className="d-block w-100"
                    />
                    <h3 className='font-weight-bold mt-3'>
                        Title : {dataModal.l}
                    </h3>
                </Modal.Body>
            </Modal>
        </Template>
    );
}

export default Search;
