"use client"

import { Box, Typography } from "@mui/material";
import Icon from "./icon";

//TODO move to core and make it more generic, loop over keys
export default function Footer() {

    return (
        <Box component="footer" sx={{height: '80px', width: '100%', borderTop: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray', boxShadow: 'md'}}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Icon color="black" size={32} iconId="mushroom" />
                <Typography sx={{ fontSize: '2rem', paddingLeft: '4px' }}>Funghies</Typography>
            </Box>
        </Box>
    )
}