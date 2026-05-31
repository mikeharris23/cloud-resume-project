const apiUrl = "https://had83mptw5.execute-api.us-east-1.amazonaws.com";

async function updateVisitorCount() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    document.getElementById("visitor-count").innerText = data.views;
  } catch (error) {
    console.error(error);
  }
}

updateVisitorCount();
