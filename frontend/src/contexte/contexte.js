const ETAT_INITIAL = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const Contexte = createContext(ETAT_INITIAL);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
