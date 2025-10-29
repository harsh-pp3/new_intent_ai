const API_URL = 'http://localhost:1337/api';

export const fetchHeroSection = async () => {
  const response = await fetch(`${API_URL}/hero-section?populate=*`);
  return response.json();
};

export const fetchAboutUs = async () => {
  const response = await fetch(`${API_URL}/about-us?populate=*`);
  return response.json();
};

export const fetchSolutions = async () => {
  const response = await fetch(`${API_URL}/solution?populate=*`);
  return response.json();
};

export const fetchUnlockPotential = async () => {
  const response = await fetch(`${API_URL}/unlock-potential?populate=*`);
  return response.json();
};