import styled from 'styled-components';

export const StyledBurger = styled.button`
	position: absolute;
	top: 5%;
	right: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 4rem;
	height: 2rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;

	span {
		width: 2.5rem;
		height: 0.4rem;
		background: ${({ theme, open }) =>
			open ? theme.primaryLight : theme.primaryDark};
		/* border-radius: 10px; */
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
		:first-child {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}
		:nth-child(2) {
			opacity: ${({ open }) => (open ? '0' : '1')};
			transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
		}
		:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;
