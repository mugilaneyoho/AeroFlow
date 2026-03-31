import { useNavigate } from 'react-router-dom';

const SessionTimeoutModal = ({ isOpen, onClose }: any) => {
	const navigate = useNavigate();

	if (!isOpen) return null;

	const handleLogin = () => {
		onClose(); 
		navigate('/login');
		window.location.reload();
	};

	return (
		<div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-1000'>
			<div className='bg-white w-[90%] max-w-md rounded-2xl shadow-2xl p-6 animate-fadeIn'>
				
				<h2 className='text-2xl font-semibold text-gray-800 text-center'>
					Session Timeout
				</h2>

				
				<p className='text-gray-600 text-center mt-3'>
					Your session has expired. Please log in again to continue.
				</p>

				
				<div className='mt-6 flex justify-center'>
					<button
						onClick={handleLogin}
						className='px-5 py-2 bg-[#FC8019] text-white rounded-xl text-lg hover:bg-orange-600 transition-all'
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default SessionTimeoutModal;
 