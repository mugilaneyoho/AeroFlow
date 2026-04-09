import React, { useState } from 'react';
import axios from 'axios';

interface CreateTicketProps {
    setActiveTab: (tab: string) => void;
    previousTab: string;
}

const CreateTicketPage: React.FC<CreateTicketProps> = ({ setActiveTab, previousTab }) => {

    const location = window.location

    const values = new URLSearchParams(location.search)
    const token: string = values.get('tkn') as string;

    const userRole = localStorage.getItem('role') || 'student';

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        assignedTo: 'hod',
        priority: 'low'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleClose = () => {
        setActiveTab(previousTab);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/tickets', formData, {
                headers: {
                    'Authorization': token
                }
            });
            console.log('Ticket Created:', response.data);

            alert('Ticket created successfully!');
            handleClose();
        } catch (error) {
            console.error('Error creating ticket:', error);
            alert('Failed to create ticket. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-lg rounded-lg shadow-xl p-6 relative animate-in fade-in zoom-in duration-200"
            >
                <h1 className="text-2xl font-semibold">Create New Ticket</h1>
                <p className="text-gray-500 mb-6">Submit a new support ticket</p>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            type="text"
                            placeholder="Enter ticket title"
                            className="w-full p-2 bg-gray-100 border border-gray-300 rounded focus:ring-2 focus:ring-black outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            placeholder="Enter ticket description"
                            className="w-full p-2 bg-gray-100 border border-gray-300 rounded outline-none"
                            rows={3}
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Assign to</label>
                            <select
                                name="assignedTo"
                                value={formData.assignedTo}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 outline-none"
                            >
                                {(userRole === 'staff' || userRole === 'student') && (
                                    <>
                                        <option value="hod">HOD</option>
                                        <option value="admin">Admin</option>
                                    </>
                                )}

                                {userRole === 'telecaller' && (
                                    <>
                                        <option value="admin">Admin</option>
                                        <option value="teleadmin">Teleadmin</option>
                                    </>
                                )}
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Priority</label>
                            <select
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 outline-none"
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 mt-8 justify-end">
                    <button
                        type="button"
                        onClick={handleClose}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 font-medium"
                    >
                        Create Ticket
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTicketPage;
