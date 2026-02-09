import nhome from './normal/dashboard.svg'
import nlead from './normal/leads.svg'
import ntele from './normal/tele.svg'
import nfees from './normal/fees.svg'
import nreport from './normal/report.svg'
import nticket from './normal/ticket.svg'

import chome from './clickable/home.svg'
import clead from './clickable/leads.svg'
import ctele from './clickable/telecaller.svg'
import cfees from './clickable/fees.svg'
import creport from './clickable/report.svg'
import cticket from './clickable/ticket.svg'


class NavbarIcons {
    normal = {
        home:nhome,
        tele:ntele,
        lead:nlead,
        fees:nfees,
        report:nreport,
        ticket:nticket
    }

    clickable = {
        home:chome,
        tele:ctele,
        lead:clead,
        fees:cfees,
        report:creport,
        ticket:cticket,
    }
}

export default new NavbarIcons()