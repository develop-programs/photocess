"use client";
import React from 'react'
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from '@/components/ui/input';
import { PopoverClose } from '@radix-ui/react-popover';

export default function FloatingActionButton() {
    return (
        <section typeof="action button" aria-label="support button">
            <Popover>
                <PopoverTrigger asChild={true}>
                    <Button className="fixed bottom-6 right-6 md:bottom-12 md:right-12 rounded-full p-0 size-12 z-50" aria-label='support_button'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" className='size-6' viewBox="0 0 128 128" fill='white'>
                            <path d="M 64 6 C 40.3 6 21 25.3 21 49 L 21 54 C 21 55.7 22.3 57 24 57 C 25.7 57 27 55.7 27 54 L 27 49 C 27 28.6 43.6 12 64 12 C 84.4 12 101 28.6 101 49 L 101 67.599609 C 96.4 69.599609 93 75.8 93 83 C 93 90.2 96.4 96.400391 101 98.400391 L 101 99 C 101 100.7 102.3 102 104 102 C 105.7 102 107 100.7 107 99 L 107 98.400391 C 111.6 96.400391 115 90.2 115 83 C 115 75.8 111.6 69.599609 107 67.599609 L 107 49 C 107 25.3 87.7 6 64 6 z M 35 61 C 30.6 61 26.400781 63.199609 23.300781 67.099609 C 17.600781 67.599609 13 74.7 13 83 C 13 91.3 17.599219 98.400391 23.199219 98.900391 C 26.299219 102.70039 30.4 105 35 105 C 44.4 105 52 95.1 52 83 C 52 70.9 44.4 61 35 61 z M 93 61 C 83.6 61 76 70.9 76 83 C 76 95.1 83.6 105 93 105 C 94.7 105 96 103.7 96 102 C 96 100.3 94.7 99 93 99 C 87 99 82 91.7 82 83 C 82 74.3 87 67 93 67 C 94.7 67 96 65.7 96 64 C 96 62.3 94.7 61 93 61 z M 35 73 C 36.8 73 40 76.8 40 83 C 40 89.2 36.8 93 35 93 C 33.2 93 30 89.2 30 83 C 30 76.8 33.2 73 35 73 z M 104 108 C 102.3 108 101 109.3 101 111 C 101 113.2 99.2 115 97 115 L 72.5 115 C 71.2 111.5 67.9 109 64 109 L 60 109 C 55 109 51 113 51 118 C 51 123 55 127 60 127 L 64 127 C 67.9 127 71.2 124.5 72.5 121 L 97 121 C 102.5 121 107 116.5 107 111 C 107 109.3 105.7 108 104 108 z M 60 115 L 64 115 C 65.7 115 67 116.3 67 118 C 67 119.7 65.7 121 64 121 L 60 121 C 58.3 121 57 119.7 57 118 C 57 116.3 58.3 115 60 115 z"></path>
                        </svg>
                    </Button>
                </PopoverTrigger>
                <PopoverContent side={"top"} align="end" className="w-96 h-[30rem] p-0">
                    <div className="flex flex-col h-full">
                        {/* Chat Header */}
                        <div className="p-2 flex border-b items-center">
                            <h3 className="font-semibold">Chat Support</h3>
                            <PopoverClose asChild={true} className="ml-auto">
                                <svg width="24" height="24" viewBox="0 0 24 24" className='size-6' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.7916 4.00549 19.9945 6.20842 20.6563 9.02975C21.1146 10.9834 21.1146 13.0166 20.6563 14.9703C19.9945 17.7916 17.7916 19.9945 14.9703 20.6563C13.0166 21.1146 10.9834 21.1146 9.02975 20.6563C6.20842 19.9945 4.0055 17.7916 3.3437 14.9703C2.88543 13.0166 2.88543 10.9834 3.3437 9.02974C4.0055 6.20841 6.20842 4.00549 9.02975 3.3437ZM10.7139 9.90158C10.4896 9.67727 10.1259 9.67727 9.90158 9.90158C9.67727 10.1259 9.67727 10.4896 9.90158 10.7139L11.1877 12L9.90158 13.2861C9.67727 13.5104 9.67727 13.8741 9.90158 14.0984C10.1259 14.3227 10.4896 14.3227 10.7139 14.0984L12 12.8123L13.2861 14.0984C13.5104 14.3227 13.8741 14.3227 14.0984 14.0984C14.3227 13.8741 14.3227 13.5104 14.0984 13.2861L12.8123 12L14.0984 10.7139C14.3227 10.4896 14.3227 10.1259 14.0984 9.90158C13.8741 9.67727 13.5104 9.67727 13.2861 9.90158L12 11.1877L10.7139 9.90158Z" fill="currentColor" />
                                </svg>
                            </PopoverClose>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {/* Received Message */}
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
                                <div className="bg-slate-800 rounded-lg p-3 max-w-[80%]">
                                    <p className="text-sm">Hello! How can I help you today?</p>
                                </div>
                            </div>

                            {/* Sent Message */}
                            <div className="flex items-center justify-end gap-2">
                                <div className="bg-slate-600 text-white rounded-lg p-2 max-w-[80%]">
                                    <p className="text-sm">I need help with my account</p>
                                </div>
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="p-2 border-t">
                            <div className="flex items-center gap-2">
                                <Input placeholder='Enter your message' />
                                <Button className=''>
                                    send
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 9H3.5" stroke="#0095FF" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M5 15L4 15" stroke="#0095FF" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M4 12H2" stroke="#0095FF" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M12.0405 12.7649C12.4547 12.7649 12.7905 12.4291 12.7905 12.0149C12.7905 11.6007 12.4547 11.2649 12.0405 11.2649V12.7649ZM9.26758 12.7649H12.0405V11.2649H9.26758V12.7649Z" fill="#0095FF" />
                                        <path d="M20.5392 9.47684L11.8369 4.80857C9.74273 3.6852 7.41866 5.81469 8.13127 8.2039L9.18255 11.7286C9.23827 11.9154 9.23817 12.1144 9.18225 12.3012L8.13677 15.7931C7.42185 18.181 9.74261 20.3131 11.8379 19.1934L20.5356 14.5453C22.4865 13.5027 22.4886 10.5226 20.5392 9.47684Z" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </section>
    )
}