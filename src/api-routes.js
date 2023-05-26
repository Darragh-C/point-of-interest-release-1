import { userApi } from "./api/user-api.js";
import { pinApi } from "./api/pin-api.js";
import { categoryApi } from "./api/category-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },

  { method: "GET", path: "/api/pins", config: pinApi.find },
  { method: "POST", path: "/api/pins", config: pinApi.create },
  { method: "DELETE", path: "/api/pins", config: pinApi.deleteAll },
  { method: "GET", path: "/api/pins/{id}", config: pinApi.findOne }, 
  { method: "DELETE", path: "/api/pins/{id}", config: pinApi.deleteOne },
  { method: "POST", path: "/api/pins/{id}/uploadimage", config: pinApi.uploadImage },
  { method: "PATCH", path: "/api/pins/{id}/updatepin", config: pinApi.updatePin },
  { method: "POST", path: "/api/pins/{id}/pinupdate", config: pinApi.pinUpdate },
  { method: "PUT", path: "/api/pins/{id}/removeimage", config: pinApi.removeImage },

  { method: "GET", path: "/api/categories", config: categoryApi.find },
  { method: "POST", path: "/api/pins/{id}/categories", config: categoryApi.create },
  { method: "DELETE", path: "/api/categories", config: categoryApi.deleteAll },
  { method: "GET", path: "/api/categories/{id}", config: categoryApi.findOne }, 
  { method: "DELETE", path: "/api/categories/{id}", config: categoryApi.deleteOne },

  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },
];
