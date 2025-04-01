import useRole from "../../../hooks/useRole";
import AdminSidebar from "./AdminSidebar/AdminSidebar";
import CustomerSidebar from "./CustomerSidebar/CustomerSidebar";


const Sidebar = () => {

    const [role] = useRole()

    return (
        <div>
            {role == 'admin' && <AdminSidebar></AdminSidebar>}
            {role == 'customer' && <CustomerSidebar></CustomerSidebar>}
        </div>
    );
};

export default Sidebar;