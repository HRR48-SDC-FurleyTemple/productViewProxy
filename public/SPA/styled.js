import Styled from 'styled-components';

const styles = {
    Page: Styled.div`
        margin: auto auto;
    `,
    AppContainer: Styled.div`
        display: grid;
        grid-template-areas:
            "productView productOptionsApp"
            "review-module productOptionsApp"
            "BottomCarousel productOptionsApp"
    `,
    SectionContainer: Styled.div`
        grid-area: ${(props) => props.gridArea};
        ${(props) => {
            let stickyOptions = `position: -webkit-sticky; /* Safari */
            position: sticky;
            top: 0;`;
            return props.options ? stickyOptions : '';
        }}
    `
};

export default styles;
