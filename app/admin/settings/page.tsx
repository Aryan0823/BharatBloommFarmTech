'use client';
export default function AdminSettingsPage() {
    const inputStyle: React.CSSProperties = {
        width: '100%', padding: '10px 12px', border: '1.5px solid #e8eaed', borderRadius: 8,
        fontSize: '0.9rem', fontFamily: 'Inter, sans-serif', outline: 'none', boxSizing: 'border-box',
        color: '#1B1B1B', background: 'white',
    };
    const labelStyle: React.CSSProperties = {
        display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#555', marginBottom: 6,
    };
    const cardStyle: React.CSSProperties = {
        background: 'white', border: '1px solid #e8eaed', borderRadius: 12, padding: '24px',
        marginBottom: 20,
    };

    return (
        <div>
            <div style={{ marginBottom: 24 }}>
                <h1 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1B1B1B', marginBottom: 4 }}>Settings</h1>
                <p style={{ color: '#888', fontSize: '0.88rem' }}>Configure your site preferences and admin settings.</p>
            </div>

            <div style={{ maxWidth: 720 }}>
                {/* Company Info */}
                <div style={cardStyle}>
                    <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#1B1B1B', marginBottom: 4 }}>Company Information</h2>
                    <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: 20 }}>Details shown on the public website, invoices, and emails.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: 16 }}>
                        <div>
                            <label style={labelStyle}>Company Name</label>
                            <input defaultValue="BharatBloomm FarmTech Private Limited" style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>CIN / Registration No.</label>
                            <input defaultValue="" placeholder="e.g. U01400GJ2024PTC..." style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>GST Number</label>
                            <input defaultValue="" placeholder="e.g. 24XXXXX..." style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>Phone</label>
                            <input defaultValue="+91 99999 99999" style={inputStyle} />
                        </div>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label style={labelStyle}>Business Email</label>
                        <input defaultValue="info@bharatbloomm.com" style={{ ...inputStyle, width: 'calc(50% - 8px)' }} />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label style={labelStyle}>Registered Address</label>
                        <textarea defaultValue="66/P1 Dantarvad, Harij, Gujarat, India"
                            style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }} />
                    </div>
                    <button style={{ padding: '10px 24px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Save Changes</button>
                </div>

                {/* Notification Settings */}
                <div style={cardStyle}>
                    <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#1B1B1B', marginBottom: 4 }}>Notifications</h2>
                    <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: 20 }}>Control where admin notifications are sent.</p>
                    {[
                        { label: 'New Inquiry Alert', desc: 'Receive an email when a new product inquiry arrives', checked: true },
                        { label: 'Daily Summary Email', desc: 'Morning digest of inquiries and site stats', checked: true },
                        { label: 'WhatsApp Notifications', desc: 'Get WhatsApp alerts for new inquiries', checked: false },
                        { label: 'Low Stock Alert', desc: 'Alert when a product is marked out of stock', checked: false },
                    ].map((item, i) => (
                        <label key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 0', borderBottom: i < 3 ? '1px solid #f5f5f5' : 'none', cursor: 'pointer' }}>
                            <input type="checkbox" defaultChecked={item.checked} style={{ marginTop: 2, width: 16, height: 16, accentColor: '#4CAF50', cursor: 'pointer' }} />
                            <div>
                                <p style={{ fontWeight: 600, fontSize: '0.88rem', color: '#1B1B1B', marginBottom: 2 }}>{item.label}</p>
                                <p style={{ fontSize: '0.78rem', color: '#888' }}>{item.desc}</p>
                            </div>
                        </label>
                    ))}
                    <button style={{ marginTop: 20, padding: '10px 24px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Save Preferences</button>
                </div>

                {/* Admin Accounts */}
                <div style={cardStyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                        <div>
                            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#1B1B1B', marginBottom: 4 }}>Admin Accounts</h2>
                            <p style={{ fontSize: '0.8rem', color: '#888' }}>Manage who has access to the admin panel.</p>
                        </div>
                        <button style={{ padding: '8px 16px', background: '#f0f7f0', color: '#2E7D32', border: '1.5px solid #A5D6A7', borderRadius: 8, fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
                            + Add Admin
                        </button>
                    </div>
                    {[
                        { name: 'Admin User', email: 'admin@bharatbloomm.com', role: 'Super Admin', active: true },
                        { name: 'Sales Manager', email: 'sales@bharatbloomm.com', role: 'Sales', active: true },
                    ].map((admin, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: i < 1 ? '1px solid #f5f5f5' : 'none' }}>
                            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#4CAF50,#2E7D32)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>
                                {admin.name[0]}
                            </div>
                            <div style={{ flex: 1 }}>
                                <p style={{ fontWeight: 600, fontSize: '0.88rem', color: '#1B1B1B' }}>{admin.name}</p>
                                <p style={{ fontSize: '0.78rem', color: '#888' }}>{admin.email}</p>
                            </div>
                            <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '3px 10px', borderRadius: 20, background: '#E8F5E9', color: '#2E7D32' }}>{admin.role}</span>
                            <span style={{ fontSize: '0.72rem', color: admin.active ? '#2E7D32' : '#888' }}>● {admin.active ? 'Active' : 'Inactive'}</span>
                        </div>
                    ))}
                </div>

                {/* Danger Zone */}
                <div style={{ ...cardStyle, border: '1.5px solid #FFCDD2' }}>
                    <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#C62828', marginBottom: 4 }}>Danger Zone</h2>
                    <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: 16 }}>These actions are irreversible. Please be certain.</p>
                    <div style={{ display: 'flex', gap: 12 }}>
                        <button style={{ padding: '10px 20px', background: 'white', color: '#C62828', border: '1.5px solid #FFCDD2', borderRadius: 8, fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
                            Clear All Inquiries
                        </button>
                        <button style={{ padding: '10px 20px', background: '#C62828', color: 'white', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
                            Reset Admin Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
