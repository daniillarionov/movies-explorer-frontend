import { useState } from "react";
function SearchForm({
  sourceValue,
  onSourceValue,
  onCheckboxClick,
  checkboxState,
  filterMovies,
  setNotFoundText,
  handleFilterMovies,
  movies,
  setFilterMovies,
  savedMoviesPage,
}) {
  const [error, setError] = useState("");
  const [valueSource, setValueSource] = useState("");
  function handleSubmit(e) {
    if (!savedMoviesPage) {
      localStorage.setItem("source", true);
      localStorage.setItem("sourceValue", valueSource);
      onSourceValue(valueSource);
    }
    e.preventDefault();
    if (!sourceValue) {
      setError("Нужно ввести ключевое слово");
    } else {
      handleFilterMovies(movies, checkboxState, sourceValue, setFilterMovies);
      setError("");
    }
  }
  if (filterMovies === null || filterMovies.length === 0) {
    const localSource = localStorage.getItem("source");
    setNotFoundText(localSource === null ? "" : "Ничего не найдено");
  }

  function handleChange(e) {
    onSourceValue(e.target.value);
    setValueSource(e.target.value);
    setError("");
  }
  const checkbox = document.querySelector("#switch");
  function handleClick() {
    if (checkbox.checked) {
      onCheckboxClick(true);
    } else {
      onCheckboxClick(false);
    }
  }
  const checkboxChecked = checkboxState ? true : false;
  return (
    <div className="search-form">
      <div className="search-form__comtainer">
        <form
          className="search-form__section"
          noValidate
          onSubmit={handleSubmit}
        >
          <input
            className="search-form__input"
            placeholder="Фильм"
            required
            onChange={handleChange}
            value={sourceValue}
          />
          <button type="submit" className="search-form__button"></button>
          <p className="search-form__error">{error}</p>
        </form>
      </div>
      <div className="search-form__switch">
        <p>Короткометражки</p>
        <label className="search-form__label">
          <input
            checked={checkboxChecked}
            type="checkbox"
            onChange={handleClick}
            className="search-form__checkbox"
            id="switch"
          />
          <span className="search-form__pseudo-item"></span>
        </label>
      </div>
    </div>
  );
}
export default SearchForm;
