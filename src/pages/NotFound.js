import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-card">
                <h1 className="code">404</h1>
                <h2 className="title">Page not Found</h2>
                <p className="desc">The address you are trying to access does not exist or has expired.</p>

                <Link to="/" className="home-btn">
                    Back To Home Page
                </Link>

            </div>
        </div>
    );
};

export default NotFoundPage;