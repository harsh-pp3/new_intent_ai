const API_URL = 'http://localhost:1337/api';
const STRAPI_URL = 'http://localhost:1337';

export const fetchHeroSection = async () => {
  const response = await fetch(`${API_URL}/hero-section?populate=*`);
  return response.json();
};

export const fetchAboutUs = async () => {
  try {
    const response = await fetch(`${API_URL}/about-us?populate=*`);
    return response.json();
  } catch (error) {
    return { data: null };
  }
};

export const fetchSolutions = async () => {
  try {
    const response = await fetch(`${API_URL}/solution?populate=*`);
    return response.json();
  } catch (error) {
    return { data: null };
  }
};

export const fetchUnlockPotential = async () => {
  try {
    const response = await fetch(`${API_URL}/unlock-potential?populate=*`);
    return response.json();
  } catch (error) {
    return { data: null };
  }
};