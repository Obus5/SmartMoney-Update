const supabaseUrl = "https://pcoqvvqrlswlstjtpvmz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjb3F2dnFybHN3bHN0anRwdm16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwOTY2MzIsImV4cCI6MjA5NjY3MjYzMn0.7Btd0Nm4y-yFTSVIQ2UCYHN-fPnQmdsmVA2p4bMegaQ";

const supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey
);