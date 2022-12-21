import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import RoutePath from './RoutePath';

const Template = ({ children }) => {

    const [search, setSearch] = useState('')

    const history = useHistory()

    const onSearch = () => {
        history.push(RoutePath.SEARCH.replace(':search', search))
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='container'>
                    <Link to={RoutePath.HOMEPAGE} className="navbar-brand">Cek Film</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"> <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Series</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Movies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Genre</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className="btn bg-white my-2 my-sm-0" onClick={onSearch}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className='container mb-3'>
                {children}
            </div>
        </div>
    );
}

export default Template;
