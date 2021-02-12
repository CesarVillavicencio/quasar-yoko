import axios from 'axios'

export function getDatos ({commit}, ruta) {
	// alert(ruta);
  return axios.get('https://panel.yokoportal.com/api/v1/r/'+ruta)
    .then(response => {
      commit('setInformacion', response.data)
    }).catch(err => console.log(err));

    // return axios.get('https://panel.yokoportal.com/api/v1/products')
    // .then(response => {
    //   commit('setProductos', response.data)
    // }).catch(err => console.log(err))
}

// export function getProductos ({commit}, ruta) {
//   return axios.get('https://panel.yokoportal.com/api/v1/products')
//     .then(response => {
//       commit('setProductos', response.data)
//     })
// }

