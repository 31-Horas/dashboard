import { Box, IconButton } from "@mui/material";
// import { useContext } from "react";
// import { ColorModeContext, tokens } from "../../theme";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Topbar = () => {
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    // const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex-end" justifyContent="space-between" p={2}>
            <IconButton>
                <PersonOutlinedIcon />
            </IconButton>
      
        </Box>
    );
};

export default Topbar;