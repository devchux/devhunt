const SearchInputHook = () => {
  const onFocus = () => {
    const inputField = document.querySelector('.search-input');
    inputField.classList.add('widen-search-input');
  }

  const onBlur = () => {
    const inputField = document.querySelector('.search-input');
    inputField.classList.remove('widen-search-input');
  }

  return {
    onFocus,
    onBlur,
  }
};

export default SearchInputHook;