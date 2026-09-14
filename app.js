const SUPABASE_URL = "https://humyvidrlzhdqoemqflx.supabase.co";
const SUPABASE_KEY = "PASTE_YOUR_PUBLISHABLE_KEY_HERE";

const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
script.onload = () => {
  window.supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );
  console.log("RESHock connected to Supabase!");
};
document.head.appendChild(script);
PASTE_YOUR_PUBLISHABLE_KEY_HERE
