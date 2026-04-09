import axios from "axios";
import { useEffect,useState } from "react";

const FilterBar = () => {
    const [tickets, setTickets] = useState<any[]>([]);

        useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get('http://localhost:3000/tickets', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

                setTickets(response.data);
            } catch (error: any) {
                console.error("Error fetching tickets:", error.response?.data || error.message);
            }
        };

        fetchTickets();
    }, []);

    return (
        <div className="flex border border-gray-300 rounded-md p-4 gap-6 mt-4">
            <div className="flex gap-2 items-center">
                <h1 className="font-bold">Status:</h1>
                <select
                    id="status"
                    className="p-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    <option value="all">All</option>
                    <option value="open">Open</option>
                    <option value="in-progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                    <option value="closed">Closed</option>
                </select>
            </div>

            <div className="flex gap-2 items-center">
                <h1 className="font-bold">Priority:</h1>
                <select
                    id="priority"
                    className="p-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    <option value="all">All</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                </select>
            </div>

            <div className="ml-auto my-auto">{tickets.length} tickets</div>
        </div>
    )
}

export default FilterBar;