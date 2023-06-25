'use client';
import Button from '@/components/ui/Button';
import { FC, useState } from 'react';
import {signIn} from 'next-auth/react';
import Logo from '@/components/svg/logo.svg'
import {toast} from 'react-hot-toast';

console.log(Logo);

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function loginWithGoogle(){
    setIsLoading(true);
    try {
      await signIn('github')
    } catch (error) {
      //display error message user
      toast.error('Something went wrong with your login.')
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <>
      <div className='flex min-h-full items-center justify-center py-12 sm:px-6 lg:px-8'>
        <div className='w-full flex-col items-center max-w-md space-y-8'>
          <div className='flex flex-col items-center gap-8'>
            logo
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
              Sign in to your account
            </h2>
            <Button
              isLoading={isLoading}
              type='button'
              className='max-w-sm mx-auto w-full'
              onClick={loginWithGoogle}
            >
              {isLoading ? null : (
              <Logo className='mr-2'/>
            )}
            Github
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
