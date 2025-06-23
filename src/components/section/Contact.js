import { useState } from 'react';
import Button from '../ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="section-title">Me contacter</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Parlons de votre projet</h3>
            <p>
              Je suis toujours intéressé par de nouveaux défis et opportunités. 
              N'hésitez pas à me contacter !
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:contact@example.com">contact@example.com</a>
              </div>
              <div className="contact-item">
                <strong>Téléphone:</strong>
                <a href="tel:+33123456789">+33 1 23 45 67 89</a>
              </div>
              <div className="contact-item">
                <strong>Localisation:</strong>
                <span>Paris, France</span>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <Button type="submit" variant="primary" fullWidth>
              Envoyer le message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;