/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_PATH?: string;
  // Add other env vars your app uses, for example:
  // readonly SUPABASE_URL?: string;
  // readonly SUPABASE_ANON_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
