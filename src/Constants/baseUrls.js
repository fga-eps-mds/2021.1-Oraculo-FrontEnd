require("dotenv").config();
const {
  REACT_APP_PROD,
  REACT_APP_PROFILE_BASE_URL,
  REACT_APP_RECORDS_BASE_URL,
  REACT_APP_TAGS_BASE_URL,
} = process.env;

let BaseUrlProfile = "";
let BaseUrlProcess = "";
let BaseUrlTags = "";

if (REACT_APP_PROD !== "true") {
  /**
   * Estamos no ambiente de desevolvimento (local), portanto
   * não é necessário apontar para endereços externos
   */
  BaseUrlProfile = "http://localhost:8000";
  BaseUrlProcess = "http://localhost:8001";
  BaseUrlTags = "http://localhost:8002";
} else {
  /**
   * Estamos no ambiente de produção, portanto devemos pegar
   * as variáveis de ambiente definidas durante o deploy
   */
  BaseUrlProfile = `${REACT_APP_PROFILE_BASE_URL}`;
  BaseUrlProcess = `${REACT_APP_RECORDS_BASE_URL}`;
  BaseUrlTags = `${REACT_APP_TAGS_BASE_URL}`;
}

export { BaseUrlProfile, BaseUrlProcess, BaseUrlTags };
