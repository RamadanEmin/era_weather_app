import { getClient } from "@/apollo-client";
import CalloutCard from '@/components/CalloutCard';
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";

export const revalidate = 60;

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      latitude: lat,
      longitude: long,
      timezone: "EET",
    },
  });

  const results: Root = data.myQuery;

  console.log(results.daily);

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <div className="flex-1 p-5 lg:p-10">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-sm text-gray-400">
              Last Update at:{" "}
              {new Date(results.current_weather.time).toLocaleString()} (
              {results.timezone})
            </p>
          </div>
          <div className="m-2 mb-10">
            <CalloutCard message='This is where GPT-4 Summary will go!' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default WeatherPage;
