import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import {StyledDiv, StyledList, StyledListItem, ResultCard} from "./styled"

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

