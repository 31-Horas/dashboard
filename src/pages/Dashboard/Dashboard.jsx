import { Box } from "@mui/material";
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'

const Dashboard = () => {
    return (
        <main className="context">
            <Topbar />
            <Box display={"flex"}>
                {/* <Sidebar/> */}
            </Box>
        </main>
    );
}

export default Dashboard;