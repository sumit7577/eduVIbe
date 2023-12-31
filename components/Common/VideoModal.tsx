"use client"

import type { StaticImageData } from 'next/image'
import { useState, useRef, Fragment, useEffect } from 'react'
import Image from 'next/image'
import { HeroIcon } from '../Icon'
import { Dialog, Transition } from '@headlessui/react'
import { videoDetailsType } from '@/networking/types'


interface ModalVideoProps {
    thumb: StaticImageData | string
    thumbWidth: number
    thumbHeight: number
    thumbAlt: string
    video: videoDetailsType
    videoWidth: number
    videoHeight: number
}

export default function VideoModal({
    thumb,
    thumbWidth,
    thumbHeight,
    thumbAlt,
    video,
    videoWidth,
    videoHeight,
}: ModalVideoProps) {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    return (
        <div className='relative flex'>
            <div className="flex flex-col justify-center">
                <Image src={thumb} width={thumbWidth} height={thumbHeight} alt={thumbAlt} />
                <div className='absolute top-18 flex items-center justify-center w-full'>
                    <button className='max-w-fit shadow-lg bg-white rounded-full font-medium' onClick={() => { setModalOpen(true) }}>
                        <HeroIcon iconName='PlayCircleIcon' className='h-12 w-12 text-primary' solid />
                    </button>
                </div>

            </div>
            <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
                <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>

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
                            <Dialog.Panel className="w-[90vw] md:w-[100vh] h-[50%] bg-black overflow-hidden rounded-md shadow-lg">
                                <div className='relative h-full'>
                                    <iframe src={`https://iframe.mediadelivery.net/embed/${video.videoLibraryId}/${video.guid}?autoplay=true&loop=false&muted=false&preload=true&responsive=true`} loading="lazy" className='border-none h-full w-full absolute' allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowFullScreen={true}>
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
