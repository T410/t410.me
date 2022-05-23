import styled, { keyframes } from "styled-components";

const pulse = keyframes`
50% {
		opacity: 0.4;
	}
`;

const Wrapper = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: ${({ theme }) => theme.borderRadius};
	border-width: 1px;
	border-color: rgba(150, 189, 231, 0.25);
`;

const Animator = styled.div`
	display: flex;
	flex-direction: column;
	animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

	& {
		> :nth-child(n + 2) {
			margin-top: 0.5rem;
		}
	}
`;

const Round = styled.div`
	border-radius: 9999px;
	background-color: ${({ theme }) => theme.colors.fontColor};
	height: 3rem;
	width: 3rem;
`;

const RowFlex = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	& {
		> :nth-child(n + 2) {
			margin-left: 1rem;
		}
	}
`;

const ColFlex = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	& {
		*:nth-child(n + 2) {
			margin-top: 0.5rem;
		}
	}
`;

const Br = styled.br``;

interface LineProps {
	colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	rowSpan?: number;
}

const Line = styled.div<LineProps>`
	width: ${(props) => (100 / 12) * (props.colSpan || 12)}%;
	height: ${(props) => props.rowSpan || 0.5}rem;
	border-radius: 0.25rem;
	background-color: ${({ theme }) => theme.colors.fontColor};
`;

export default function Loading() {
	return (
		<Wrapper>
			<Animator>
				<RowFlex>
					<Round />
					<ColFlex>
						<Line colSpan={7} />
						<Line colSpan={5} />
					</ColFlex>
				</RowFlex>
				<Br />
				<ColFlex>
					<Line />
					<Line />
					<Line colSpan={5} />
					<Line rowSpan={10} />
				</ColFlex>
				<RowFlex>
					<Line colSpan={2} rowSpan={1} />
					<Line colSpan={2} rowSpan={1} />
					<Line colSpan={2} rowSpan={1} />
					<Line colSpan={2} rowSpan={1} />
				</RowFlex>
			</Animator>
		</Wrapper>
	);
}
