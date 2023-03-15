export interface SidebarType {
    id: number;
    title: string;
    icon: string;
    route: string;

}
export interface userAccountDetailsType {
    id: number;
    invoice: string;
    amount: string;
    date: string;
    status: string;
    noOfUsers: number;
    users: string[];

}
export type CheckboxProps = {
    label: string;
    icon: string;
    details: string;
    checked: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};