
import { createClient } from "@supabase/supabase-js";

// Get environment variables or use placeholder values if they're missing
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Display console warnings if using placeholder values
// if (supabaseUrl === 'https://your-project-url.supabase.co' || supabaseKey === 'your-anon-key') {
//   console.warn('⚠️ Using placeholder Supabase credentials. Replace with your actual project credentials in the Lovable project settings.');
// }

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);

// Function to check if Supabase connection is working
export const checkSupabaseConnection = async () => {
  try {
    // Try a simple query to see if we can connect
    const { error } = await supabase.from('contact_messages').select('count', { count: 'exact' }).limit(0);
    
    if (error) {
      console.error("Supabase connection test error:", error);
      return { success: false, error };
    }
    return { success: true };
  } catch (error) {
    console.error("Supabase connection error:", error);
    return { success: false, error };
  }
};

// Function to insert a contact message
export const insertContactMessage = async (messageData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    console.log("Attempting to insert message with data:", messageData);
    
    // Check if Supabase is properly connected
    const connectionStatus = await checkSupabaseConnection();
    if (!connectionStatus.success) {
      throw new Error("Supabase connection failed: " + JSON.stringify(connectionStatus.error));
    }
    
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: messageData.name,
          email: messageData.email,
          subject: messageData.subject,
          message: messageData.message,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error("Error inserting contact message:", error);
      throw error;
    }

    console.log("Message successfully inserted:", data);
    return data;
  } catch (error) {
    console.error("Error inserting contact message:", error);
    throw error;
  }
};
