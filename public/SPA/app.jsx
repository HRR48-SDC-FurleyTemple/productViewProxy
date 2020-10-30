import React, { useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './styled.js';
const AppContainer = styles.AppContainer;
const SectionContainer = styles.SectionContainer;
const Page = styles.Page;

const App = () => {

    useEffect(() => {
        const productOptionsScript = document.createElement('script');
        const productViewScript = document.createElement('script');
        const bottomCarouselScript = document.createElement('script');
        const reviewsScript = document.createElement('script');
        // productOptionsScript.src = "http://localhost:3000/main.js";
        productViewScript.src = "http://localhost:3050/bundle.js";
        // bottomCarouselScript.src = "http://localhost:3001/bundle.js";
        // reviewsScript.src = "http://localhost:3003/bundle.js";
        document.body.appendChild(productOptionsScript);
        document.body.appendChild(productViewScript);
        document.body.appendChild(bottomCarouselScript);
        document.body.appendChild(reviewsScript);
    })
    return (
        <AppContainer>
            <SectionContainer gridArea="productView" id="productView" />
            <SectionContainer options gridArea="productOptionsApp" id="productOptionsApp" />
            <SectionContainer gridArea="review-module" id="review-module" />
            <SectionContainer gridArea="BottomCarousel" id="BottomCarousel" />
        </AppContainer>
    )
};

ReactDOM.render(<App />, document.getElementById('mainPage'))
