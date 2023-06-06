import { Box } from "@mui/material";
import MiniDrawer from "../../components/MiniDrawer";
import usePageRender from '../../components/usePageRender'

const Dashboard = () => {
    usePageRender('/');
    return (
        <main className="context">
            <Box display={"flex"}>
                <MiniDrawer/>
            </Box>
        </main>
    );
}

export default Dashboard;