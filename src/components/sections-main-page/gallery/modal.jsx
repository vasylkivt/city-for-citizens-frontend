'use client';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import ArrowLeftIcon from '@/assets/icons/gallery/arrow-left.svg';
import ArrowRightIcon from '@/assets/icons/gallery/arrow-right.svg';
import IconLocation from '@/assets/icons/gallery/location.svg';
import CloseIcon from '@/assets/icons/gallery/close.svg';

import './slider.css';
import { SlideImage } from './image-slide';

export function ModalGallery({ selectedImage, modalClose, events }) {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        modalClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalClose]);

  return (
    <div
      className="backdrop fixed left-0 top-0 z-[1005] flex h-screen w-screen items-center justify-center bg-light-backdrop"
      onClick={handleBackdropClick}
    >
      <div className="gallery-swiper-button-prev absolute bottom-[50%] left-10 z-[1201] hidden h-12 w-12 cursor-pointer rounded-[40px] bg-light-button-default text-center opacity-50 hover:bg-light-button-hover hover:opacity-100 active:bg-light-button-pressed dark:bg-dark-button-default dark:hover:bg-dark-button-hover dark:hover:opacity-100 dark:active:bg-dark-button-pressed  tablet:block">
        <ArrowLeftIcon className="absolute left-[40%] top-[40%] h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform" />
      </div>
      <div className="gallery-swiper-button-next absolute bottom-[50%] right-10 z-[1201] h-12 w-12 cursor-pointer rounded-[40px] bg-light-button-default opacity-50 hover:bg-light-button-hover hover:opacity-100 active:bg-light-button-pressed dark:bg-dark-button-default dark:hover:bg-dark-button-hover dark:hover:opacity-100 dark:active:bg-dark-button-pressed  mobile:hidden tablet:block ">
        <ArrowRightIcon className="absolute left-[40%] top-[40%] h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform" />
      </div>
      <div className="relative z-[1200] tablet:h-[394px] tablet:w-[700px] desktop:h-[563px] desktop:w-[1000px] desktop_xl:h-[720px] desktop_xl:w-[1280px]">
        <button
          type="button"
          className="gallery-btn-close absolute right-[-24px] top-[-24px] z-[1201] flex h-12 w-12 items-center justify-center rounded-[40px] bg-light-button-default opacity-50 hover:bg-light-button-hover hover:opacity-100 active:bg-light-button-pressed dark:bg-dark-button-default dark:hover:bg-dark-button-hover dark:hover:opacity-100 dark:active:bg-dark-button-pressed"
          onClick={modalClose}
        >
          <CloseIcon
            width="24"
            height="24"
            className={'w-[24px] text-admin-dark'}
          />
        </button>
        <Swiper
          className="gallery-modal  transparent h-full w-full "
          initialSlide={events.findIndex(
            event => event.id === selectedImage.id
          )}
          modules={[Navigation]}
          spaceBetween={20}
          loop={true}
          navigation={{
            prevEl: '.gallery-swiper-button-prev',
            nextEl: '.gallery-swiper-button-next',
          }}
        >
          {events?.map((event, index) => (
            <SwiperSlide key={index} className="overflow-hidden rounded-lg">
              <SlideImage event={event} />
              <div className="absolute bottom-0 left-0 flex w-full flex-col justify-center gap-2 rounded-lg bg-light-secondary p-4 text-start  shadow-gallery dark:bg-dark-secondary">
                <p className="dark:text-li font-ubuntu text-[20px]/[22px] font-medium text-light-head dark:text-dark-head tablet:text-[24px]/[26.4px]">
                  {event.eventTitle}
                </p>
                <div className="flex items-center gap-2 text-start">
                  <IconLocation width="24px" height="24px" />
                  <p className="font-roboto text-sm font-normal leading-[19.6px] text-light-head dark:text-dark-head">
                    {event.eventAddress.city} {event.eventAddress.street}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
