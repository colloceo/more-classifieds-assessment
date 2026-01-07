import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [accountType, setAccountType] = useState('individual');

    useEffect(() => {
        document.body.classList.add('split-mode');
        return () => document.body.classList.remove('split-mode');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Registration data captured! (React Demo)');
    };

    return (
        <div className="split-layout">
            <Link to="/" className="back-link">← Back to Home</Link>

            <div className="visual-side">
                <h1 style={{ fontSize: '4rem', color: 'white' }}>Grow your <br /><span>Business</span> with More</h1>
                <p style={{ fontSize: '1.2rem', marginTop: '1.5rem', opacity: 0.8, maxWidth: '500px' }}>
                    Join Kenya's fastest growing marketplace. Create a seller account today and reach thousands of customers instantly.
                </p>
                <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2rem' }}>10k+</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Active Sellers</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2rem' }}>50k+</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Daily Visitors</p>
                    </div>
                </div>
            </div>

            <div className="form-side animate-fade-in">
                <div style={{ maxWidth: '500px', margin: '0 auto', width: '100%' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Create Seller Account</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Fill in the details below to get started.</p>

                    <form onSubmit={handleSubmit}>
                        <label>Account Type</label>
                        <div className="radio-group">
                            <label className="radio-option">
                                <input
                                    type="radio"
                                    name="accountType"
                                    value="individual"
                                    checked={accountType === 'individual'}
                                    onChange={() => setAccountType('individual')}
                                />
                                <span className="radio-label">Individual</span>
                            </label>
                            <label className="radio-option">
                                <input
                                    type="radio"
                                    name="accountType"
                                    value="company"
                                    checked={accountType === 'company'}
                                    onChange={() => setAccountType('company')}
                                />
                                <span className="radio-label">Company</span>
                            </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">{accountType === 'individual' ? 'Full Name' : 'Company Name'}</label>
                            <input
                                type="text"
                                id="name"
                                placeholder={accountType === 'individual' ? 'Enter your full name' : 'Enter your company name'}
                                required
                            />
                        </div>

                        <div className="responsive-grid" style={{ '--cols': 2, marginBottom: '1.5rem' }}>
                            <div className="form-group" style={{ marginBottom: 0 }}>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="Enter your email address" required />
                            </div>
                            <div className="form-group" style={{ marginBottom: 0 }}>
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="0712345678" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="alerts">Receive alerts via</label>
                            <select id="alerts">
                                <option value="email">Email Only</option>
                                <option value="sms">SMS Only</option>
                                <option value="both">Both Email & SMS</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" placeholder="Confirm your password" required />
                        </div>

                        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                            <input type="checkbox" id="terms" style={{ width: 'auto', marginTop: '0.3rem' }} required />
                            <label htmlFor="terms" style={{ fontSize: '0.85rem' }}>
                                I agree to the <a href="#" style={{ color: 'var(--primary)' }}>Terms of Service</a> and <a href="#" style={{ color: 'var(--primary)' }}>Privacy Policy</a>.
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary">Create Seller Account</button>

                        <div style={{ margin: '2rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>OR CONTINUE WITH</span>
                            <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
                        </div>

                        <div className="social-btns">
                            <button type="button" className="btn btn-secondary">
                                <img src="https://www.google.com/favicon.ico" style={{ width: '20px', marginRight: '10px' }} alt="" aria-hidden="true" />
                                Google
                            </button>
                            <button type="button" className="btn btn-secondary">
                                <img src="https://www.facebook.com/favicon.ico" style={{ width: '20px', marginRight: '10px' }} alt="" aria-hidden="true" />
                                Facebook
                            </button>
                        </div>

                        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            Already have an account? <a href="#" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Log In</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
