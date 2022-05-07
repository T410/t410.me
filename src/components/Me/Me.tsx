import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const Title = styled.h1`
	margin: 0;
`;

const Details = styled.div`
	& > p > a {
		text-decoration: underline;
	}
	flex: 8;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Image = styled.img`
	width: 250px;
	height: 250px;
	flex: 2;
	border-radius: 1rem;
	margin-left: 2rem;
`;

const LinkImage = styled.a`
	flex: 1;
	height: 100%;
	max-width: fit-content;
	align-items: center;
	justify-content: center;
	margin-right: 1rem;

	& > img {
		border-radius: 0;
		margin-left: 0%;
		max-width: 32px;
		height: auto;
	}
`;

const LinkWrapper = styled.div`
	display: flex;
	flex-direction: row;
	height: 2rem;
	align-items: center;
	width: 50%;
`;

export { Wrapper, Details, Image, LinkImage, Title, LinkWrapper };
