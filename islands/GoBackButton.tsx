const GoBackButton = () => {
  const handleGoBackClick = () => {
    if (window.history.length) {
      window.history.back();
      return;
    }

    window.history.pushState({}, "", "/blog");
  };

  return (
    <button class="link" role="link" onClick={handleGoBackClick}>
      &larr; Go back
    </button>
  );
};

export default GoBackButton;
