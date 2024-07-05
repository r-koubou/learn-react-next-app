import { BackToTop } from "@/app/components/BackToTop";

async function getData() {
    return {
        title: 'Dummy',
        data: [
            {id: 1, name: 'John'},
            {id: 2, name: 'Alice'},
        ]
    }
}

export default async function StaticDataPage() {
    const data = await getData();

    return (
        <div>
            <h1>Static Page with Data</h1>
            <p>Data: {JSON.stringify(data)}</p>

            <BackToTop />
        </div>
    );
}
