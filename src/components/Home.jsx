import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="container">
            <Navbar />
            <main className="animate-fade-in">
                <h1>Redefining <span>Marketplaces</span></h1>
                <p className="subtitle">Experience the future of More.co.ke with our premium, modern React redesign concepts.</p>

                <div className="responsive-grid" style={{ '--cols': 2 }}>
                    <div className="glass-card">
                        <h2>Registration Page</h2>
                        <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem' }}>
                            A sleek, split-screen registration flow with modern input treatments and brand integration.
                        </p>
                        <Link to="/register" className="btn btn-primary">View</Link>
                    </div>

                    <div className="glass-card">
                        <h2>Enquiry Page</h2>
                        <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem' }}>
                            A high-end contact and enquiry solution designed for conversion and clarity.
                        </p>
                        <Link to="/enquiry" className="btn btn-primary">View</Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
