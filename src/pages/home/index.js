import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import axiosInstance from '../../components/axios/AxiosInstance';
import Template from '../../components/Template';
import Carousel from './components/Carousel';
import Latest from './components/Latest';

const Home = () => {

    const [dataAction, setDataAction] = useState([])
    const [dataLatest, setDataLatest] = useState([])
    const [dataModal, setDataModal] = useState({})
    const [show, setShow] = useState(false)

    useEffect(() => {
        getData()
        getDataAction()
    }, [])

    const getData = () => {
        let params = {
            q: 'av'
        }
        axiosInstance.get(`auto-complete`, { params }).then(response => {
            setDataLatest(response.data.d)
            setDataModal(response.data.d[1])

        }).catch(error => {
            console.log(error);
        }).finally(() => (
            setShow(true)
        ))
    }
    const getDataAction = () => {
        let params = {
            q: 'action'
        }
        axiosInstance.get(`auto-complete`, { params }).then(response => {
            setDataAction(response.data.d)
        }).catch(error => {
            console.log(error);
        })
    }


    return (
        <Template>
            <div className='mt-3'>
                <Carousel />
            </div>
            <div className='my-3'>
                <h3>Latest</h3>
                <Latest data={dataLatest} />
            </div>
            <div className='my-3'>
                <h3>Action</h3>
                <Latest data={dataAction} />
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

export default Home;
