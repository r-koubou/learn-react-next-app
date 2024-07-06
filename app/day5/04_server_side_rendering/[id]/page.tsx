import { cache } from "react";

import { BackToTop } from "@/app/components/BackToTop";

type Params = {
    id: string;
}

async function getData(id:string) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { cache: "no-store" }
    );

    if( !res.ok ) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function ServerSideRenderedPage({ params } : { params: Params}) {
    const data = await getData(params.id);

    return (
        <div>
            <h1>Server Side Rendered Page</h1>
            <p>Data: {JSON.stringify(data)}</p>
            <p>This page was rendered at: {new Date().toISOString()}</p>

            <BackToTop />
        </div>
    );
}
