import { component$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";

export const useLoaderApiDetailItem = routeLoader$(async ({ params }) => {
    const { id } = params
    const dataApi = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const json = await dataApi.json()
    return json as {
        "userId": number,
        "id": number,
        "title": string
        "completed": boolean
    }
})

export default component$(() => {
    const actionDetailItem = useLoaderApiDetailItem()
    const location = useLocation()
    return (
        <>
            <div>
                Detail Producto es el id: {location.params.id}
            </div>
            <div>
                {actionDetailItem.value.id}
            </div>
            <div>
                {actionDetailItem.value.completed}
            </div>
            <div>
                {actionDetailItem.value.title}
            </div>
        </>
    )
})