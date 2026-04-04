const CreateTicketPage = () => {
    return (
        <div className="w-full">
            <h1 className="text-3xl font-medium">Create New Ticket</h1>
            <h4 className="text-gray-400 my-2">Submit a new support ticket</h4>
            <div className="border border-gray-300 rounded-md p-2">
                <div className="mt-6 w-full">
                    <h1 className="text-md font-medium mb-1">Title</h1>
                    <input
                        type="text"
                        placeholder="Enter ticket title"
                        className="block w-full p-2 bg-gray-300 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                </div>

                <div className="mt-4 w-full">
                    <h1 className="text-md font-medium mb-1">Description</h1>
                    <textarea
                        placeholder="Enter ticket description"
                        className="block w-full p-2 bg-gray-300 border border-gray-300 rounded"
                        rows={4}
                    />
                </div>

                <div className="flex w-full gap-4 mt-4">
                    <div className="flex-1">
                        <h1 className="font-medium mb-1">Status</h1>
                        <select
                            id="status"
                            className="block w-full p-2 border border-gray-300 rounded-md bg-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            <option value="open">Open</option>
                            <option value="in-progress">In Progress</option>
                            <option value="resolved">Resolved</option>
                            <option value="closed">Closed</option>
                        </select>
                    </div>

                    <div className="flex-1">
                        <h1 className="font-medium mb-1">Priority</h1>
                        <select
                            id="priority"
                            className="block w-full p-2 border border-gray-300 rounded-md bg-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                        </select>
                    </div>
                </div>

                <div className="flex gap-2 mt-6 justify-end">
                    <button className="cursor-pointer p-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 font-medium">
                        Cancel
                    </button>
                    <button className="cursor-pointer p-2 bg-black text-white rounded-md hover:bg-gray-700 font-medium">
                        Create Ticket
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateTicketPage;
