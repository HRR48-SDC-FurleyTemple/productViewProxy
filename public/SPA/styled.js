import Styled from 'styled-components';

const styles = {
    AppContainer: Styled.div`
        display: grid;
        grid-template-areas:
            "productView app"
            "productView app"
            "productView app"
            "reviews app"
            "BottomCarousel app"
    `
};

export default styles;
