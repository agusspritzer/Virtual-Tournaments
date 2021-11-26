import React from 'react';

import { NavegadorContainer } from './styled';

export default function Navegador() {
    const tabs =
        [{ label: 'PARTIDAS', content_id: 'partidas' },
        { label: 'PAGOS', content_id: 'pagos' },
        { label: 'TORNEOS', content_id: 'torneos' },
        { label: 'INSCRIPCIONES', content_id: 'inscripciones' },
        { label: 'OTROS', content_id: 'otros' },
        { label: 'OTROS', content_id: 'otros' },

        ];


    return (
        <NavegadorContainer>
            <nav>
                <ul>
                    <li>
                        {tabs.map((tab) =>
                            <a key="tab.content_id">
                                {tab.label}
                            </a>
                        )}
                    </li>
                </ul>
            </nav>
        </NavegadorContainer>
    )

}



