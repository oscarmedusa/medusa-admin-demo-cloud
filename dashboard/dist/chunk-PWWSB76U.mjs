// src/lib/client/client.ts
import Medusa from "@medusajs/js-sdk";
var backendUrl = __BACKEND_URL__ ?? "http://localhost:9000";
var sdk = new Medusa({
  baseUrl: backendUrl,
  auth: {
    type: "session"
  }
});
if (typeof window !== "undefined") {
  ;
  window.__sdk = sdk;
}

export {
  sdk
};
