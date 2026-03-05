import { createContext, useContext, useEffect, useState } from 'react';
import { sessionModalHandler } from '../utils/sessionModalHandler';

interface SessionModalContextType {
	isSessionExpired: boolean;
	setIsSessionExpired: React.Dispatch<React.SetStateAction<boolean>>;
}

const SessionModalContext = createContext<SessionModalContextType | null>(null);

export const useSessionModal = () => useContext(SessionModalContext);

export const SessionModalProvider = ({ children }: any) => {
	const [isSessionExpired, setIsSessionExpired] = useState(false);

	useEffect(() => {
		sessionModalHandler.register(() => setIsSessionExpired(true));
	}, []);

	return (
		<SessionModalContext.Provider
			value={{ isSessionExpired, setIsSessionExpired }}
		>
			{children}
		</SessionModalContext.Provider>
	);
};
