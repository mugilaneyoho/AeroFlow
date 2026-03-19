
interface StatsItem {
    id: number;
    icon: string;
    title: string;
    value: string;
}

interface StatsGalleryProp {
    data: StatsItem[];
}


const TopStatsGallery = ({ data }: StatsGalleryProp) => {

    return (
        <div className='flex flex-1 gap-5 my-4'>
            {data?.map((card) => (
                <div key={card.id} className='shadow-[0px_0px_15px_0px_#0000001A] flex flex-1 gap-10 p-3 rounded-lg justify-between'>
                    <div>
                        <img src={card.icon} alt={card.title} className='h-10 w-10 my-1' />
                        <p className='text-[#4A5565] font-medium'>{card.title}</p>
                    </div>
                    <div>
                        <h3 className='font-bold text-2xl'>{card.value}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TopStatsGallery;