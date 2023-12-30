"use client"

import { Fragment, SetStateAction, Dispatch } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface PaymentProps {
    src: string,
    open: boolean,
    setModal: Dispatch<SetStateAction<boolean>>,
}
export default function PaymentModal({ src, open, setModal }: PaymentProps) {
    return (
        <div className='relative flex'>
            <Transition show={open} as={Fragment}>
                <Dialog onClose={() => setModal(()=>false)}>

                    {/* Modal backdrop */}
                    <Transition.Child
                        className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-out duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        aria-hidden="true"
                    />
                    {/* End: Modal backdrop */}

                    {/* Modal dialog */}
                    <Transition.Child
                        className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ttransition ease-out duration-200"
                        leaveFrom="oopacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="max-w-6xl mx-auto h-full flex items-center">
                            <Dialog.Panel className="w-[90vw] md:w-[100vh] h-[100%]  overflow-hidden rounded-md shadow-lg">
                                <div className='relative h-full'>
                                    <iframe srcDoc={src} loading="lazy" className='border-none h-full w-full absolute' allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowFullScreen={true}>
                                    </iframe>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </Transition.Child>
                    {/* End: Modal dialog */}

                </Dialog>
            </Transition>
        </div >

    )
}
