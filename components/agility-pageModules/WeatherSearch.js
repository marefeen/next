import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const WeatherSearch = ({ module }) => {
  const [query, setQuery] = useState("");
  const [active, setactive] = useState(false);
  const [results, setResults] = useState([]);
  const [cityResults, setCityResults] = useState(null);

  const router = useRouter();
  const { lang } = router.query;

  // onchange handler for searchbar

  const onChange = useCallback(async (e) => {
    const query = e.target.value;
    setQuery(query);
    const queryParams = lang ?  `?query=${query}&lang=${lang}` : `?query=${result}`
    if (query.length > 2) {
      await fetch(`/api/weather${queryParams}`)
        .then((res) => res.json())
        .then((res) => {
          setResults(res);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onClickResult = async (result) => {
    setResults([]);
    setQuery(result);
    const queryParams = lang ?  `?query=${result}&lang=${lang}` : `?query=${result}`
    await fetch(`/api/weather/city${queryParams}`)
      .then((res) => res.json())
      .then((res) => {
        setResults(res);
        setCityResults(res);
      });
  };
  const onBlurResult = () => setCityResults(null);

  // get module fields
  const { fields } = module;
  return (
    <div className="relative px-8">
      <h1 className="font-display text-secondary-500 text-4xl font-black tracking-wide">{fields.searchTitle}</h1>
      <StyledDiv className="max-w-4xl mx-auto my-12 md:mt-18 lg:mt-20">
        <input
          type="search"
          placeholder={fields.searchPlaceholder}
          onChange={onChange}
          value={query}
          className="prose max-w-full mx-auto"
          // onBlur={onBlurSuggestions}
        />
        {results && results.length > 0 && (
          <StyledList>
            {results.map((weather) => (
              <StyledListItem
                key={weather.id}
                onClick={() => onClickResult(weather.name)}
              >
                {weather.name}
              </StyledListItem>
            ))}
          </StyledList>
        )}
        {cityResults && (
          <ResultCard onBlur={onBlurResult}>
            <ResultItem>
              Temperature: {cityResults.current.temp_c}°C /{" "}
              {cityResults.current.temp_f}°F
            </ResultItem>
            <ResultItem>
              Feels Like: {cityResults.current.feelslike_c}°C /{" "}
              {cityResults.current.feelslike_f}°F
            </ResultItem>
            <ResultItem className="blocked-result">
              {cityResults.current.condition.text}
              <img src={cityResults.current.condition.icon} />
            </ResultItem>
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
    border-width: 0 0 1px;
    background-color: transparent;
    padding: 0.1875em 0.375em;
    width: 100%;
  }
`;

const StyledList = styled.ul`
  margin-top: 0px;
  border: 0.125em solid #737373;
  border-width: 1px;
  padding: 10px 5px;

  li:hover {
    background: yellow;
  }
`;

const StyledListItem = styled.li`
  border: 0.125em solid #737373;
  border-width: 0 0 1px;
  &::hover {
    background: black;
  }
`;
const ResultCard = styled.div`
  margin-top: 15px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 0.125em solid #737373;
  border-width: 1px;
  padding: 10px 15px;
  background: rgba(34, 34, 34);
  color: #fff;
`;

const ResultItem = styled.div`
  width: 80%;
  padding: 5px;
  &.blocked-result{
    display: flex;
  align-items: center;
  justify-content: center;
  }
`;
