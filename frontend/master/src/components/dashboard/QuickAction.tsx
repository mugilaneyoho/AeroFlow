import quick1 from "../../assets/dashboard/quick1.png"
import quick2 from "../../assets/dashboard/quick2.png"
import quick3 from "../../assets/dashboard/quick3.png"
import quick4 from "../../assets/dashboard/quick5.png"

const QuickAction = () => {
  return (
    <div className="mt-5 mb-4 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-xl p-2 ">
      <div>
        <h1 className="font-semibold">Quick Actions</h1>
      </div>

      <div className='grid grid-cols-4 gap-3 text-white mt-3'>
        <div className='flex gap-2 border rounded-xl bg-[#2B7FFF] p-2'>
            <div>
                <img src={quick1} className="w-5 h-5"/>
            </div>
            <div>
                <h1 className="font-semibold">Add New Staff</h1>
                <p>Register a New Staff</p>
            </div>
        </div>

        <div className='flex gap-2 border rounded-xl bg-[#00C950] p-2'>
            <div>
                <img src={quick2} className="w-5 h-5"/>
            </div>
            <div>
                <h1>Allocate Leads</h1>
                <p>Assign leads to Callers</p>
            </div>
        </div>

        <div className='flex gap-2 border rounded-xl bg-[#AD46FF] p-2'>
            <div>
                <img src={quick3} className="w-5 h-5"/>
            </div>
            <div>
                <h1>Schedule Meeting</h1>
                <p>Book a New Meeting</p>
            </div>
        </div>

        <div className='flex gap-2 border rounded-xl bg-[#00BC7D] p-2'>
            <div>
                <img src={quick4} className="w-5 h-5"/>
            </div>
            <div>
                <h1>Send Overdue Notification</h1>
                <p>send notification to the student</p>
            </div>
        </div>

        <div className='flex gap-2 border rounded-xl bg-[#2B7FFF] p-2'>
            <div>
                <img src={quick1} className="w-5 h-5"/>
            </div>
            <div>
                <h1>Create Batch</h1>
                <p>Start a New batch</p>
            </div>
        </div>

        <div className='flex gap-2 border rounded-xl bg-[#00C950] p-2'>
            <div>
                <img src={quick2} className="w-5 h-5"/>
            </div>
            <div>
                <h1>Create Course</h1>
                <p>new course in training department</p>
            </div>
        </div>

        <div className='flex gap-2 border rounded-xl bg-[#AD46FF] p-2'>
            <div>
                <img src={quick3} className="w-5 h-5"/>
            </div>
            <div>
                <h1>Schedule Class</h1>
                <p>Schedule a class</p>
            </div>
        </div>

        <div className='flex gap-2 border rounded-xl bg-[#00BC7D] p-2'>
            <div>
                <img src={quick4} className="w-5 h-5"/>
            </div>
            <div>
                <h1>Raise a new Ticket</h1>
                <p>Raise a new ticket</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default QuickAction
