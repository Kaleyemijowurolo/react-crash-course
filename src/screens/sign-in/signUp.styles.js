import styled from "styled-components";
import { colors, fontSizes, fontWeights, fonts } from "../../lib/theme";

export const SignInStyle = styled("div")`
	display: flex;
	width: 100vw;
	height: 100vh;
	align-items: center;
	justify-content: center;

	header {
		height: 20%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: ${fontSizes.h4};
        font-weight: ${fontWeights.medium};
	}

	main {
		height: 60%;
		/* border: solid green; */

        .input_wrapper{
            padding: 1.5rem 0 ;
        }

        .mini_input{
            display: flex;
            justify-content:space-between ;

            .input_wrapper{
                width: 45%;
                
            }
        }
        .radio, .news_letter{
            label{
                    margin-left:10px ;
                }
        }

        .radio{
            display: flex;

            .input_wrapper  input{
                border:solid red ;
                
            }
            
            & .input_wrapper:last-child{
                margin-left: 10px;
            }
        }

	}

	footer {
		height: 20%;
        display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const Card = styled("form")`
	height: 700px;
	width: 500px;
	/* border: solid; */
	box-shadow: 0px 0px 5px lightgray;
	border-radius: ${fontSizes.small};
    border-top:  8px solid ${colors.border.dark};
    padding: 0 1rem ;

`;
