import { styled } from "styled-components";
import React from "react";
// interface part
interface StyledProps {}
interface InputStyledProps {}
interface Props extends StyledProps, InputStyledProps {}

const ContentSection = styled.section``;

const Search: React.FC<Props> = () => {
  return <ContentSection></ContentSection>;
};

export default Search;
