import { useEffect } from 'react';
import { useFormModal } from '../contexts/FormModalContext';
import CTAButton from './CTAButton';
import '../styles/FormModal.css';

const FormModal = () => {
    const { isModalOpen, formData, closeModal, handleInputChange, handleSubmit } = useFormModal();

    // Handle escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen, closeModal]);

    if (!isModalOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-container">
                <div className="modal-header">
                    <h3 className="modal-title">Have Questions? Schedule a demo</h3>
                    <button 
                        className="modal-close-button" 
                        onClick={closeModal}
                        aria-label="Close modal"
                    >
                        ×
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="modal-firstName">First Name*</label>
                            <input
                                type="text"
                                id="modal-firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="modal-lastName">Last Name*</label>
                            <input
                                type="text"
                                id="modal-lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="modal-email">Email*</label>
                            <input
                                type="email"
                                id="modal-email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="modal-companyName">Company Name</label>
                            <input
                                type="text"
                                id="modal-companyName"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="modal-cta-container">
                        <CTAButton
                            name='Submit'
                            onClick={handleSubmit}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormModal;