import { Dashboard, Home, Projects, Reporting, Settings, Support, Tasks, Users, User, User2, User3, User4, User5 } from '../assets/icons'
import { SidebarType, userAccountDetailsType } from '../types/DataType'




export const navigationData: SidebarType[] = [
    {
        id: 1,
        title: 'Home',
        icon: Home,
        route: 'home',


    },
    {
        id: 2,
        title: 'Dashboard',
        icon: Dashboard,
        route: 'dashboard',


    },
    {
        id: 3,
        title: 'Projects',
        icon: Projects,
        route: 'projects',


    },
    {
        id: 4,
        title: 'Tasks',
        icon: Tasks,
        route: 'tasks',


    }, {
        id: 5,
        title: 'Reporting',
        icon: Reporting,
        route: 'reporting',


    }, {
        id: 6,
        title: 'Users',
        icon: Users,
        route: 'users',


    }
]
export const sidebarFooterData: SidebarType[] = [
    {
        id: 1,
        title: 'Support',
        icon: Support,
        route: 'support',


    },
    {
        id: 2,
        title: 'Settings',
        icon: Settings,
        route: 'settings',


    },

]

export const tabsData: string[] = ['My details', 'Profile', 'Password', 'Team', 'Plan', 'Billing', 'Notifications', 'Integrations', 'API'];

export const userProfile = [
    { 'email': 'olivia@untitledui.com', 'alternativeEmail': 'billing@untitledui.com', 'visa': ['1234', '06/2024'], 'mastercard': ['1234', '06/2024'] }
]
export const userAccountDetails: userAccountDetailsType[] = [

    {
        id: 1,
        invoice: 'Basic Plan - Dec 2022',
        amount: 'USD $10.00',
        date: 'Dec 1, 2022',
        status: 'Paid',
        noOfUsers: 7,
        users: [User, User2, User3, User4, User5]

    },
    {
        id: 2,
        invoice: 'Basic Plan - Nov 2022',
        amount: 'USD $10.00',
        date: 'Nov 1, 2022',
        status: 'Paid',
        noOfUsers: 6,
        users: [User, User2, User3, User4, User5]
    },
    {
        id: 3,
        invoice: 'Basic Plan - Oct 2022',
        amount: 'USD $10.00',
        date: 'Oct 1, 2022',
        status: 'Paid',
        noOfUsers: 5,
        users: [User, User2, User3, User4, User5]
    },
    {
        id: 4,
        invoice: 'Basic Plan - Sep 2022',
        amount: 'USD $10.00',
        date: 'Sep 1, 2022',
        status: 'Paid',
        noOfUsers: 3,
        users: [User, User2, User3]
    },
    {
        id: 5,
        invoice: 'Basic Plan - Aug 2022',
        amount: 'USD $10.00',
        date: 'Aug 1, 2022',
        status: 'Paid',
        noOfUsers: 4,
        users: [User, User2, User3, User4]
    },
    {
        id: 6,
        invoice: 'Basic Plan - Jul 2022',
        amount: 'USD $10.00',
        date: 'Jul 1, 2022',
        status: 'Paid',
        noOfUsers: 4,
        users: [User, User2, User3, User4]
    },
    {
        id: 7,
        invoice: 'Basic Plan - Jun 2022',
        amount: 'USD $10.00',
        date: 'Jun 1, 2022',
        status: 'Paid',
        noOfUsers: 4,
        users: [User, User2, User3]
    },
]


