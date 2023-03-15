import { Dashboard, Home, Projects, Reporting, Settings, Support, Tasks, Users } from '../assets/icons'
import { SidebarType } from '../types/DataType'




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




