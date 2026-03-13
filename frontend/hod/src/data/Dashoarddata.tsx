import { COLORS } from "../constant"
import totalcourse from '../assets/Dashboard/totalcourse.png'
import trendup from '../assets/Dashboard/ic-trending-up-24px.png'
import totalstaff from '../assets/Dashboard/totalStaff.png'
import activebatches from '../assets/Dashboard/ActiveBatches.png'
import totalstudents from '../assets/Dashboard/totalstudents.png'
import trendown from '../assets/Dashboard/ic-trending-down.png'
import attendence from '../assets/Dashboard/attendanceicon.png'
import staffavail from '../assets/Dashboard/stafficonsheild.png'
import ticketstudent from '../assets/Dashboard/ticketicon.png'

export const stat=[
    {
        title: "Total Course",
        value:30,
        icon:totalcourse,
        trendline:trendup,
        desc:"+3 course added from last year",
        background:COLORS.bg_medium_green
    },
     {
        title: "Total Staff",
        value:28,
        icon:totalstaff,
        trendline:trendup,
        desc:"+8 new this semester",
         background:COLORS.bg_medium_pink
    },
      {
        title: "Active Batches",
        value:25,
        icon:activebatches,
        trendline:trendup,
        desc:"Boys:89.2% | Girls:87.8%",
         background:COLORS.bg_yellow
    },
    {
        title: "Total Students",
        value:200,
        icon:totalstudents,
        trendline:trendown,
         desc: "Low admission compared to before",
         descColor: COLORS.bg_red,   
         background: COLORS.bg_medium_blue
    },
   
]


export const online = [
    {
       
        topic:"Full Stack Web Development",
        batch:"FSWD Batch A1",
        time:"9.00 AM - 11:00 AM",
        name:"SaraJhonson",
        student:"20 Students",
        status:"Ongoing",

    },
    {
        
        topic:"Data Science & Machine Learning",
        batch:"DS-ML Batch B1",
        time:"11.00 AM - 1:00 PM",
        name:"John Mike",
        student:"30 Students",
        status:"Upcoming",

    },
    {
      
        topic:"Digital Marketing",
        batch:"DM Batch C1",
        time:"9.00 AM - 11:00 AM",
        name:"MohanKumar",
        student:"25 Students",
        status:"Upcoming",

    },


]


export const offline=[
     {
       
        topic:"UI/UX Desiging",
        batch:"UI/UX Batch A1",
        time:"9.00 AM - 11:00 AM",
        name:"SaraJhonson",
        student:"20 Students",
        status:"Ongoing",

    },
    {
        
        topic:"Data Science & Machine Learning",
        batch:"DS-ML Batch B1",
        time:"11.00 AM - 1:00 PM",
        name:"SaraJhonson",
        student:"15 Students",
        status:"Upcoming",

    },
    {
      
        topic:"Full Stack Web Development",
        batch:"FSWD Batch A1",
        time:"9.00 AM - 11:00 AM",
        name:"John Mike",
        student:"20 Students",
        status:"Upcoming",

    },

]


export const attentionFeedData = [
  {
    icon: attendence,
    title: 'Attendence submitted by batch-1',
    subtitle: 'FSWD Batch A1',
    action: 'Download',
    color: COLORS.text_green
  },
  {
    icon: staffavail,
    title: 'Staff availability conflict tomorrow',
    subtitle: '2 instructors on leave simultaneously',
    action: 'Take action',
    color: COLORS.bg_red
  },
  {
    icon: ticketstudent,
    title: 'Ticket Raised by student to change the timing',
    subtitle: 'Student requested to change the class timing',
    action: 'Take action',
    color: COLORS.text_blue
  }
];
