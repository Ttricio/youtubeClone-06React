import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	width: ${(props) => (props.type !== "sm" && "360px")};
	margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
	cursor: pointer;
	display: ${(props) => props.type === "sm" && "flex"};
	gap: 10px;
`;
const Image = styled.img`
	width: 100%;
	height: ${(props) => (props.type === "sm" ? "120" : "202px")};
	background-color: #999;
	flex: 1;
`;
const Details = styled.div`
	display: flex;
	margin:${(props) => (props.type !== "sm" && "16px")};
	gap: 12px;
	flex: 1;

`;
const ChannelImage = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background-color: #999;
	display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div``;
const Title = styled.h1`
	font-size: 16px;
	font-weight: 500;
	color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
	font-size: 14px;
	color: ${({ theme }) => theme.textSoft};
	margin: 10px 0px;
`;
const Info = styled.div`
	font-size: 14px;
	color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
	return (
		<Link to='video/test' style={{ textDecoration: "none" }}>
			<Container type={type}>
				<Image
					src={"https://www.keycdn.com/img/blog/video-optimization-lg.webp"}
				/>
				<Details type={type}>
					<ChannelImage
						type={type}
						src='https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
					/>
					<Texts>
						<Title>Test Video</Title>
						<ChannelName>For YOU</ChannelName>
						<Info>660,900 views 1 day ago</Info>
					</Texts>
				</Details>
			</Container>
		</Link>
	);
};

export default Card;
