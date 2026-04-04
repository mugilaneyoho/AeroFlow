import { useState } from "react";
import FilterBar from "../components/FilterBar";
import { dummyTickets } from "../data/dummyTickets";

const AllTicketsPage = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const handleToggle = (id: string) => {
        setExpandedId(prevId => (prevId === id ? null : id));
    };

    const statusStyles: Record<string, string> = {
        'open': 'bg-blue-100 text-blue-700 border-blue-200',
        'in-progress': 'bg-amber-100 text-amber-700 border-amber-200',
        'resolved': 'bg-green-100 text-green-700 border-green-200',
        'closed': 'bg-gray-100 text-gray-700 border-gray-200',
    };

    const priorityStyles: Record<string, string> = {
        'low': 'bg-slate-100 text-slate-600 border-slate-200',
        'medium': 'bg-orange-100 text-orange-700 border-orange-200',
        'high': 'bg-red-100 text-red-700 border-red-200',
        'urgent': 'bg-purple-100 text-purple-700 border-purple-200',
    };

    return (
        <>
            <h1 className="text-3xl font-medium">All Tickets</h1>
            <h4 className="text-gray-400 my-2">View and track tickets</h4>
            <FilterBar />

            <div className="flex flex-col gap-4 mt-6">
                {dummyTickets.map((ticket) => {
                    const isExpanded = expandedId === ticket.id;

                    return (
                        <div
                            key={ticket.id}
                            className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex gap-1">
                                        <h3 className="text-lg font-medium text-gray-900">{ticket.title}</h3>
                                        <span className={`text-sm px-2 py-0.5 rounded-sm border ${statusStyles[ticket.status]}`}>
                                            {ticket.status}
                                        </span>

                                        <span className={`text-sm px-2 py-0.5 rounded-sm border ${priorityStyles[ticket.priority]}`}>
                                            {ticket.priority}
                                        </span>
                                    </div>
                                    {isExpanded && (
                                        <p className="text-gray-600 mt-3 transition-all">
                                            {ticket.description}
                                        </p>
                                    )}
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleToggle(ticket.id)}
                                        className="px-3 py-1 rounded-md transition-colors cursor-pointer font-medium ml-4 shrink-0 bg-gray-200 text-black hover:bg-gray-300"
                                    >
                                        {isExpanded ? 'Collapse' : 'Expand'}
                                    </button>

                                    <div>
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

                                    <button className="text-red-600 bg-red-100 rounded-md px-3 py-1 hover:bg-red-300 transition-colors font-medium">
                                        Delete
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500 border-gray-100">
                                <span>Created: {ticket.createdAt.toLocaleDateString()}</span>
                                <span>Updated: {ticket.updatedAt.toLocaleDateString()}</span>
                                <span>By: {ticket.by}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default AllTicketsPage;
