import React from 'react';
import Image from 'next/image';
import {
  MenuIcon,
  HomeIcon,
  ChevronDownIcon,
  SearchIcon,
} from '@heroicons/react/solid';
import {
  StarIcon,
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline';
import { signIn, useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm items-center'>
      <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
        <Link href='/'>
          <Image
            objectFit='contain'
            src='https://links.papareact.com/fqy'
            layout='fill'
          />
        </Link>
      </div>

      <div className='flex items-center mx-7 xl:min-w-[300px]'>
        <HomeIcon className='h-5 w-5' />
        <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
        <ChevronDownIcon className='h-5 w-5 text-gray' />
      </div>

      {/** Search box */}
      <form className='flex flex-1 items-center space-x-2 border-gray-200 rounded-sm bg-gray-100 px-3 py-1'>
        <SearchIcon className='h-6 w-6 text-gray-400' />
        <input
          className='flex-1 bg-transparent outline-none'
          type='text'
          placeholder='Search Reddit'
        />
        <button type='submit' hidden />
      </form>

      <div className='hidden text-gray-500 space-x-2 items-center mx-5  lg:inline-flex'>
        <SparklesIcon className='icon' />
        <GlobeIcon className='icon' />
        <VideoCameraIcon className='icon' />
        <hr className='h-10 border border-gray-100' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <PlusIcon className='icon' />
        <SpeakerphoneIcon className='icon' />
      </div>
      <div className='ml-5 flex items-center lg:hidden'>
        <MenuIcon className='icon' />
      </div>

      {/** Sign in / Sign out button */}
      {session ? (
        <div
          onClick={() => signOut()}
          className='hidden lg:flex items-center border border-gray-100 space-x-2 p-2 '
        >
          <div className='relative h-5 w-5 flex-shrink-0'>
            <Image
              objectFit='contain'
              src='https://links.papareact.com/23l'
              layout='fill'
              alt='SignIn/Out'
            />
          </div>
          <div className='flex-1 text-xs'>
            <p className='truncate'>{session?.user?.name}</p>
            <p className='text-gray-400'>1 Karma</p>
          </div>
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className='hidden lg:flex items-center border border-gray-100 space-x-2 p-2'
        >
          <div className='relative h-5 w-5 flex-shrink-0'>
            <Image
              objectFit='contain'
              src='https://links.papareact.com/23l'
              layout='fill'
              alt='SignIn/Out'
            />
          </div>
          <p className='text-gray-400'>Sign In</p>
        </div>
      )}
    </div>
  );
};

export default Header;
