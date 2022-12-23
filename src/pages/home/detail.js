import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const Detail = () => {

    const [data, setData] = useState([])
    const param = useParams()
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        let params = {
            apiKey: process.env.REACT_APP_API_KEY,
            i: param.id,
        }
        axios.get(`${process.env.REACT_APP_BASE_API_URL}`, { params }).then(response => {
            console.log(response.data)
            setData(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2 className='font-weight-bold'>Detail</h2>
                    <div className='bg-white rounded mr-2 mb-2 border-EC9700 p-3'>
                        <img
                            style={{ borderRadius: 10, }}
                            src={data?.Poster}
                            alt={data?.Poster}
                            className="d-block w-100"
                        />
                        <div className='d-flex'>
                            <p className='btn bgc-EC9700 p-1 text-white mr-2 mt-2'>{data.imdbRating}</p>
                            <h3 className='font-weight-bold'>{data.Title}</h3>
                        </div>
                        <p>{data.Plot}</p>
                        <p>{data.Type}</p>
                        <p><strong>Actors :</strong> {data.Actors}</p>
                        <p>{data.Language}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
