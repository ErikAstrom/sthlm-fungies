import Icons from 'assets/icons.svg';

interface Props {
    color: string;
    size: number;
    iconId: string;
    rounded?: boolean;
}

export default function Icon({ color, size, iconId, rounded }: Props) {
    return (
        <div className={'inline-block' + (rounded ? ' p-1 bg-white rounded-full' : '')} 
        // Temporary fix due to tailwind being a little bitch
        style={{backgroundColor: 'white', padding: '4px', borderRadius: '50%'}}>
            <svg fill={color} width={size} height={size}>
                <use xlinkHref={`${Icons.src}#${iconId}`} />
            </svg>
        </div>
    )
}