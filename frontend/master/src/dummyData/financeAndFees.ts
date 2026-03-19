import card1 from "../../src/assets/fees/Container (8).png"
import card2 from "../../src/assets/fees/Container (9).png"
import card3 from "../../src/assets/fees/Container (10).png"
import card4 from "../../src/assets/fees/Container (11).png"

export const statData = [
    {
        id: 1,
        icon: card1,
        value: "1,45,000",
        title: "Today's Collection"
    },
    {
        id: 2,
        icon: card2,
        value: "1,70,000",
        title: "Total collected"
    },
    {
        id: 3,
        icon: card3,
        value: "90,000",
        title: "Total Pending"
    },
    {
        id: 4,
        icon: card4,
        value: "1",
        title: "Overdue Students"
    }
]

export const paymentData = [
    {
        studentID : "IMS001",
        name : "Priya Sharma",
        course : "Full Stack Development",
        totalFee : "50,000",
        paidAmount : "50,000",
        pendingAmount : "0",
        status: "Paid",
        lastPayment : "15-01-2026",
        actions: "view"
    },
    {
        studentID : "IMS002",
        name : "Rajesh",
        course : "Data Science",
        totalFee : "60,000",
        paidAmount : "30,000",
        pendingAmount : "0",
        status: "Partial",
        lastPayment : "15-01-2026",
        actions: "collect"
    },
    {
        studentID : "IMS003",
        name : "Vikram Singh",
        course : "Python Development",
        totalFee : "45,000",
        paidAmount : "35,000",
        pendingAmount : "0",
        status: "Overdue",
        lastPayment : "15-01-2026",
        actions: "collect"
    },
    {
        studentID : "IMS004",
        name : "Amit Patel",
        course : "AI/ML Fundamentals",
        totalFee : "58,000",
        paidAmount : "25,000",
        pendingAmount : "0",
        status: "Paid",
        lastPayment : "15-01-2026",
        actions: "view"
    },
]