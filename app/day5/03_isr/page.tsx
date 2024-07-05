import { BackToTop } from "@/app/components/BackToTop";

async function getData() {
    return {
        time: new Date().toISOString(),
        randomNumber: Math.random()
    };
}


export default async function ISRPage() {

    const data = await getData();

    return (
        <div>
            <h1>ISR Page</h1>
            <p>revalidate: {revalidate}</p>
            <p>Generation Time: {data.randomNumber}</p>
            <p>Random Number: {data.randomNumber}</p>

            <h2>How to check</h2>
            <ul>
                <li>stop `npm run dev` if running</li>
                <li>run `npm run build`</li>
                <li>run `npm run start`</li>
            </ul>

            <BackToTop />
        </div>
    );
}

export const revalidate = 10;
