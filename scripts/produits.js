const filtres = document.querySelector(".filtres"),
genres = document.querySelectorAll("#genres input"),
marques = document.querySelectorAll("#marques input"),
promos = document.querySelectorAll("#promos input"),
news = document.querySelectorAll("#news input"),
prices = document.querySelectorAll("#prices input"),
sizes = document.querySelectorAll("#sizes input"),
colors = document.querySelectorAll("#colors input");

const params = new URL(window.location.href).searchParams;

// promos | news

const defaultGenres = parseInt(params.get("genres")) || 0,
defaultMarques = parseInt(params.get("marques")) || 0,
defaultPromos = parseInt(params.get("promos")) || 0,
defaultNews = parseInt(params.get("news")) || 0,
defaultPrices = params.get("prices")?.split(",") || [],
defaultSizes = params.get("sizes")?.split(",") || [],
defaultColors = parseInt(params.get("couleurs")) || 0;

if (params.get("scroll")) filtres.scrollTop = parseInt(params.get("scroll")) || 0;

genres.forEach(input => {
	const value = parseInt(input.value);

	if ((defaultGenres & value) === value) input.checked = true;

	input.addEventListener("change", () => window.location.assign(
		"/produits?" +
		`scroll=${filtres.scrollTop}` +
		`&marques=${defaultMarques}` +
		`&promos=${defaultPromos}` +
		`&news=${defaultNews}` +
		`&prices=${defaultPrices}` +
		`&sizes=${defaultSizes}` +
		`&couleurs=${defaultColors}` +
		`&genres=${defaultGenres + value * (input.checked ? 1 : -1)}`
	));
});

marques.forEach(input => {
	const value = parseInt(input.value);

	if ((defaultMarques & value) === value) input.checked = true;

	input.addEventListener("change", () => window.location.assign(
		"/produits?" +
		`scroll=${filtres.scrollTop}` +
		`&genres=${defaultGenres}` +
		`&promos=${defaultPromos}` +
		`&news=${defaultNews}` +
		`&prices=${defaultPrices}` +
		`&sizes=${defaultSizes}` +
		`&couleurs=${defaultColors}` +
		`&marques=${defaultMarques + value * (input.checked ? 1 : -1)}`
	));
});

promos.forEach(input => {
	const value = parseInt(input.value);

	if ((defaultPromos & value) === value) input.checked = true;

	input.addEventListener("change", () => window.location.assign(
		"/produits?" +
		`scroll=${filtres.scrollTop}` +
		`&genres=${defaultGenres}` +
		`&marques=${defaultMarques}` +
		`&news=${defaultNews}` +
		`&prices=${defaultPrices}` +
		`&sizes=${defaultSizes}` +
		`&couleurs=${defaultColors}` +
		`&promos=${defaultPromos + value * (input.checked ? 1 : -1)}`
	));
});

news.forEach(input => {
	const value = parseInt(input.value);

	if ((defaultNews & value) === value) input.checked = true;

	input.addEventListener("change", () => window.location.assign(
		"/produits?" +
		`scroll=${filtres.scrollTop}` +
		`&genres=${defaultGenres}` +
		`&marques=${defaultMarques}` +
		`&promos=${defaultPromos}` +
		`&prices=${defaultPrices}` +
		`&sizes=${defaultSizes}` +
		`&couleurs=${defaultColors}` +
		`&news=${defaultNews + value * (input.checked ? 1 : -1)}`
	));
});

prices.forEach(input => {
	const value = input.value;	

	if (defaultPrices.includes(value)) input.checked = true;

	input.addEventListener("change", () => {
		if (input.checked) defaultPrices.push(value);
		else defaultPrices.splice(defaultPrices.indexOf(value), 1);

		window.location.assign(
			"/produits?" +
			`scroll=${filtres.scrollTop}` +
			`&genres=${defaultGenres}` +
			`&marques=${defaultMarques}` +
			`&promos=${defaultPromos}` +
			`&news=${defaultNews}` +
			`&sizes=${defaultSizes}` +
			`&couleurs=${defaultColors}` +
			`&prices=${defaultPrices.join(",")}`
		);
	});
});

sizes.forEach(input => {
	const value = input.value;	

	if (defaultSizes.includes(value)) input.checked = true;

	input.addEventListener("change", () => {
		if (input.checked) defaultSizes.push(value);
		else defaultSizes.splice(defaultSizes.indexOf(value), 1);

		window.location.assign(
			"/produits?" +
			`scroll=${filtres.scrollTop}` +
			`&genres=${defaultGenres}` +
			`&marques=${defaultMarques}` + 
			`&promos=${defaultPromos}` + 
			`&news=${defaultNews}` + 
			`&prices=${defaultPrices}` +
			`&couleurs=${defaultColors}` +
			`&sizes=${defaultSizes.join(",")}`
		);
	});
});

colors.forEach(input => {
	const value = parseInt(input.value);

	if ((defaultColors & value) === value) input.checked = true;

	input.addEventListener("change", () => window.location.assign(
		"/produits?" +
		`scroll=${filtres.scrollTop}` +
		`&genres=${defaultGenres}` +
		`&marques=${defaultMarques}` +
		`&promos=${defaultPromos}` +
		`&news=${defaultNews}` +
		`&prices=${defaultPrices}` +
		`&sizes=${defaultSizes}` +
		`&couleurs=${defaultColors + value * (input.checked ? 1 : -1)}`
	));
});