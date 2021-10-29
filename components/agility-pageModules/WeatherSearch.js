import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const WeatherSearch = ({ module }) => {
  const [query, setQuery] = useState("");
  const [active, setactive] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null)

  const router = useRouter();
  const { lang } = router.query;
  console.log(lang, "quer"); // returns query params object

  // onchange handler for searchbar

  const onChange = useCallback(async (e) => {
    const query = e.target.value;
    setQuery(query);
    if (query.length > 2) {
     await fetch(`/api/weather?query=${query}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res, "res");
          setResults(res);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onClickResult = (result) => setSelectedResult(result)
  const onBlurResult = () => setSelectedResult(null)


  // get module fields
  const { fields } = module;
  console.log(fields, module, "fields and module");
  return (
    <div className="relative px-8">
      <h1>{fields.searchTitle}</h1>
      <StyledDiv className="max-w-4xl mx-auto my-12 md:mt-18 lg:mt-20">
        {/* <div
          className="prose max-w-full mx-auto"
          dangerouslySetInnerHTML={renderHTML(fields.textblob)}
        /> */}
        <input
          type="search"
          placeholder={fields.searchPlaceholder}
          onChange={onChange}
          value={query}
          className="prose max-w-full mx-auto"
        />
        {results && (
          <StyledList className="list-disc">
            {results.length > 0 &&
              results.map((weather) => (
                <StyledListItem key={weather.id} onClick={onClickResult}>{weather.name}</StyledListItem>
              ))}
          </StyledList>
        )}
        {selectedResult && (
          <ResultCard onBlur={onBlurResult}>
              <ResultItem>some detail</ResultItem>
              <ResultItem>some detail</ResultItem>
              <ResultItem>some detail</ResultItem>
          </ResultCard>
        )}
      </StyledDiv>
      Powered by{" "}
      <a href="https://www.weatherapi.com/" title="Weather API">
        WeatherAPI.com
      </a>
    </div>
  );
};

export default WeatherSearch;

const StyledDiv = styled.div`
  input[type="search"] {
    font: 1em/1.618 Open Sans, Arial, Sans-serif;
    border: 0.125em solid #737373;
    border-width: 0 0 3px;
    background-color: transparent;
    padding: 0.1875em 0.375em;
    width: 80%;
  }
`;

const StyledList = styled.ul`
  margin-top: 15px;
  border: 0.125em solid #737373;
  border-width: 1px;

  // li:hover {
  //   background: yellow;
  // }
`;

const StyledListItem = styled.li`
  &::hover {
    background: black;
  }
`
const ResultCard = styled.div`
  margin: 5px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 0.125em solid #737373;
  border-width: 1px;
`

const ResultItem = styled.div`
  width: 80%;
  padding: 5px;
  background: pink;
`