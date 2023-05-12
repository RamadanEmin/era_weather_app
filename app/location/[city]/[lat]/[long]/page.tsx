type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    }
}

async function WeatherPage({ params: { city, lat, long } }: Props) {

    return (
        <div className='flex flex-col min-h-screen md:flex-row'>
           
        </div>
    );
};
export default WeatherPage;