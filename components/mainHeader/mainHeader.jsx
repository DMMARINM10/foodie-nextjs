import Link from 'next/link'
import Image from 'next/image'
import MainHeaderBackground from './mainHeaderBackground'
import logoImg from '@/assets/logo.png'
import classes from '@/styles/components/mainHeader/mainHeader.module.css'
import Navbar from './navbar'

const MainHeader = () => {
  return (
    <header className={classes.header}>
        <MainHeaderBackground />

        <Link className={classes.logo} href={"/"}>
            <Image src={logoImg} alt='Logo' priority />
            NextLevel Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Navbar href={"/meals"}>Browse Meals</Navbar>
                </li>
                <li>
                    <Navbar href={"/community"}>Foodies Community</Navbar>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader