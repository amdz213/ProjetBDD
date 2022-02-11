export const Connexion = (identifiant) => ({
  type: "CONNEXION EN COURS",
});

export const SuccesConnexion = (utilisateur) => ({
  type: "CONNEXION REUSSI",
  payload: utilisateur,
});

export const EchecConnexion = () => ({
  type: "ECHEC DE LA CONNEION",
});

export const Deconnexion = () => ({
  type: "DECONNEXION",
});
