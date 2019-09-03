// useEffect (componentDidMount, componentDidUpdate, ...)

// Scroll to top after component mount or update
export const scrollToTop = () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 500);
};
