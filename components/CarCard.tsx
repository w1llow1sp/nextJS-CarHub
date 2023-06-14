'use client'
import React, {useState} from 'react';
import {CarProps} from '@/types';
import Image from 'next/image'
import CustomButton from './CustomButton';
import {calculateCarRent, generateCarImageUrl} from '@/utils';
import CarDetails from './CarDetails';

interface CarCardProps {
    car: CarProps
}

const CarCard = ({car}: CarCardProps) => {
    const {city_mpg, year, make, model, transmission, drive} = car
    const [isOpen, setIsOpen] = useState(false);

    const carRent = calculateCarRent(city_mpg, year)
    return (
        <div className={'car-card group'}>
            <div className={'car-card__content'}>
                <h2 className={'car-card__content-title'}>
                    {make} {model}
                </h2>
            </div>

            <p className={'flex mt-6 text-[32px] font-extrabold'}>
                <span className={'self-start text-[14px] font-semibold'}>

                </span>
                {carRent}
                <span className={'self-start text-[14px] font-medium'}>
                     руб/день
                </span>
            </p>

            <div className={'relative w-full h-40 my-3 object-contain'}>
                <Image
                    src={generateCarImageUrl(car,'10')}
                    fill priority
                    alt={'Модель машины'}
                    className={'object-contain'}
                />
            </div>

            <div className={'relative flex w-full mt-2'}>
                <div className={'flex group-hover:invisible w-full justify-between text-gray'}>
                    <div className={'flex flex-col justify-center items-center gap-2'}>
                        <Image src={'/steering-wheel.svg'}
                               width={20}
                               height={20}
                               alt={'Картинка руля'}/>
                        {transmission === 'a' ? 'Автомат' : 'Механика'}
                    </div>

                </div>
                {/**/}
                <div className={'flex group-hover:invisible w-full justify-between text-gray'}>
                    <div className={'flex flex-col justify-center items-center gap-2'}>
                        <Image src={'/tire.svg'}
                               width={20}
                               height={20}
                               alt={'Картинка руля'}/>
                        {drive.toUpperCase()}
                    </div>

                </div>
                {/**/}
                <div className={'flex group-hover:invisible w-full justify-between text-gray'}>
                    <div className={'flex flex-col justify-center items-center gap-2'}>
                        <Image src={'/gas.svg'}
                               width={20}
                               height={20}
                               alt={'Картинка канистры'}/>
                        {city_mpg} MPG
                    </div>
                </div>

                <div className={'car-card__btn-container'}>
                    <CustomButton
                        title={'Посмотреть еще'}
                        containerStyles={'w-full py-[16px] rounded-full bg-primary-blue'}
                        textStyles={'text-white text-[14px] leading-[16px] font-bold'}
                        rightIcon={'/right-arrow.svg'}
                        handleClick={() => setIsOpen(true)}/>
                </div>
            </div>
            <CarDetails
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                car={car}/>
        </div>
    );
};

export default CarCard;
