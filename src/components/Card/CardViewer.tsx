import styled from "styled-components";

const CardViewer = styled.section`
	display: grid;
	grid-gap: 2rem;
	width: 100%;
	justify-content: center;
	grid-template-columns: repeat(auto-fill, minmax(0, 300px));

	@media (max-width: ${({ theme }) => theme.breakpoints.M + "px"}) {
		grid-template-columns: repeat(auto-fill, minmax(0, 100%));
	}
`;

export default CardViewer;
