import {useState, useEffect} from 'react';
import styled from "@emotion/styled";
import searchicon from '../static/icons/searchicon.png';
import chevronLeft from "../static/icons/chevron_left.svg";
import { useHistory } from "react-router-dom";

const StyledInput = styled.input`
    width: fit-content;
    background-color: #F6F6F9;
    border: none;
`;

const ContainerSearchIcon = styled.div`
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

const ContainerSearchForm = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
    /* margin-left:41px; */
    /* margin-top: 52px; */
    margin-bottom: 49px;
    gap:16px;
`;


export const SearchForm = ({products, setFilteredProducts}) => {
  const history = useHistory();

    const [searchTerm, setSearchTerm] = useState('');
    // const [searchResults, setSearchResults] = useState([]);

    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    }

    useEffect(() => {
      const results = products.filter(item => item.name.toLowerCase().includes(searchTerm));
      console.log("results",results);
      setFilteredProducts(results);
    }, [searchTerm]);

    return (
            <ContainerSearchForm>
              {
                searchTerm!==""?
                <LinkButton size="24px" onClick={() => history.goBack()}>
                    <img src={chevronLeft} alt="Previous page" />
                </LinkButton>
                :             
                <ContainerSearchIcon>
                    <img src={searchicon} alt=""/>
                </ContainerSearchIcon>
              }
                <StyledInput 
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange= {handleChange}
                  />
            </ContainerSearchForm>
    )
}
