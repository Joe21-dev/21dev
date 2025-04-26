// Create and inject the loader HTML
const loaderHTML = `
  <div id="loading-screen" style="display: none;">
    <div class="loader-logo">
            <a href="index.html"><img src="images/logo.png" alt="logo" width="100px"></a>
    </div>
    <div class="loader"></div>
    <p>Loading...</p>
  </div>
`;

document.body.insertAdjacentHTML('beforeend', loaderHTML);

// Inject loader CSS styles
const style = document.createElement('style');
style.innerHTML = `
  #loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #11121a;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
  }

  .loader {
    border: 10px solid #c9c9c9;
    border-top: 10px solid #0071FF;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;
  }
  .loader-logo img{
    margin-bottom: 15px;
    text-decoration: none;
    padding-top: 10px;
    color: var(--text-color);
  }
 

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
document.head.appendChild(style);

// Reusable redirect function
function redirectWithLoading(targetPage, delay = 2000) {
  const loader = document.getElementById("loading-screen");
  if (loader) loader.style.display = "flex";
  setTimeout(() => {
    window.location.href = targetPage;
  }, delay);
}
