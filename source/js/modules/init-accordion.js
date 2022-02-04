const initAccordion = () => {
  const accordion = document.querySelectorAll(".accordion");
  if (accordion) {
    accordion.forEach(function (item) {
      const btn = item.children[0];
      const content = item.children[1];

      btn.addEventListener("click", (evt) => {
        evt.preventDefault();
        const maxHeight = content.style.maxHeight;
        console.log(evt);
        console.log(content.clientHeight);
        console.log(content.scrollHeight);
        if (maxHeight) {
          content.style.maxHeight = null;
          btn.classList.remove("active");
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          btn.classList.add("active");
        }
      });
    });
  }
};
export default initAccordion;
