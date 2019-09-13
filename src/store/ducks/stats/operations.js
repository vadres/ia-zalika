import { db } from '../../../config/firebase.cfg';

export async function getTeams() {
  const snapshot =  await db.collection("teams").get();
  const teams = [];
  snapshot.forEach(function(doc) {
    teams.push({ sigla: doc.id, nome: doc.data().name });
  });
  return teams;
};

/*
const handleChangeSel = (e) => {
  this.setState({ ...this.state, team: e.target.value });
}

const formatInput = (id, input) => {
  switch(id) {
    case "PS":  case "GP":  case "GC":  case "NSG":  case "NM":  
      return onlyNumber(input);
    case "MD":  case "VS":  case "U6":  default:
      return input;  
  }
}

const formatCompound = (id, input) => {
  switch(id) {
    case "MD":  case "VS":  
      return compound(input, 4);
    case "U6":  
      return compound(input, 2);
    case "PS":  case "GP":  case "GC":  case "NSG":  case "NM":  default:
      return true;
  }
}

const handleChangeInput = (e) => {
  try {
    const { id } = e.target;
    let stat = this.formatInput(id, e.target.value);  
    this.setState({ ...this.state, stats: { ...this.state.stats, [id.toLowerCase()]: stat } });
  } catch(e){ 
    console.error(e); 
  }
}

const handleClickSave = (e) => {
  const { team, stats } = this.state;

  for (const [key, stat] of Object.entries(stats)) {
    if (typeof stat === 'undefined' || stat === "" || !this.formatCompound(key.toUpperCase(), stat)){
      toast.warn("Algum campo está no formato incorreto!");
      return;
    }
  }  
  stats["time"] = new Date().getTime();
  saveStats(team, stats); 
  this.resetState();
}

const resetState = (e) => {
  this.setState({
    team: "ala",
    stats: { ps:"",gp:"",gc:"",nsg:"",nm:"",md:"",vs:"",u6:"" },
    message: "",
  });
}
*/