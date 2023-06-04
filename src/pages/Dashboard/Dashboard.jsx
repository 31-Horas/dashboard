import { Box } from "@mui/material";
import MiniDrawer from "../../components/MiniDrawer";

const Dashboard = () => {
    return (
        <main className="context">
            <Box display={"flex"}>
                <MiniDrawer/>
            </Box>
        </main>
    );
}

export default Dashboard;