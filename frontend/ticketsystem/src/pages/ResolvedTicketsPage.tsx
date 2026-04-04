import { useState } from "react";
import { CircleCheckBig } from "lucide-react";
import { dummyTickets } from "../data/dummyTickets";

const ResolvedTicketsPage = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const handleToggle = (id: string) => {
        setExpandedId(prevId => (prevId === id ? null : id));
    };

    const statusStyles: Record<string, string> = {
        'resolved': 'bg-green-100 text-green-700 border-green-200',
        'closed': 'bg-gray-100 text-gray-700 border-gray-200',
    };

    const priorityStyles: Record<string, string> = {
        'low': 'bg-slate-100 text-slate-600 border-slate-200',
        'medium': 'bg-orange-100 text-orange-700 border-orange-200',
        'high': 'bg-red-100 text-red-700 border-red-200',
        'urgent': 'bg-purple-100 text-purple-700 border-purple-200',
    };

    const filteredTickets = dummyTickets.filter(
        (t) => t.status === 'resolved' || t.status === 'closed'
    );

    return (
        <>
            <div className="flex gap-3 mb-6">
                <CircleCheckBig className="w-10 h-10 text-green-500" />
                <div>
                    <h1 className="text-3xl font-medium">Resolved Tickets</h1>
                    <h2 className="text-gray-500 mt-1">View all resolved and closed tickets</h2>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {filteredTickets.map((ticket) => {
                    const isExpanded = expandedId === ticket.id;

                    return (
                        <div
                            key={ticket.id}
                            className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex gap-1 items-center">
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

                                <div className="flex gap-3">
                                    <button
                                        onClick={() => handleToggle(ticket.id)}
                                        className="px-3 py-1 rounded-md transition-colors cursor-pointer font-medium ml-4 shrink-0 bg-gray-200 text-black hover:bg-gray-300"
                                    >
                                        {isExpanded ? 'Collapse' : 'Expand'}
                                    </button>

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

                                    <button className="text-red-600 bg-red-100 rounded-md px-3 py-1 hover:bg-red-400 transition-colors font-medium">
                                        Delete
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                                <span>Created: {ticket.createdAt.toLocaleDateString()}</span>
                                <span>Updated: {ticket.updatedAt.toLocaleDateString()}</span>
                                <span>By: {ticket.by}</span>
                            </div>
                        </div>
                    );
                })}

                {filteredTickets.length === 0 && (
                    <p className="text-gray-400 mt-4 italic text-center">No resolved tickets yet.</p>
                )}
            </div>
        </>
    );
};

export default ResolvedTicketsPage;
