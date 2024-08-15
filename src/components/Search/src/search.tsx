import * as S from "./styles";
import React, { useState, useRef, useEffect, useCallback } from "react";

import AlertErrorIcon from "./assets/alert-color.svg";
import EraseIcon from "./assets/close-white.svg";
import { ISuggestion, SearchProps } from "./types";
import { SearchProvider } from "./services/searchProvider";
import configEnv from "./api/configEnv";

const Search: React.FC<SearchProps> = ({
  baseUrl,
  pathUrl,
  fieldKey,
  defaultValue,
  onChangeText,
  readOnly,
  disabled,
  error,
  width,
  ...rest
}) => {
  const container = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState<string>(defaultValue ?? "");
  const [select, setSelect] = useState<ISuggestion>({});

  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState<ISuggestion[]>(
    []
  );
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [noSuggestions, setNoSuggestions] = useState(false);

  const { getSearchValues } = SearchProvider();

  configEnv.baseUrl = baseUrl;

  const handleOutsideEventClick = useCallback(
    (event: MouseEvent) => {
      if (!container.current) {
        return;
      }

      if (container.current.contains(event.target as Node)) {
        return;
      }

      if (value === defaultValue) {
        return;
      }

      if (Object.entries(select).length === 0) {
        if (defaultValue) {
          setValue(defaultValue);
          onChangeText?.({ [fieldKey]: defaultValue });
        } else {
          setValue("");
          setSelect({});
          onChangeText?.({} as ISuggestion);
        }
      } else {
        setValue(select[fieldKey]);
        onChangeText?.(select);
      }

      setShowSuggestions(false);
    },
    [value, select]
  );

  useEffect(() => {
    if (disabled && readOnly) {
      return;
    }

    document.addEventListener("mousedown", handleOutsideEventClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideEventClick);
    };
  }, [handleOutsideEventClick]);

  useEffect(() => {
    setValue(defaultValue ?? "");
  }, [disabled, defaultValue]);

  const getSuggestionsValues = (paramsUrl: string) => {
    if (!paramsUrl) {
      return;
    }

    getSearchValues({ pathUrl, paramsUrl }).then((response) => {
      const suggestions = response.data.data.records;

      const newFilteredSuggestions = suggestions.filter(
        (suggestion: ISuggestion) =>
          suggestion[fieldKey]
            .toString()
            .toLowerCase()
            .includes(paramsUrl.toLowerCase())
      );

      setFilteredSuggestions(newFilteredSuggestions);

      setNoSuggestions(newFilteredSuggestions.length === 0);
    });
  };

  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentTarget = e.currentTarget.value;

    setValue(currentTarget);
    getSuggestionsValues(currentTarget);

    setShowSuggestions(true);
    setActiveSuggestion(0);
  };

  const onClickEvent = (item: ISuggestion) => {
    setActiveSuggestion(0);

    setFilteredSuggestions([]);
    setShowSuggestions(false);

    setValue(item[fieldKey]);

    setSelect(item);
    onChangeText?.(item);
  };

  const onKeyDownEvent = (e: React.KeyboardEvent) => {
    const keyCode = e.code;

    if (!keyCode) {
      return;
    }

    if (keyCode === "ArrowUp") {
      if (activeSuggestion === 0) {
        return;
      }

      setActiveSuggestion(activeSuggestion - 1);
    }

    if (keyCode === "ArrowDown") {
      if (activeSuggestion === filteredSuggestions.length - 1) {
        return;
      }

      setActiveSuggestion(activeSuggestion + 1);
    }

    if (keyCode === "Enter") {
      setShowSuggestions(false);
      setActiveSuggestion(0);

      setValue(filteredSuggestions[activeSuggestion][fieldKey]);
      setSelect(filteredSuggestions[activeSuggestion]);
      onChangeText?.(filteredSuggestions[activeSuggestion]);
    }
  };

  const clearAll = () => {
    setValue("");
    setSelect({} as ISuggestion);
    onChangeText?.({} as ISuggestion);
    setShowSuggestions(false);
  };

  return (
    <S.AutocompleteContainer ref={container} width={width}>
      <S.InputWrapper>
        <S.AutocompleteInput
          type="text"
          onChange={onChangeEvent}
          onKeyDown={onKeyDownEvent}
          value={value}
          isError={error}
          disabled={disabled || readOnly}
          {...rest}
        />
        {value && !disabled && !readOnly && (
          <S.ClearButton onClick={clearAll}>
            <EraseIcon />
          </S.ClearButton>
        )}
        {error && (
          <S.IconError>
            <AlertErrorIcon />
          </S.IconError>
        )}
      </S.InputWrapper>

      {showSuggestions && value && (
        <S.SuggestionsListContainer>
          {filteredSuggestions.map((suggestion, index) => (
            <S.SuggestionItem
              className={index === activeSuggestion ? "suggestion-active" : ""}
              key={index}
              onClick={() => onClickEvent(suggestion)}
            >
              {suggestion[fieldKey]}
            </S.SuggestionItem>
          ))}
        </S.SuggestionsListContainer>
      )}

      {noSuggestions && showSuggestions && (
        <S.NoSuggestionsMessage>
          <em>No suggestions available.</em>
        </S.NoSuggestionsMessage>
      )}
    </S.AutocompleteContainer>
  );
};

export default Search;
