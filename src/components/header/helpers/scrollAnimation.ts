export const moveTo = (
  id: string,
  position: ScrollLogicalPosition | undefined,
) => {
  const element = document.getElementById(`${id}`);
  if (element)
    element.scrollIntoView({
      behavior: "smooth",
      block: position,
    });
};
