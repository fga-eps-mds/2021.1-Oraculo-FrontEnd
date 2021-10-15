const { PROD, PROFILE_BASE_URL, RECORDS_BASE_URL, TAGS_BASE_URL } = process.env;

let BaseUrlProfile = "";
let BaseUrlProcess = "";
let BaseUrlTags = "";

if (PROD !== "true") {
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
  BaseUrlProfile = `${PROFILE_BASE_URL}`;
  BaseUrlProcess = `${RECORDS_BASE_URL}`;
  BaseUrlTags = `${TAGS_BASE_URL}`;
}

export { BaseUrlProfile, BaseUrlProcess, BaseUrlTags };
