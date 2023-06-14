import styled from "styled-components";

export const Container = styled.div<{ src: string }>`
	background-image: url(${({ src }) => src});
	width: 100vw;
	height: 100vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const Title = styled.div`
	text-align: center;
	font-size: 100px;
	padding: 12vh 0;
`;

export const Options = styled.div`
	width: 460px;
	display: flex;
	font-size: 40px;
	flex-direction: column;
	margin: auto;
`;

export const Option = styled.div`
	display: flex;
	gap: 40px;
	align-items: center;
	padding: 40px 0;
	margin: 10px 0;
`;

export const Select = styled.img<{ id: string }>`
	opacity: ${({ id }) => (id === "false" ? 0 : 1)};
	width: 40px;
	height: 40px;
`;

export const Text = styled.div`
	text-align: center;
	width: 300px;
`;
