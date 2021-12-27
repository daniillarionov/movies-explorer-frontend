import { useState } from "react";
function SearchForm({
  onSourceMovies,
  sourceValue,
  onSourceValue,
  onCheckboxClick,
  checkboxState,
  filterMovies,
  setNotFoundText
}) {
  const [error, setError] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!sourceValue) {
      setError("Нужно ввести ключевое слово");
    } else {
      onSourceMovies();
      setError("");
    }
    if (filterMovies.length === 0) {
      setNotFoundText("Ничего не найдено")
    }
  }

  function handleChange(e) {
    onSourceValue(e.target.value);
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
