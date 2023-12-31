import {CarProps, FilterProps} from '@/types';


const apiKeyForRequest = process.env.NEXT_PUBLIC_API_KEY_FOR_REQUEST;
const apiKeyForImages = process.env.NEXT_PUBLIC_API_KEY_FOR_IMAGES;


if (!apiKeyForRequest || !apiKeyForImages) {
    throw new Error('API keys are not defined in the environment variables.');
}

export async function fetchCars(filters: FilterProps) {
    const headers = {
        'X-RapidAPI-Key': apiKeyForRequest,
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const {manufacturer, year, fuel, limit, model} = filters
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers
    })

    const result = await response.json()

    return result

}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50 * 80; // Base rental price per day in dollars
    const mileageFactor = 24; // Additional rate per mile driven
    const ageFactor = 15; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};


export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const {make, model, year} = car;

    url.searchParams.append('customer', apiKeyForImages  || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}


export const updateSearchParams = (type:string, value:string) => {
    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(type,value)
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    return newPathname
}

// export async function fetchCars(filters: FilterProps) {
// //     const headers = {
// //         'X-RapidAPI-Key': 'e175222d4cmshf4c8eed5fd029f0p134b7djsn3c45bc3dcc0b',
// //         'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
// //     }
// //
// //     const {manufacturer, year, fuel, limit, model} = filters
// //     const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
// //         headers: headers
// //     })
// //
// //     const result = await response.json()
// //
// //     return result
// //
// // }


/*
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const {make, model, year} = car;

    url.searchParams.append('customer', 'hrjavascript-mastery' || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}*/
