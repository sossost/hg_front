export const lockScroll = () => {
  document.body.style.overflow = "hidden";
};

export const openScroll = () => {
  document.body.style.removeProperty("overflow");
};
