import React, { useState } from 'react';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', age: '' });
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const handleCheckboxChange = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName) {
      setError('! Ad ve Soyad boş bırakılamaz!');
    } else {
      setError('');
      setSubmittedData([...submittedData, { firstName: formData.firstName, lastName: formData.lastName }]);
      setFormData({ firstName: '', lastName: '', email: '', age: '' });
    }
  };

  return (
    <div className="container">
      {/* 1. Component: yazı ve checkbox */}
      <div className="agreement-box">
        <label>
          <input type="checkbox" onChange={handleCheckboxChange} />
          Sözleşme koşullarını kabul et
        </label>
      </div>

      {/* 2. Component: Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="form-box">
          <div className="form-row">
            <div>
              <label>
                Ad:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                Soyad:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
          <div className="form-row">
            <div>
              <label>
                E-posta:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                Yaş:
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Kaydet</button>
        </form>
      )}

      {/* Liste yazısı ve veriler */}
      {submittedData.length > 0 && (
        <div className="list-section">
          <h2>Liste</h2>
          <ul className="submitted-list">
            {submittedData.map((data, index) => (
              <li key={index}>
                {data.firstName} {data.lastName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
