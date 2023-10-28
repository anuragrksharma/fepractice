(function () {
  let selectedValue = "";
  /**
   * @param {MouseEvent} e
   */
  const listener = (e) => {
    const existing = selectedValue
      ? document.querySelector(`.rating-${selectedValue}`)
      : null;
    if (existing) {
      existing.classList.remove("selected");
    }
    const value = e.target.innerText;
    selectedValue = value;
    e.target.classList.add("selected");
  };

  const onSubmit = () => {
    console.log(selectedValue);
    const valToReplace = document.querySelector(".selected-rating");
    if (valToReplace) {
      valToReplace.innerHTML = valToReplace?.innerHTML.replace(
        "{selectedValue}",
        selectedValue,
      );
    }

    document.querySelector(".form")?.classList.add("hidden");

    setTimeout(() => {

    document.querySelector(".thank-you")?.classList.remove("hidden");
    }, 400)
  };
  document.querySelectorAll(".rating").forEach((el) =>
    el.addEventListener("click", listener)
  );

  document.querySelector(".submit")?.addEventListener("click", onSubmit);
})();
