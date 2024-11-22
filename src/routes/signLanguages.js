const {
  getSignLanguages,
  getSignLanguages,
  updateSignLanguages,
  deleteSignLnguages,
  getAllSignLanguages,
} = require("../handler/signLanguages");

const signLanguagesRoutes = [
  {
    methode: "POST",
    path: "/sign-language",
    handler: createSignLanguages,
  },
  {
    mathode: "GET",
    path: "/sign-language",
    handler: getAllSignLanguages,
  },
  {
    methode: "GET",
    path: "/sign-language",
    handler: getSignLanguages,
  },
  {
    methode: "PUT",
    path: "/sign-language/{id}",
    handler: updateSignLanguages,
  },
  {
    methode: "DELETE",
    path: "/sign-language/{id}",
    handler: deleteSignLnguages,
  },
];

module.exports = { signLanguagesRoutes };
