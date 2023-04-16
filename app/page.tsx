"use client"

import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Button, Card, Link, Typography } from "@mui/material"
import funghiesHero from "assets/funghiesHero.png"
import DiscordForm from "components/discordForm"
import Image from "next/image"

export default function Home() {
    return (
        <Box component="main" sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2, width: '100%', height: 350, backgroundPosition: 'center', backgroundSize: 'cover', position: 'relative', backgroundImage: `url(${funghiesHero.src})` }}>
                {/* <Image src={funghiesHero.src} alt="Under konstruktion skylt" width={350} height={350}/> */}
            </Box>
            <Button variant="contained" startIcon={<InstagramIcon />}
                onClick={() => window.open('https://www.instagram.com/sthlm.funghies/', '_blank')}
                // tar jag bort href så blir knappens utseende urbuggat - tror det har o göra med discord
                sx={{ fontWeight: 'bold', appearance: 'button' }} href="#">instagram</Button>
            <DiscordForm />
        </Box>
    )
}