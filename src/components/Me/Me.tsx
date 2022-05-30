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
	margin: 0;
	line-height: 2rem;
	color: ${({ theme }) => theme.colors.fontColor};
`;

const Details = styled.div`
	& > p > a {
		text-decoration: none;
		color: white;
		font-weight: 600;

		border-bottom: 2px solid ${({ theme }) => theme.colors.accentColor};

		&:hover {
			background-color: ${({ theme }) => theme.colors.accentColor};
			color: ${({ theme }) => theme.colors.background};
		}
	}
	/* flex: 8;
	display: flex;
	flex-direction: column;
	justify-content: space-between; */
`;

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
	flex: 1;
	height: 100%;
	max-width: fit-content;
	align-items: center;
	justify-content: center;
	margin-right: 1rem;

	& > img {
		border-radius: 0;
		margin-left: 0%;
		width: 32px;
		height: auto;
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
