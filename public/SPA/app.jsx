import React, { useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './styled.js';
const AppContainer = styles.AppContainer;

const App = () => {

    useEffect(() => {
        const productOptionsScript = document.createElement('script');
        const productViewScript = document.createElement('script');
        const bottomCarouselScript = document.createElement('script');
        const reviewsScript = document.createElement('script');
        productOptionsScript.src = "http://localhost:3002/bundle.js";
        productViewScript.src = "http://localhost:3000/main.js";
        bottomCarouselScript.src = "http://localhost:3003/bundle.js";
        reviewsScript.src = "http://localhost:3001/bundle.js";
        document.body.appendChild(productOptionsScript);
        document.body.appendChild(productViewScript);
        document.body.appendChild(bottomCarouselScript);
        document.body.appendChild(reviewsScript);
    })
    return (
        <AppContainer>
            <div id="productView"></div>
            <div id="app"></div>
            <div id="reviews"></div>
            <div id="BottomCarousel"></div>
        </AppContainer>
    )
};


ReactDOM.render(<App />, document.getElementById('mainPage'))