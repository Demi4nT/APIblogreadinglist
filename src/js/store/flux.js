const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			gryffindor: [],
			slytherin: [],
			hufflepuff: [],
			ravenclaw: [],
			singryffindor: [],
			sinslytherin: [],
			sinhufflepuff: [],
			sinravenclaw: [],
			favorites: []
			
		},
		actions: {
			getGryffindor: () => {
				const store= getStore();
				fetch("https://hp-api.herokuapp.com/api/characters/house/gryffindor")
  				.then(response => response.json())
  				.then(result => console.log(result, "fetch de gryffindor"), setStore({gryffindor:[...store.gryffindor, result[0].url]}))
  				.catch(error => console.log('error', error));
			},

			getSlytherin: () => {
				fetch("https://hp-api.herokuapp.com/api/characters/house/slytherin")
  				.then(response => response.json())
  				.then(result => console.log(result))
  			.catch(error => console.log('error', error));
			},
			getHufflepuff: () => {
				fetch("https://hp-api.herokuapp.com/api/characters/house/hufflepuff")
  				.then(response => response.json())
  				.then(result => console.log(result))
  				.catch(error => console.log('error', error));
			},

			getRavenclaw: () => {
				fetch("https://hp-api.herokuapp.com/api/characters/house/ravenclaw")
  				.then(response => response.json())
  				.then(result => console.log(result))
  				.catch(error => console.log('error', error));
			}
			}
			
			}
		}
	

export default getState;
