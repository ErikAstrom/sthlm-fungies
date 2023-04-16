import underConstruction from "assets/underconstruction.jpg"
import Image from "next/image"

export default function Home() {
    return (
        <main className="h-[80vh] w-full flex flex-col items-center flex-1">
            <div className="flex flex-col items-center my-5 p-5">
                <h1 className="text-[2rem]">Hemsidan är under konstruktion!</h1>
                <Image src={underConstruction.src} alt="Under konstruktion skylt" height={350} width={350} />
            </div>
            <div className="bg-gray-100 rounded p-5 shadow-sm">
                <a className="text-2xl hover:text-orange-800 font-bold" href="https://www.instagram.com/sthlm.funghies/">Klicka här och följ oss på instagram!</a>
                <p>
                    Välkommen till vår värld av ekologiska gourmet svampar, odlade med passion och omsorg mitt i den urbana miljön.
                </p>
                <p>
                    Vi förser high-end restauranger med de finaste svamparna som naturen har att erbjuda, samtidigt som vi minimerar vår miljöpåverkan och bidrar till en grönare stad.
                </p>
                <p>
                    Njut av den unika smakupplevelsen av våra svampar och följ med på en resa där hållbarhet och lyx möts.
                </p>
            </div>
        </main>
    )
}