const toggleMenu = () => {
  const toggle = (element, className) => {
    element.classList.toggle(className);
  };
  return {
    toggle,
  };
};

export default toggleMenu;
