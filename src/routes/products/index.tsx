import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";

export const useLoaderApiItems = routeLoader$(async () => {
    const dataApi = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const json = await dataApi.json()
    return json as {
        "userId": number,
        "id": number,
        "title": string
        "completed": boolean
    }[]
})

export default component$(() => {
    const apiLoader = useLoaderApiItems()

    return (
        <>
            <ul>
                {apiLoader.value.map((item, k) => <li key={k}>
                    <Link href={'/products/' + item.id}>{item.title}: {item.id}</Link>
                </li>)}
            </ul>
        </>
    )
})