export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";
export const MEDIA_BASE_URL = import.meta.env.VITE_MEDIA_URL || "http://127.0.0.1:8000";

// Generic API helper
const apiRequest = async (endpoint, options = {}) => {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.statusText}`);
        }

        const text = await response.text();
        if (!text) return null;

        try {
            return JSON.parse(text);
        } catch (error) {
            console.error(`Error parsing JSON from ${endpoint}:`, error);
            return null;
        }
    } catch (error) {
        console.error(`Error with API request to ${endpoint}:`, error);
        if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
            console.error("TIP: Is your backend server running? Try running './run.sh' from the project root.");
        }
        throw error;
    }
};

// Projects API
export const getProjects = () => apiRequest('/projects/');
export const getProject = (id) => apiRequest(`/projects/${id}/`);
export const createProject = (data) => apiRequest('/projects/', { method: 'POST', body: JSON.stringify(data) });
export const updateProject = (id, data) => apiRequest(`/projects/${id}/`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteProject = (id) => apiRequest(`/projects/${id}/`, { method: 'DELETE' });

// Work Experience API
export const getExperiences = () => apiRequest('/experiences/');
export const getExperience = (id) => apiRequest(`/experiences/${id}/`);
export const createExperience = (data) => apiRequest('/experiences/', { method: 'POST', body: JSON.stringify(data) });
export const updateExperience = (id, data) => apiRequest(`/experiences/${id}/`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteExperience = (id) => apiRequest(`/experiences/${id}/`, { method: 'DELETE' });

// Skills API
export const getSkills = () => apiRequest('/skills/');
export const getSkill = (id) => apiRequest(`/skills/${id}/`);
export const createSkill = (data) => apiRequest('/skills/', { method: 'POST', body: JSON.stringify(data) });
export const updateSkill = (id, data) => apiRequest(`/skills/${id}/`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteSkill = (id) => apiRequest(`/skills/${id}/`, { method: 'DELETE' });

// Research API
export const getResearch = () => apiRequest('/research/');
export const getResearchItem = (id) => apiRequest(`/research/${id}/`);
export const createResearch = (data) => apiRequest('/research/', { method: 'POST', body: JSON.stringify(data) });
export const updateResearch = (id, data) => apiRequest(`/research/${id}/`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteResearch = (id) => apiRequest(`/research/${id}/`, { method: 'DELETE' });

// Timeline Updates API
export const getTimelineUpdates = () => apiRequest('/timeline/');
export const getTimelineUpdate = (id) => apiRequest(`/timeline/${id}/`);
export const createTimelineUpdate = (data) => apiRequest('/timeline/', { method: 'POST', body: JSON.stringify(data) });
export const updateTimelineUpdate = (id, data) => apiRequest(`/timeline/${id}/`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteTimelineUpdate = (id) => apiRequest(`/timeline/${id}/`, { method: 'DELETE' });

// Personal Info API
export const getPersonalInfo = () => apiRequest('/personal-info/current/');
export const updatePersonalInfo = (id, data) => apiRequest(`/personal-info/${id}/`, { method: 'PUT', body: JSON.stringify(data) });