export const getImagen = async () => {
  try {
    const apiKey = 'LiWX0vBkAbyAkHX78VEtAJClxwtIKPwK';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    // manejo del error
    return 'Nel prro >:V';
  }
};
