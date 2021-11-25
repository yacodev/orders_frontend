import {useState, useEffect} from 'react';
import styled from "@emotion/styled";
import searchicon from '../static/icons/searchicon.png';
import chevronLeft from "../static/icons/chevron_left.svg";
import { useHistory } from "react-router-dom";

const InputContainer = styled.input`
    width: 70vw;
    height:30px;
    background-color: #F6F6F9;
    border: 2px solid #B8B8BB;
    border-radius:10px;
`;

const SearchIconContainer = styled.div`
    width:18px;
    height:18px;
`;

const LinkButton = styled.button`
  width: ${(props) => props.size || "auto"};
  height: ${(props) => props.size || "auto"};
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
`;

const SearchFormContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 49px;
    gap:16px;
`;


export const SearchForm = ({products, setFilteredProducts}) => {
  const history = useHistory();

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    }

    useEffect(() => {
      const results = products.filter(item => item.name.toLowerCase().includes(searchTerm));
      setFilteredProducts(results);
    }, [searchTerm]);

    return (
            <SearchFormContainer>
              {
                searchTerm!==""?
                <LinkButton size="24px" onClick={() => history.goBack()}>
                    <img src={chevronLeft} alt="Previous page" />
                </LinkButton>
                : 
                <SearchIconContainer>
                    <img src={searchicon} alt=""/>
                </SearchIconContainer>
              }
              <InputContainer 
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange= {handleChange}
              />
            </SearchFormContainer>
    )
}
