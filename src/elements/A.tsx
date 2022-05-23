import styled from "styled-components";

const A = styled.a`
	text-decoration: none;
	/* transition: all 0.1s ease-in-out; */
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;

export default A;
