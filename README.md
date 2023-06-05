## ERA_weather_app

You can view the site here
[Click Me](https://weather-app-open-ai.vercel.app/)


## :books: Table of Contents

- [About](#raised_hands-about)
- [Technologies used](#gear-technologies-used)
- [Features](#pushpin-features)
- [Before you start](#before-you-start)
- [Author](#star-author)

## :raised_hands: About
 - A comprehensive weather application that utilizes the power of TypeScript, Next.js, Tailwind CSS, React, OpenAI GPT-4, Stepzen, Tremor 2.0, and Open Meteo. The app offers real-time weather updates, a dynamic city picker. It also includes innovative features like AI-generated weather summaries powered by OpenAI GPT-4, and an optimized UI/UX.
   
## :gear: Technologies used
- Next.js 13
- TypeScript
- StepZen
- Tremor
- Tailwind
- GraphQL

## :pushpin: Features
<ul>
  <li>Home page</li>
  <li>City page</li>
</ul>

## Before you start
1. Create an account on https://stepzen.com/
2. Install StepZen globally on your machine: npm install -g stepzen
3. Log in with your StepZen account: stepzen login -a username
4. Enter your Admin Key, copy and paste from the StepZen Getting Started page
5. Initialize StepZen in your project: stepzen init
6. Import the rest api url: stepzen import curl "https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max&current_weather=true&timezone=Europe%2FLondon"
7. Copy your API Key to your environment variable local file.
8. Log in with your Chat GPT account, create OPENAI_API_KEY and copy in your environment variable local file.

How to use this App?

1. Clone this **repository** to your local computer.
2. Open **terminal** in root directory.
3. Type and Run `npm install` or `yarn install`.
4. Once packages are installed, you can start this app using `npm run dev`.
5. Now app is fully configured and you can start using this app :+1:.

## :star: Author

Ramadan Emin

<img src="/images/pic2.png"  width= 800px height= 400px>
<img src="/images/pic3.png"  width= 800px height= 400px>
<img src="/images/pic4.png"  width= 800px height= 400px>