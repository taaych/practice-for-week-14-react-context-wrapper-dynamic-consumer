import { useState, useContext } from 'react';
import {HoroscopeContext} from "../context/HoroscopeContext";


export default function Match (){

    const [match, setMatch] = useState(false);
    const { sign } = useContext(HoroscopeContext);
    
    return (
        <div>
            <button onClick={() => setMatch(!match)}>Match</button>
            {match && (
                <div>
                    {sign.match}
                </div>
            )}
        </div>
    )
}