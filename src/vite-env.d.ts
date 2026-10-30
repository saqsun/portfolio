/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PRODUCTION_URL: string;
  readonly VITE_TITLE: string;
  readonly VITE_DESCRIPTION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
