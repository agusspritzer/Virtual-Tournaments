import React from 'react';
import SelectSearch from 'react-select-search/dist/cjs';


export default function SelectFilter() {
    return (
        <SelectSearch
            closeOnSelect={false}
            printOptions="on-focus"
            multiple
            placeholder="ESTADO"
            options={[
                { value: 'prox', name: 'Proximos' },
                { value: 'curr', name: 'En Juego' },
                { value: 'pas', name: 'Pasados' },
            ]}
        />
    )
}