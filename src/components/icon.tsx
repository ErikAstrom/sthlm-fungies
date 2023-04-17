import { Box } from "@mui/material";
import Icons from "assets/icons.svg";
import { IconProps } from "src/data/types";


export default function Icon({ color, size, iconId, rounded }: IconProps) {
    return (
        <Box className={'inline-block' + (rounded ? ' p-1 bg-white rounded-full' : '')}
            // Temporary fix due to tailwind being a little bitch
            style={rounded && { backgroundColor: 'white', padding: '4px', borderRadius: '50%' }}>
            <svg fill={color} width={size} height={size}>
                <use xlinkHref={`${Icons.src}#${iconId}`} />
            </svg>
        </Box>
    )
}