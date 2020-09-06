import React, {useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import spinningWorld from './img/394.png'
import useStyles from './styles';

const alanKey = 'd341188f04c3d9534a37147a03f3deed2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const [newsArticles, setNewsArticles] = useState([])
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if (command === 'newHeadlines') {
                   setNewsArticles(articles);
}
            }
    })
}, [])

    return (
        <div className={classes.LogoContainer}>
            <img alt="spining world" src={(spinningWorld)}></img>
            <NewsCards articles={newsArticles} />
        </div>
    )
};

export default App;
