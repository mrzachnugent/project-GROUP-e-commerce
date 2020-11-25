import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { search } from "../../search";
import { MARGINS } from "../../constants";
import { ProductGrid } from "../products/ProductGrid";

export const SearchResults = ({ searchString }) => {
  const shopInv = useSelector((state) => state?.user?.shopInv);
  const [results, setResults] = useState(null);
  const [reload, setReload] = useState(false)
  const { searchTerm } = useParams();

  useEffect(() => {
    if (shopInv) {
      const searchString = decodeURI(searchTerm);
      const searchResults = search(searchString, shopInv);
      setResults(searchResults);
      console.log(searchString);
    }
  }, [searchTerm]);

  return (
    <Wrapper>
      {results && (
        <ProductGrid
          productArray={results}
          title="Search Results"
        ></ProductGrid>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
    padding-top: ${MARGINS.mobileTop};
`;