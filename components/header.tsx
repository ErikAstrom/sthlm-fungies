"use client"
import { Box, Typography } from "@mui/material";

import Icon from "./icon";

interface Props {
    title: string;
}

export default function Header({ title }: Props) {
    return (
        <Box component="nav" 
        sx={{height: '80px', width: '100%', borderBottom: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray', boxShadow: 'md'}}>
            <Icon color="black" size={32} iconId="mushroom" rounded />
            <Typography sx={{ fontSize: '2.5rem', paddingLeft: '8px' }}>{title}</Typography>
        </Box>
    )
}