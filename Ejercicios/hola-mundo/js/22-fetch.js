'use strict'

//FETCH es sustituto del AJAX (peticiones asincronaz a server)

window.addEventListener("load", () => {

	var divUsers = document.querySelector("#datosGlobales")
	var divSpecyficUser = document.querySelector("#divUsuarioEspecifico")
	var divProfesor = document.querySelector("#datosProfe")

	//(de donde se obtiene la info) . (convierte la info a tipo json) . (funcion o manipulacion de los datos en un callback)
			getFecthUsers().then(data => data.json()).then(users => {

				listaUsuarios(users.data);

				return getInfo();

			}).then(data => {
				console.log(data);
				showProfesor(data);
				return getSpecyficUser();

			}).then(data => data.json()).then(user => {

				showSpecyficUser(user.data);

			}).catch(error =>{
				console.log(error);
			});

	function getFecthUsers() {
		//a diferencia que el video, aqui hacemos la peticion ajax y de paso lo transformamos a JSON
		return fetch("https://reqres.in/api/users");
	}

	function getSpecyficUser() {
		return fetch("https://reqres.in/api/users/4");
	}

	function getInfo() {
		var profesor = {
			nombre: "Julio",
			apellido: "Molina",
			phone: 9611353217
		};

		return new Promise((resolve, reject) => {
			var profesor_string = "";
			setTimeout(() => {
				profesor_string = JSON.stringify(profesor);
				if (typeof profesor_string != 'string' || profesor_string == '') {
					return reject("erraar mi ciela");
				}
				return resolve(profesor_string);
			}, 2000)
		})
	}


	function listaUsuarios(usuarios) {
		usuarios.map((user, i) => {
			var li = document.createElement("li")
			li.append(i + " - " + user.first_name)

			let avatar = document.createElement("img")
			avatar.src = user.avatar
			avatar.width = '100'

			divUsers.append(li);
			divUsers.append(avatar);
			document.querySelector("#loading").style.display = 'none';
		});
	}

	function showProfesor(data) {
		var p = document.createElement("p")
		p.append(data)

		divProfesor.append(p);

		document.querySelector("#loadingProfe").style.display = 'none'

	}

	function showSpecyficUser(user) {
		console.log(user)
		var li2 = document.createElement("li");
		li2.append(" -> " + user.first_name + " <- ");

		let avatar = document.createElement("img")
		avatar.src = user.avatar
		avatar.width = '100'

		divSpecyficUser.append(li2);
		divSpecyficUser.append(avatar);

		document.querySelector("#loadingSpefUser").style.display = 'none';
	}



});