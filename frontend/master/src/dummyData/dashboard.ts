import card1 from "../assets/dashboard/card1.png"
import card2 from "../assets/dashboard/card2.png"
import card3 from "../assets/dashboard/card3.png"
import card4 from "../assets/dashboard/card4.png"
import card5 from "../assets/dashboard/card5.png"
import card6 from "../assets/dashboard/card6.png"
import card7 from "../assets/dashboard/card7.png"
import card8 from "../assets/dashboard/card8.png"

import person from "../assets/dashboard/person.png"
import dollar from "../assets/dashboard/dollar.png"
import calander from "../assets/dashboard/calander.png"

export const card = [
    {
        id:1,
        icon:card1,
        value:"1247",
        title:"Total Students",
        subtitle: "+12.5%"
    },
    {
        id:2,
        icon:card2,
        value:"8",
        title:"Activity Staff",
        subtitle:"8/10 Online"
    },
    {
        id:3,
        icon:card3,
        value:"24",
        title:"Today's classes",
        subtitle:"6 Ongoing"
    },
    {
        id:4,
        icon:card4,
        value:"1,45,000",
        title:"Fee Collection Today",
        subtitle:"+18.2%"
    },
    {
        id:5,
        icon:card5,
        value:"15",
        title:"Pending Approvals",
        subtitle: "Required Action"
    },
    {
        id:6,
        icon:card6,
        value:"3",
        title: "current Meetings",
        subtitle:"2 Waiting"
    },
    {
        id:7,
        icon:card7,
        value:"7",
        title:"Placement Interviews",
        subtitle:"Today"
    },
    {
        id:8,
        icon:card8,
        value:"92%",
        title:"Student Attendance",
        subtitle:"+2.5%"
    }
]

export const Pending =[
    {
        id:1,
        title:"Meeting",
        priority:"High",
        para:"Meeting Request:Sarajohn",
        subpara:"Requested by john Receptionist 2026-02-07"
    },
    {
        id:2,
        title:"Admission",
        priority:"MEDIUM",
        para:"New Admission: Divya Menon",
        subpara:"Requested by Neha Gupta 2026-02-07"
    },
    {
        id:3,
        title:"Meeting",
        priority:"NORMAL",
        para:"New Admission: Divya Menon",
        subpara:"Requested by Neha Gupta 2026-02-07"
    }
]


export const ActivityFeed = [
    {
        id:1,
        icon:person,
        title:"Telecaller has converted all interested Leads into students",
        para:"Priya Sharma achieved todays target",
        value:"2 Min Ago"
    },
    {
        id:2,
        icon:person,
        title:"Ticket #1234 raised: Infrastructure issue",
        para:"john has a raised a complaint for an sitting place issuse",
        value:"2 Min Ago"
    },
    {
        id:3,
        icon:person,
        title:"New Admission Approved",
        para:"Priya Sharma admitted to Full Stack Deve",
        value:"2 Min Ago"
    },
    {
        id:4,
        icon: dollar,
        title:"Fee Payment Received",
        para:"Rahul Kumar Paid ₹25,000 - Data Science",
        value:"2 Min Ago"
    },
    {
        id:5,
        icon: calander,
        title:"Meeting Started",
        para:"Meeting with Anjali Verma - Course Inquiry",
        value:"2 Min Ago"
    },
]

export const barchart = [
  {
    label: "Telecalling",
    values: [360, 340, 360]
  },
  {
    label: "Training",
    values: [400, 300, 150]
  },
  {
    label: "Placement",
    values: [110, 320, 320]
  },
  {
    label: "Finance",
    values: [50, 210, 260]
  }
];

