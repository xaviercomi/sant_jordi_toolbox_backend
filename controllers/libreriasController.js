import axios from "axios";

export const getLibrerias = async (req, res) => {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ error: "Faltan coordenadas lat/lng" });
  }

  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
      {
        params: {
          location: `${lat},${lng}`,
          radius: 6000,
          keyword: "bookstore",
          key: process.env.GOOGLE_MAPS_API_KEY,
        },
      }
    );

    const librerias = response.data.results.map((place) => ({
      id: place.place_id,
      name: place.name,
      latitude: place.geometry.location.lat,
      longitude: place.geometry.location.lng,
    }));

    res.json(librerias);
  } catch (error) {
    console.error("Error al consultar Google Places:", error.message);
    res.status(500).json({ error: "Error al obtener lliberies" });
  }
};
