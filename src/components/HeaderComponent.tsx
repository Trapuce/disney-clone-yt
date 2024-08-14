import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "./assets/ds-removebg-preview.png"
import { ModeToggle } from './ModeToggle'
import SearchInput from './SearchInput'
import GenreDropDown from './GenreDropDown'
import {ChevronDown} from "lucide-react"
export default function HeaderComponent() {
  return (
    <div className='fixed z-20 top-0 w-full p-5 flex items-center justify-between bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900'>
        <Link href="/" className='mr-10'>
                <Image alt='logo' src={logo} width={120} height={100} className='cursor-pointer invert-0 dark:invert '/>
        </Link>
         <div className='flex space-x-2'>
          <GenreDropDown />
         <SearchInput />
            <ModeToggle />
         </div>
    </div>
  )
}
