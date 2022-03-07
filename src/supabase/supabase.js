import { createClient } from "@supabase/supabase-js";
import store from '../store'
//Do not forget to change the variables in .env file. Rename .env.example to .env.
const supabaseUrl = process.env.VUE_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.VUE_APP_SUPABASE_ANON_KEY;



export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const user = supabase.auth.user()
if(user){
    store.currentUser = user
}else{
    store.currentUser = null
    console.log("No user found.")
}
// supabase.auth.onAuthStateChange((event, session) => {
//
//     const user = session?.user || null;
//     // Save your user to your desired location
//     store.commit("addUniversalUser", user);
// });