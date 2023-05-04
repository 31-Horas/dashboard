import { Box } from "@mui/material";
import Topbar from '../../components/Topbar'
// import Sidebar from '../../components/Sidebar'
import Sidebar from "../../components/Sidebar/Sidebar";
import MiniDrawer from "../../components/MiniDrawer";

const Dashboard = () => {
    return (
        <main className="context">
            <Topbar />
            <Box display={"flex"}>
                {/* <Sidebar/> */}
                {/* <Sidebar/> */}
                <MiniDrawer/>
            </Box>
        </main>
    );
}

export default Dashboard;