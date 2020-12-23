import axios from 'axios'

export function getDatos ({commit}, ruta) {
	// alert(ruta);
  return axios.get('https://y.codigorex.com/api/v1/r/'+ruta)
    .then(response => {
    	// alert("ahi viene ");
      commit('setInformacion', response.data)
    })
}
