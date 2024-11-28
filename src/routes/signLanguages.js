const {
  createSignLanguages,
  getAllSignLanguages,
  getSignLanguages,
  updateSignLanguages,
  deleteSignLnguages,
  detectSignLanguage,
} = require("../handler/signLanguages");

const signLanguagesRoutes = [
  {
    method: "POST",
    path: "/sign-language",
    handler: createSignLanguages,
  },
  {
    method: "GET",
    path: "/all-sign-language",
    handler: getAllSignLanguages,
  },
  {
    method: "GET",
    path: "/sign-language",
    handler: getSignLanguages,
  },
  {
    method: "PUT",
    path: "/sign-language/{id}",
    handler: updateSignLanguages,
  },
  {
    method: "DELETE",
    path: "/sign-language/{id}",
    handler: deleteSignLnguages,
  },
  {
    method: "POST",
    path: "/detect-sign",
    options: {
      payload: {
        maxBytes: 2097152, // 2MB batas maksimal ukuran file
        output: "stream", // Untuk menangani file upload sebagai stream
        parse: true,
        allow: "multipart/form-data", // Untuk mendukung form dengan file upload
      },
    },
    handler: detectSignLanguage,
  },
];

module.exports = { signLanguagesRoutes };
