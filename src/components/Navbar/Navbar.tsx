import React from 'react';
import logo from '@/assests/logo.jpg';
import {IoIosBody} from 'react-icons/io';
import './Navbar.css';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <Image src={logo} alt="logo" />
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/profile">IoIosBody</Link>
            <button>Sign Out</button>
        </nav>
    );
}

export default Navbar;
