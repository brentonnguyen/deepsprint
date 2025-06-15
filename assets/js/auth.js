/* Javascript File for the Authentication Page
*
* This file serves to:
* 1. Initialize the Supabase client
* 2. Other miscellaneous javascript functions
*/


// Initialize the Supabase client
const supabaseUrl = 'https://azqxilpsuxqoppbttbka.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6cXhpbHBzdXhxb3BwYnR0YmthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3Mjg2MDQsImV4cCI6MjA2NDMwNDYwNH0.aiCgByssEDfYt2wwcomzMB436hpD3sH9QCnQACdfojk'

// Create Supabase client
let client;

// Wait for DOM and Supabase to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Check if Supabase is loaded
    if (typeof supabase !== 'undefined') {
        console.log('Supabase library loaded successfully');
        // Initialize client
        client = supabase.createClient(supabaseUrl, supabaseKey);
        
        console.log('Looking for button...');
        const googleButton = document.getElementById('google-sign-in')
        if (googleButton) {
            console.log('Found Google Sign-in button, adding click handler');
            googleButton.addEventListener('click', handleSignInWithGoogle)
        } else {
            console.error('Google Sign-in button not found in the page!');
        }
    } else {
        console.error('Supabase library not loaded! Please check your internet connection and try again.');
    }
})

async function handleSignInWithGoogle() {
    if (!client) {
        console.error('Supabase client not initialized');
        alert('Error: Authentication service not ready. Please refresh the page and try again.');
        return;
    }

    console.log('Google Sign-in button clicked');
    try {
        console.log('Initiating Supabase OAuth...');
        const { data, error } = await client.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: window.location.origin + '/home.html'
            }
        })

        if (error) {
            console.error('Supabase OAuth Error:', error.message)
            alert('Failed to sign in with Google: ' + error.message)
            return
        }

        console.log('OAuth initiated successfully');
        // If successful, the page will automatically redirect

    } catch (error) {
        console.error('Unexpected error during sign in:', error)
        alert('An unexpected error occurred. Please try again.')
    }
}