import axios from "axios";
import { johnDoe, serviceUrl } from "../fixtures.js";

export const poiService = {
  poiUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.poiUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.poiUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    const res = await axios.get(`${this.poiUrl}/api/users`);
    return res.data;
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.poiUrl}/api/users`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(`${this.poiUrl}/api/users/authenticate`, user);
    axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common["Authorization"] = "";
  },

  //Pin API
  async createPin(pin) {
    const res = await axios.post(`${this.poiUrl}/api/pins`, pin);
    return res.data;
  },

  async getPin(id) {
    const res = await axios.get(`${this.poiUrl}/api/pins/${id}`);
    return res.data;
  },

  async getAllPins() {
    const res = await axios.get(`${this.poiUrl}/api/pins`);
    return res.data;
  },

  async deleteAllPins() {
    const res = await axios.delete(`${this.poiUrl}/api/pins`);
    return res.data;
  },

  async deletePin(id) {
    const response = await axios.delete(`${this.poiUrl}/api/pins/${id}`);
    return response;
  },

  async uploadImage(image) {
    const res = await axios.post(`${this.poiUrl}/api/pins/${id}/uploadimage`, image);
    return res.data;
  },

  async updatePin(id, update) {
    const res = await axios.patch(`${this.poiUrl}/api/pins/${id}/updatepin`, update);
    return res.data;
  },

  async pinUpdate(id, update) {
    const res = await axios.patch(`${this.poiUrl}/api/pins/${id}/pinupdate`, update);
    return res.data;
  },

  //Category API
  async createCategory(id, category) {
    const res = await axios.post(`${this.poiUrl}/api/pins/${id}/categories`, category);
    return res.data;
  },
  
  async getCategory(id) {
    const res = await axios.get(`${this.poiUrl}/api/categories/${id}`);
    return res.data;
  },
  
  async getAllCategories() {
    const res = await axios.get(`${this.poiUrl}/api/categories`);
    return res.data;
  },

  async deleteCategory(id) {
    const res = await axios.delete(`${this.poiUrl}/api/categories/${id}`);
    return res.data;
  },
  
  async deleteAllCategories() {
    const res = await axios.delete(`${this.poiUrl}/api/categories`);
    return res.data;
  },
    
};
