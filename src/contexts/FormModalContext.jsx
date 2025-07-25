import { createContext, useContext, useState } from 'react';

const FormModalContext = createContext();

export const useFormModal = () => {
    const context = useContext(FormModalContext);
    if (!context) {
        throw new Error('useFormModal must be used within a FormModalProvider');
    }
    return context;
};

export const FormModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: ''
    });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
        closeModal();
        // Reset form after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            companyName: ''
        });
    };

    const value = {
        isModalOpen,
        formData,
        openModal,
        closeModal,
        handleInputChange,
        handleSubmit
    };

    return (
        <FormModalContext.Provider value={value}>
            {children}
        </FormModalContext.Provider>
    );
};