import { defineStore } from 'pinia';
import { ref } from 'vue';

//ype & client import
import createClient from "openapi-fetch";
import type { components } from "../generated/CatCatalog";
import type { paths } from "../generated/CatCatalog";
type CatBreeds = components['schemas']['CatCatalog.CatBreeds'];

const apiclient = createClient<paths>({ baseUrl: "http://localhost:4004/odata/v4/cat-catalog" });

export const useCatCatalog = defineStore('catCatalog', () => {

    const catBreeds = ref<CatBreeds[] | null>(null);

    /**
     * @description Fetches all cat breeds from the remote sorce
     */
    async function fetchCatBreeds(): Promise<boolean | Error> {

        try {
            // api call
            const {response, data} = await apiclient.GET('/CatBreeds');

            if (!response.ok) throw new Error('Malformed response by mode endpoint');
            if (!data) throw new Error('Failed to fetch mode details / malformed data');

            data.value != undefined ? catBreeds.value = data.value : null;

            return true;
        } catch (err: any) {
            return new Error(err)
        }
      }

    return {
        catBreeds,
        fetchCatBreeds
    }
});