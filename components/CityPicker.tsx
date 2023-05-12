'use client';

import { useState } from 'react';
import { Country } from 'country-state-city';
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

const options = Country.getAllCountries().map(country => ({
    value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isoCode: country.isoCode
    },
    label: country.name
}));

const CityPicker = () => {
    const [selectedCountry, setSelectedCountry] = useState<option>(null);

    const handleSelectedCountry = (option: option) => {
        setSelectedCountry(option);
    };

    return (
        <div className='space-y-4'>
            <div className='space-y-2'>
                <div className='flex items-center space-x-2 text-white/80'>
                    <GlobeIcon className='h-5 w-5 text-white' />
                    <label htmlFor="country">Country</label>
                </div>
                <Select
                    className='text-black'
                    value={selectedCountry}
                    onChange={handleSelectedCountry}
                    options={options}
                />
            </div>
        </div>
    );
};

export default CityPicker;