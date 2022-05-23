import styled from "styled-components";

interface RowFlexProps {
	justifyContent?: string;
}

const RowFlex = styled.div<RowFlexProps>`
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: ${({ justifyContent }) => justifyContent || "center"};
	& {
		> :nth-child(n + 2) {
			margin-left: 1rem;
		}
	}
`;
export { RowFlex };
