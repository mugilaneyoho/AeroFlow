import { Ticket, Plus, CircleCheckBig } from 'lucide-react';

interface NavbarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    openCreateTicket: () => void;
}


const Navbar = ({ activeTab, setActiveTab, openCreateTicket }: NavbarProps) => {

    const getTabClass = (tabName: string) => {
        const baseClasses = "flex gap-2 items-center p-2 rounded-md cursor-pointer text-xl";
        const activeClasses = "bg-gray-300 text-gray-900 font-medium";
        const inactiveClasses = "text-gray-500 hover:bg-gray-200 hover:text-gray-700";

        return `${baseClasses} ${activeTab === tabName ? activeClasses : inactiveClasses}`;
    };

    return (
        <div className='w-full border-t border-b border-gray-200 py-4'>
            <div className='flex gap-7 mx-10'>
                <div className='flex items-center'>
                    <Ticket className='w-8 h-8' />
                    <h1 className='text-xl font-medium ml-2'>Ticket System</h1>
                </div>
                <div className={getTabClass('all')}
                    onClick={() => setActiveTab('all')}>
                    <h1 className='text-xl'>All Tickets</h1>
                </div>
                <div className={getTabClass('created')}
                    onClick={openCreateTicket}>
                    <Plus className='w-6 h-6' />
                    <h1 className='text-xl'>Create Ticket</h1>
                </div>
                <div className={getTabClass('resolved')}
                    onClick={() => setActiveTab('resolved')}
                >
                    <CircleCheckBig className='w-6 h-6' />
                    <h1 className='text-xl'>Resolved</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

