import React, { useEffect } from 'react';
 
function NewApp() {
  useEffect(() => {
    // Extract the token from the URL
    const urlParams = new URLSearchParams(window.location.hash.slice(1));
    const token = urlParams.get('id_token');
 
    if (token) {
   
      // Store the token in an HTTP cookie
      document.cookie = `token=${token}; path=/; secure; samesite=strict`;
 
    } else {
      console.error("Token not found in URL.");
    }
  }, []);
 
  return (
<div>
<h1>Welcome to Saabiq Shop!</h1>
</div>
  );
}
 
export default NewApp;