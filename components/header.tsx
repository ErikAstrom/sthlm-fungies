import Icon from "./icon";

interface Props {
    title: string;
}

export default function Header({ title }: Props) {
    return (
        <nav className="h-[80px] w-full border-b-2 border-black flex items-center justify-center bg-gray-300 shadow-md">
            <Icon color="black" size={32} iconId="mushroom" rounded />
            <h1 className="text-4xl font-bold px-2"
                style={{ fontSize: '2.5rem', paddingLeft: '8px' }}
                >{title}</h1>
        </nav>
    )
}