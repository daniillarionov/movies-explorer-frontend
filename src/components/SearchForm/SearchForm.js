function SearchForm() {
    
    return (
      <div className="search-form">
          <div className="search-form__comtainer">
              <form className="search-form__section">
                  <input className="search-form__input" placeholder="Фильм"/>
              </form>
              <button className="search-form__button"></button>
          </div>
          <div className="search-form__switch">
          <p>Короткометражки</p>
          <label for="switch" class="search-form__label">
              <input type="checkbox" class="search-form__checkbox" id="switch" name="extra-option" value="black-background"/>
              <span class="search-form__pseudo-item"></span>
         </label>
         </div>
      </div>
    );
  }
  export default SearchForm;