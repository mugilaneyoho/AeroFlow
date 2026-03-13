import edit from '../../assets/course/edit.png'
import deleteicon from '../../assets/course/delete.png'
import { COLORS } from '../../constant';
import courseimage from '../../assets/course/course1.png'

interface CourseCardProps {
  course: any;
  onEdit: () => void;
  onDelete?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onEdit, onDelete }) => {
  return (
    <div className="flex flex-col gap-3 p-3 rounded-[10px] shadow-[0px_0px_15px_0px_#00000026,inset_0px_0px_15px_0px_#00000000] bg-white">
      <img src={course.thumbnail || courseimage} className="rounded-[10px]" />

      <div className="flex justify-between flex-col sm:flex-row">
        <p className="font-medium">{course.course_name}</p>
       <p
  className="px-2 py-1 rounded text-xs font-medium inline-block text-white"
  style={{
    backgroundColor:
      course.is_active
        ? COLORS.bg_light_green
        : COLORS.bg_gray,
       }}
        >
      {course.is_active ? "Active" : "Inactive"}
     </p>
      </div>
       
      <p className="text-sm text-[#8E8E8E] mt-2">{course.description}</p>
      <p className="text-xl text-[#8E8E8E] mt-2 font-medium">Price: {course.price}</p>

      <div className="flex gap-2 mt-auto pt-3">
        <button
          onClick={onEdit}
          className="flex-1 flex items-center justify-center gap-1 text-white rounded text-sm p-1" style={{background:COLORS.bg_light_green}}
        >
            <img src={edit} alt='edit' />
          Edit
        </button>
        <button className="flex-1 flex items-center justify-center gap-1 text-white rounded text-sm p-1" style={{background:COLORS.bg_red}} onClick={onDelete}>
         <img src={deleteicon} alt='delete' /> Delete
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
