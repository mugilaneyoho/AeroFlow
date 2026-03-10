import { paymentData as payments } from "../../dummyData/financeAndFees";

const FeesStatus = () => {

    return (
        <div className="shadow-[0px_0px_15px_0px_#0000001A] rounded-md my-3">
            <div className="shadow-[0px_0px_15px_0px_#0000001A] flex flex-11 text-[#4A5565] font-medium p-4 gap-2">
                <h2 className="flex-1">Student ID</h2>
                <h2 className="flex-1">Name</h2>
                <h2 className="flex-2">Course</h2>
                <h2 className="flex-1">Total Fee</h2>
                <h2 className="flex-1">Paid Amount</h2>
                <h2 className="flex-1">Pending Amount</h2>
                <h2 className="flex-1">Status</h2>
                <h2 className="flex-1">Last Payment</h2>
                <h2 className="flex-2">Actions</h2>
            </div>
            <div className="p-4">
                {payments.map((payment) => (
                    <div key={payment.studentID}>
                        <div className="flex flex-11 my-3 gap-2 text-[#4A5565]">
                            <div className="flex-1">
                                <h2>{payment.studentID}</h2>
                            </div>
                            <div className="flex-1">
                                <h2>{payment.name}</h2>
                            </div>
                            <div className="flex-2">
                                <h2>{payment.course}</h2>
                            </div>
                            <div className="flex-1">
                                <h2>{payment.totalFee}</h2>
                            </div>
                            <div className="flex-1">
                                <h2>{payment.paidAmount}</h2>
                            </div>
                            <div className="flex-1">
                                <h2>{payment.pendingAmount}</h2>
                            </div>
                            <div className="flex-1">
                                <div className="w-fit">
                                    {payment.status.toLowerCase() === 'paid' && (
                                        <div className="text-[#00A63E] bg-[#E5F6EC] border border-[#00A63E] rounded-md text-center p-1">
                                            paid
                                        </div>
                                    )}
                                    {payment.status.toLowerCase() === 'partial' && (
                                        <div className="text-[#D16E0B] bg-[#FAF0E7] border border-[#D16E0B] rounded-md text-center p-1">
                                            partial
                                        </div>
                                    )}
                                    {payment.status.toLowerCase() === 'overdue' && (
                                        <div className="text-[#FB2C36] bg-[#FFEAEB] border border-[#FB2C36] rounded-md text-center p-1">
                                            overdue
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2>{payment.lastPayment}</h2>
                            </div>
                            <div className="flex-2 flex gap-1">
                                <div className="w-fit">
                                    {payment.actions.toLowerCase() === 'view' && (
                                        <div className="text-white bg-[#3CA7FF] border rounded-md text-center p-1">
                                            view
                                        </div>
                                    )}
                                    {payment.actions.toLowerCase() === 'collect' && (
                                        <div className="text-white bg-[#20D432] rounded-md text-center p-1">
                                            collect
                                        </div>
                                    )}
                                </div>
                                <div>
                                    {payment.status.toLowerCase() === 'overdue' && (
                                        <div className="text-white bg-[#D20F0F] rounded-md text-center p-1">
                                            Reminder
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#A7A7A7] h-1 w-full">

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FeesStatus;