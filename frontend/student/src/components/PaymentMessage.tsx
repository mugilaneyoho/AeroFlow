import warning from "../assets/warning.png"

const PaymentMessage = () => {

    return (
        <div className="shadow-[0px_0px_15px_0px_#D20F0F33,inset_0px_0px_15px_0px_#D20F0F] p-4 m-3 rounded-2xl flex gap-3">
            <div>
                <img src={warning} alt="warning" className="h-6 w-6 mt-1" />
            </div>
            <div>
                <h1 className="text-2xl text-[#D20F0F]">Pending Fee Payment</h1>
                <h3 className="text-[#FF8383]">You have a pending fee of Rs.25,000. Please clear your dues to continue accessing all the services</h3>
                <button className="bg-[#D20F0F] text-white rounded px-3 py-1 my-2">
                    Paynow
                </button>
            </div>
        </div>
    )
}

export default PaymentMessage;