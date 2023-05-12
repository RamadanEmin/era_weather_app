'use client';

import Select from 'react-select';
import { GlobeIcon } from '@heroicons/react/solid';

type option = {
    value: {
        latitude: string;
        longitude: string;
        isoCode: string;
    };
    label: string;
} | null;

type cityOption = {
    value: {
        latitude: string;
        longitude: string;
        countryCode: string;
        name: string;
        stateCode: string;
    };
    label: string;
} | null;

const CityPicker = () => {

    return (
        <div className='space-y-4'>
            <div className='space-y-2'>
                <div className='flex items-center space-x-2 text-white/80'>
                    <GlobeIcon className='h-5 w-5 text-white' />
                    <label htmlFor="country">Country</label>
                </div>
                <Select
                    className='text-black'
                />
            </div>

        </div>
    );
};

export default CityPicker;