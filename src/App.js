import React, {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = 'd341188f04c3d9534a37147a03f3deed2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ([command]) => {

            }
    })
}, [])

    return (
        <div>
            <h1>Hi Alan</h1>
        </div>
    )
};

export default App;
