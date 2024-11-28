document.getElementById("process-btn").addEventListener("click", async () => {
  const videoUrl = document.getElementById("video-url").value;
  const fileUpload = document.getElementById("file-upload").files[0];

  const formData = new FormData();
  if (videoUrl) formData.append("url", videoUrl);
  if (fileUpload) formData.append("file", fileUpload);

  const response = await fetch("https://api.assemblyai.com/v2/transcript", {
    method: "POST",
    headers: { "Authorization": "your-api-key" },
    body: formData,
  });

  const result = await response.json();
  document.getElementById("summary").innerText = result.text; // Process the text into bullet points
  document.getElementById("output-section").style.display = "block";
});