import secureStorage from 'react-secure-storage';
const backendurl = import.meta.env.VITE_API_BASE_URL;

export const GetImageUrl = (url: string) => {
	const data = url ? backendurl + url : null;
	return data;
};

export const StoreLocalStorage = (key: string, data: any) => {
	secureStorage.setItem(key, data);
	
};

export const GetLocalStorage = (key: string) => {
	const data: any = secureStorage.getItem(key);
	
	return data || null;
};

export const RemoveLocalStorage = (key: string) => {
	secureStorage.removeItem(key);
	
};

export const ClearLocalStorage = () => {
	secureStorage.clear();
	
};

export const CapsText = (val: any) => {
	if (!val || typeof val !== 'string') return '';
	return `${val.charAt(0).toUpperCase()}${val.slice(1)}`;
};

export const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	const d = String(date.getDate()).padStart(2, '0');
	const m = String(date.getMonth() + 1).padStart(2, '0');
	const y = date.getFullYear();
	return `${d}-${m}-${y}`;
};

export const formatTime = (dateString: string) => {
	const date = new Date(dateString);

	let hours = date.getHours();
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const ampm = hours >= 12 ? 'PM' : 'AM';

	hours = hours % 12 || 12;

	return `${hours}:${minutes} ${ampm}`;
};
export const formatDateTime = (dateString: string) => {
	const date = new Date(dateString);

	const d = String(date.getDate()).padStart(2, '0');
	const m = String(date.getMonth() + 1).padStart(2, '0');
	const y = date.getFullYear();

	let hours = date.getHours();
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const ampm = hours >= 12 ? 'PM' : 'AM';

	hours = hours % 12 || 12; 

	return `${d}-${m}-${y} ${hours}:${minutes} ${ampm}`;
};

export const isToday = (date: string) => {
	const today = new Date();
	const d = new Date(date);

	return (
		d.getDate() === today.getDate() &&
		d.getMonth() === today.getMonth() &&
		d.getFullYear() === today.getFullYear()
	);
};

export const isThisWeek = (date: string) => {
	const now = new Date();
	const d = new Date(date);

	const firstDayOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
	firstDayOfWeek.setHours(0, 0, 0, 0);

	const lastDayOfWeek = new Date(firstDayOfWeek);
	lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 7);

	return d >= firstDayOfWeek && d < lastDayOfWeek;
};

export const getRelativeTime = (createdAt: any) => {
	const createdDate: any = new Date(createdAt);
	const now: any = new Date();


	const diffMs = now - createdDate;


	const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

	if (diffDays === 0) return 'Today';
	if (diffDays === 1) return '1 day ago';

	return `${diffDays} days ago`;
};
 