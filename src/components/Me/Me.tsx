import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;

	@media (max-width: ${({ theme }) => theme.breakpoints.L + "px"}) {
		flex-direction: column-reverse;
	}
`;

const Title = styled.h1`
	margin: 0;
	margin-bottom: 0.75rem;
	font-size: 2.25rem;
	color: ${({ theme }) => theme.colors.brightFontColor};
`;

const Bio = styled.p`
	margin: 0 0 0.75rem 0;
	line-height: 2rem;
	color: ${({ theme }) => theme.colors.fontColor};
`;

const Details = styled.div``;

const Image = styled.img`
	width: 250px;
	height: 250px;
	flex: 2;
	border-radius: 1rem;
	margin-left: 2rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.L + "px"}) {
		width: 10rem;
		height: 25%;
		margin: 0 0 2rem 0;
	}
`;

const LinkImage = styled.a`
	align-items: center;
	justify-content: center;
	display: flex;
	border-radius: 1rem;
	margin-right: 1rem;
	padding: 0.5rem;

	& > img {
		border-radius: 0;
		margin: 0;
		width: 32px;
		height: auto;
	}

	&:hover {
		background: ${({ theme }) => theme.colors.accentColor + "AA"};
	}
`;

const LinkWrapper = styled.div`
	display: flex;
	flex-direction: row;
	height: 2rem;
	align-items: center;
	width: 50%;
	margin-top: 1rem;
`;

export { Wrapper, Details, Image, LinkImage, Title, LinkWrapper, Bio };
