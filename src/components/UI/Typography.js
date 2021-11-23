import styled from "@emotion/styled";


export const Text = styled.p`
  color: ${props => props.color || "#000000"};
`
export const TextWhite = styled.p`
  color: #FFF;
`

export const RegularXL = styled(Text)`
  font-size: 28px;
  line-height: 35px;  
`;

export const RegularL = styled(Text)`
  font-size: 22px;
  line-height: 28px;
`;

export const RegularM = styled(Text)`
  font-size: 18px;
  line-height: 23px;
`;

export const RegularMWhite = styled(TextWhite)`
  font-size: 18px;
  line-height: 23px;
`;

export const RegularS = styled(Text)`
  font-size: 16px;
  line-height: 20px;
`;

export const RegularXS = styled(Text)`
  font-size: 15px;
  line-height: 18px;
`;

export const RegularCaption = styled(Text)`
  font-family: Lato;
  font-size: 14px;
  line-height: 17px;
`;

export const SemiBoldXL = styled(Text)`
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
`;

export const SemiBoldL = styled(Text)`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
`;

export const SemiBoldM = styled(Text)`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
`;

export const SemiBoldS = styled(Text)`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

export const SemiBoldCaption = styled(Text)`
  font-family: Lato;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;


