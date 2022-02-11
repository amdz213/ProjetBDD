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

export const Modification = (identifiant) => ({
  type: "MISE A JOUR EN COURS",
});

export const SuccesModification = (utilisateur) => ({
  type: "MISE A JOUR REUSSI",
  payload: utilisateur,
});

export const EchecModification = () => ({
  type: "ECHEC DE LA MISE A JOUR",
});
