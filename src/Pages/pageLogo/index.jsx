import Logo1 from "../../assets/image/Homepage/SVG/Asset 429.svg";
import styled from "styled-components";
const ButtonGroup  = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 800px;
	width: 100%;

	@media (max-width: 1000px) {
		flex-direction: column;
		padding: 0 16px;
		width: 100%;
	})
`;

const LaunchButton = styled.button`
	margin-bottom: 1rem;
	
`;

const TextContainer = styled.div`
	width: 1000px;

	@media (max-width: 1000px) {
		width: 100%;
		padding: 16px;
	})
`;

const PageLogo = () => {
	return (<>
		<div className="p-50 flex items-center justify-center w-full">
			{/* padding: 50px;
  display: flex;
  align-items: center;
  justify-content:center;
  width: 100%; */}
			<img src={Logo1} alt="logo" width="197px" height="280px" />
		</div>
		<TextContainer className="mb-80">
			<p className="text-white text-center">
				Lorem ipsum dolor sit amet, consecteture adipiscing elit, sed diam nonummy nibh euismod tinidunt ut
				laoreet dolore magna aliquam erat voutpat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullam-
				corper suscipit lobortis nisl ut aliquip ex ea coomodo consequat.
				Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequate,Duis autem vel eum
				Lorem ipsum dolor sit amet, consecteture adipiscing elit, sed diam nonummy nibh euismod tinidunt ut
				laoreet dolore magna aliquam erat voutpat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullam-
				corper suscipit lobortis nisl ut aliquip ex ea coomodo consequat.
				Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequate,Duis autem vel eum
				Lorem ipsum dolor sit amet, consecteture adipiscing elit, sed diam nonummy nibh euismod tinidunt ut
				laoreet dolore magna aliquam erat voutpat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullam-
				corper suscipit lobortis nisl ut aliquip ex ea coomodo consequat.<br />
				Lo
        	</p>
		</TextContainer>
		<ButtonGroup className="">
			<LaunchButton className="text-black font-bold bg-gradient-to-r from-green4 to-green2
			 px-50 py-12 rounded-full text-22">
				LAUNCH YOUR PROJECT WITH US
        	</LaunchButton >
			<button className="mb-20 text-white border-2 border-green1 px-70 py-5 text-22  bg-transparent rounded-full">
				BUY $IGNT
        	</button>
		</ButtonGroup>
	</>
	);
};

export default PageLogo;
