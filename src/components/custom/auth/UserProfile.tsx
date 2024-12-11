import { Options } from '@/provider/AuthOption'
import { getServerSession } from 'next-auth'
import React from 'react'
import SignInButton from '@/components/custom/auth/SignInButton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import SignOutButton from '@/components/custom/auth/SignOutButton'

export default async function UserProfile() {
    const session = await getServerSession(Options)
    return (
        <div>
            {
                session ? (
                    <Popover aria-label='profile'>
                        <PopoverTrigger asChild>
                            <Avatar className='size-7'>
                                <AvatarImage src={session.user.image as string} alt={session.user.name} loading='lazy' decoding='async' />
                                <AvatarFallback>{session.user.name}</AvatarFallback>
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className='space-y-2'>
                            <div className='flex items-center gap-4'>
                                <Avatar className='size-7'>
                                    <AvatarImage src={session.user.image as string} alt={session.user.name} />
                                    <AvatarFallback>{session.user.name}</AvatarFallback>
                                </Avatar>
                                <div className='text-xs grid'>
                                    <span className='font-semibold'>{session.user.name}</span>
                                    <span>{session.user.email.split("@")[0]}</span>
                                </div>
                            </div>
                            <div className='w-full grid gap-2'>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="ghost" className='justify-start focus-visible:ring-0'>
                                            Manage Account
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className='max-w-3xl h-[40rem]'>
                                        <DialogHeader>
                                            <DialogTitle>
                                                Account
                                            </DialogTitle>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                                <SignOutButton className='justify-start focus-visible:ring-0'>
                                    Sign Out
                                </SignOutButton>
                            </div>
                        </PopoverContent>
                    </Popover>
                ) : (
                    <div>
                        <SignInButton />
                    </div>
                )
            }
        </div>
    )
}