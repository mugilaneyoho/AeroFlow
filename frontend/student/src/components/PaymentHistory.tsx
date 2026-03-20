import { ArrowDownToLine } from "lucide-react";
import { IndianRupee } from "lucide-react";
import type { Payment } from "../types/feeInterface";

interface PaymentHistoryProps {
    payments: Payment[];
}

const PaymentHistory = (props: PaymentHistoryProps) => {
    const { payments } = props;
    console.log(payments)

    return (
        <div className="flex-1 shadow-[0px_0px_15px_0px_#00000040] p-3 rounded-2xl">
            <h2 className="font-bold text-2xl">Payment History</h2>
            {payments?.map((item) => (
                <div className="shadow-[0px_0px_15px_0px_#00000040] flex-1 p-4 rounded-2xl m-4">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                            <div className="font-medium">{item.paymentName}</div>
                            <div className="font-medium">{item.date}</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="font-medium flex justify-center">
                                <IndianRupee className="h-4 w-4 mt-1.75" />
                                <div className="text-xl">
                                    {item.amount}
                                </div>
                            </div>
                            <button className="flex text-white gap-3 bg-[#1A7B9D] rounded px-4">
                                <ArrowDownToLine className="h-4  w-4 mt-0.5" />
                                <h2>Receipt</h2>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PaymentHistory;