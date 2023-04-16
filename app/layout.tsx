import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <>
      <nav className="h-[80px] w-full border-b-2 border-black flex items-center justify-center">header..</nav>
      <main>{children}</main>
    <footer className='border-t-2 border-black flex items-center justify-center h-[80px]'>footer..</footer>


    </>
  )
}
