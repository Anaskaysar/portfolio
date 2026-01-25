export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";
export const MEDIA_BASE_URL = import.meta.env.VITE_MEDIA_URL || "http://127.0.0.1:8000";

export const getProjects = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/projects/`);
        if (!response.ok) {
            throw new Error("Failed to fetch projects");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching projects:", error);
        return null;
    }
};