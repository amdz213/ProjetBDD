const stat = require("../../../backend/routes/stats").default;
const Stat = require("./models/Stats");
const css = require("./css/dashboard.css");
const Bar = require("react-chartjs-2");

const data = {
  labels: [JSON.stringify(Stat.number_of_views)], //le texte de chaque bar du graphique sont le nombre de vues pour un post dans une journée
  datasets: [
    {
      label: "Nombre de vues", //le titre du graphique
      data: [JSON.parse(stat)], //la data collecté via l'API
      background: ["orange"], //la couleur des bar seront tous en orange
    },
  ], //on met les propriétés de la présentation des données
};

const options = {
  maintainAspectRatio: false,
}; //on définit une réinitialisation pour les cas de modification des données

function BarChar() {
  //on définit une fonction App pour l'exporter dans l'App.js
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default BarChar;
