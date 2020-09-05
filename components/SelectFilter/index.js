import React from 'react';
import SelectSearch from 'react-select-search/dist/cjs';


export default function SelectFilter() {
    return (
        <SelectSearch
            closeOnSelect={false}
            printOptions="on-focus"
            multiple
            placeholder="JUEGOS"
            options={[
                { value: 'counter', name: 'Counter Strike: GO' },
                { value: 'lol', name: 'League of Legends' },
                { value: 'paladins', name: 'Paladins' },
                { value: 'rainbow', name: 'Rainbow Six' },
                { value: 'brawl', name: 'Brawlhalla' },
                { value: 'mortal', name: 'Mortal Kombat' },
            ]}
        />
    )
}