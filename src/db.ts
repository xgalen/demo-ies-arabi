// simulate db response delay
const DELAY_MS = 5000;

// dictionary containing the values of the db
// the key is a pair of the tariff id, the sku of the product
// the value is the price
const DB_VALUES: { [key: string]: number; } = {
    '1:sku1': 10,
    '1:sku2': 20,
    '2:sku1': 15,
    '2:sku2': 25,
    '3:sku1': 20,
    '3:sku2': 30,
    '4:sku1': 25,
    '4:sku2': 35,
};

const CACHE: { [key: string]: number; } = {}

export const db = {
    query: async (sql: string) => {
        console.time('query')
        console.log(`Querying: ${sql}`);

        if (CACHE[sql]) {
            console.log('cache hit')
            console.timeEnd('query')
            return CACHE[sql]
        }

        return new Promise((resolve) => {
            const delay = Math.random() * DELAY_MS;
            // simulate the delay of the database's response
            setTimeout(() => {
                console.log('db hit')
                CACHE[sql] = DB_VALUES[sql];
                console.timeEnd('query')
                return resolve(DB_VALUES[sql]);
            }, delay);
        });

    },
};