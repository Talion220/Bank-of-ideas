const scrollToAnchor = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const headerHeight = 69;
    const offset = element.getBoundingClientRect().top - headerHeight;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
};

export default scrollToAnchor;
