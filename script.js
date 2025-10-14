function display(sectionId) {
  // Hide all sections inside Projects
  document.querySelectorAll('#Projects > div').forEach(div => {
    if (div.id.startsWith('section')) {
      div.style.display = 'none';
    }
  });

  // Hide project thumbnails if viewing a section
  const projectList = document.getElementById('projectList');
  if (sectionId === 'Projects') {
    projectList.style.display = 'flex';
  } else {
    projectList.style.display = 'none';
  }

  // Pause all videos
  document.querySelectorAll('#Projects video').forEach(video => video.pause());

  // Show selected section
  const section = document.getElementById(sectionId);
  if (section) section.style.display = 'block';
}