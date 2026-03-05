import { ChevronDown } from "lucide-react"
import LoginForm from "./LoginForm"

const StudentLogin = () => {

    return (
        <div className="w-125">
            <h3 className="text-[#4C4C4C] font-medium my-1">Select</h3>
            <div className="grid grid-cols-3 bg-[#008BBF] text-white py-2 px-1 rounded my-2">
                <div></div>
                <div className="font-medium text-center">
                    Student
                </div>
                <div className="flex justify-end">
                    <ChevronDown className="h-6 w-6" />
                </div>
            </div>
            <LoginForm />
        </div>
    )
}

export default StudentLogin