export const Connexion = (User) => ({
  type: "CONNEXION EN COURS",
});

export const SuccesConnexion = (user) => ({
  type: "CONNEXION REUSSI",
  payload: user,
});

export const EchecConnexion = () => ({
  type: "ECHEC DE CONNEION",
});

export const Deconnexion = () => ({
  type: "DECONNEXION",
});

export const Modification = (userCredentials) => ({
  type: "MISE A JOUR EN COURS",
});

export const SuccesModification = (user) => ({
  type: "MISE A JOUR REUSSI",
  payload: user,
});

export const EchecModification = () => ({
  type: "ECHEC DE LA MISE A JOUR",
});
