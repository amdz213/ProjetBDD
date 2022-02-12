const Reducer = (state, action) => {
    switch (action.type) {
      case "CONNEXION EN COURS":
        return {
          user: null,
          isFetching: true,
          error: false,
        };
      case "CONNEXION REUSSI":
        return {
          user: action.payload,
          isFetching: false,
          error: false,
        };
      case "ECHEC DE CONNEXION":
        return {
          user: null,
          isFetching: false,
          error: true,
        };
        case "MISE A JOUR EN COURS":
          return {
            ...state,
            isFetching:true
          };
        case "MISE A JOUR REUSSI":
          return {
            user: action.payload,
            isFetching: false,
            error: false,
          };
        case "ECHEC DE LA MISE A JOUR ":
          return {
            user: state.user,
            isFetching: false,
            error: true,
          };
      case "DECONNEXION":
        return {
          user: null,
          isFetching: false,
          error: false,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;