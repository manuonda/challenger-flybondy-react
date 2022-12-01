import { Flight, Trip } from "./types/type";
import DATA from "../src/db/dataset.json";

const api = {
    trips : {
        list: async(origin: Flight['origin']): Promise<Trip[]> => {
            return [];
        }
    },
    origins: {
        list: async():Promise<Flight['origin'][]> => {
            const origins = new Set<Flight["origin"]>();
            for(let flight of DATA) {
                origins.add(flight.origin)
            }
            return Array.from(origins);
        }
    }
}

export default api;