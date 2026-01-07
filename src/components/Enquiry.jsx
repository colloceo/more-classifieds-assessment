import React, { useState, useRef } from 'react';
import Navbar from './Navbar';

const Enquiry = () => {
    const [priority, setPriority] = useState('low');
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your enquiry has been received. (React Demo)');
    };

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <div className="container">
            <Navbar />
            <main className="enquiry-container animate-fade-in">
                <div className="glass-card">
                    <h1>Send an <span>Enquiry</span></h1>
                    <p className="subtitle">Have questions? Our team is here to help you scale your business.</p>

                    <form onSubmit={handleSubmit}>
                        <div className="responsive-grid" style={{ '--cols': 2, marginBottom: '1.5rem' }}>
                            <div className="form-group" style={{ marginBottom: 0 }}>
                                <label>Department</label>
                                <select id="department">
                                    <option value="sales">Sales & Business</option>
                                    <option value="support">Technical Support</option>
                                    <option value="billing">Billing & Payments</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group" style={{ marginBottom: 0 }}>
                                <label>Country</label>
                                <select id="country">
                                    <option value="kenya">Kenya</option>
                                    <option value="uganda">Uganda</option>
                                    <option value="tanzania">Tanzania</option>
                                    <option value="rwanda">Rwanda</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Enquiry Subject</label>
                            <input type="text" placeholder="Enter your enquiry subject" required />
                        </div>

                        <label>Priority Level</label>
                        <div className="priority-pills">
                            {['low', 'medium', 'high'].map((level) => (
                                <div
                                    key={level}
                                    className={`priority-pill ${priority === level ? 'active' : ''}`}
                                    data-level={level}
                                    onClick={() => setPriority(level)}
                                >
                                    {level.charAt(0).toUpperCase() + level.slice(1)}
                                </div>
                            ))}
                        </div>

                        <div className="form-group">
                            <label>Detailed Message</label>
                            <textarea rows="5" placeholder="Enter your detailed message here..." required></textarea>
                        </div>

                        <label>Attachments (Optional)</label>
                        <div className="file-upload" onClick={() => fileInputRef.current.click()}>
                            <p style={{ color: 'var(--text-muted)' }}>
                                {fileName ? <span><strong>Selected:</strong> {fileName}</span> : 'Drop files here or click to upload'}
                            </p>
                            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.5 }}>PDF, JPG, PNG (Max 5MB)</p>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <input type="checkbox" style={{ width: 'auto' }} />
                                Subscribe to our newsletter for business tips
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit Enquiry</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Enquiry;
