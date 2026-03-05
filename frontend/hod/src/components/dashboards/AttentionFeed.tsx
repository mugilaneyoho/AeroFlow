import { COLORS, FONTS } from '../../constant';
import { attentionFeedData } from '../../data/Dashoarddata'

const AttentionFeed: React.FC = () => {
  return (
    <div >
      <h1 style={{ color: COLORS.primary_blue, ...FONTS.subTittle }}>
        Attention Feed
      </h1>

      {attentionFeedData.map((item, index) => (
        <div
          key={index}
          className="shadow-[0px_0px_10px_0px_#00000040] border border-[#DBDADA] p-2 mb-2 rounded-[10px]"
        >
          <div className="flex gap-2 ">
            <img src={item.icon} alt="icon" className='w-5 h-5 '/>

            <div>
              <p style={{ color: item.color }} className=''>{item.title}</p>
              <p className="text-sm" style={{ color: COLORS.text_gray }}>
                {item.subtitle}
              </p>
              <span
                className="inline-block text-sm px-2 py-1 rounded mt-1"
                style={{ backgroundColor: COLORS.bg_light_green }}
              >
                {item.action}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AttentionFeed;
