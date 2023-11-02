// same as screen 1
document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  prevButton.addEventListener('click', () => {
      alert('Going to previous song!');
  });

  nextButton.addEventListener('click', () => {
      alert('Going to next song!');
  });

});


//same as screen 2
// REMOVING a song:
document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners to all delete buttons
  var deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach(function (button) {
      button.addEventListener('click', function () {
          // Get the row that contains the clicked button
          var row = this.closest('tr');
          
          // Remove the row from the table
          row.parentNode.removeChild(row);
      });
  });
});

// ADDING A SONG
document.addEventListener("DOMContentLoaded", function () {
  const addButtons = document.querySelectorAll('.add-button');
  const playlistModal = document.getElementById('playlist-modal');
  const playlistOptions = document.getElementById('playlist-options');
  const cancelButton = document.getElementById('cancelButton');

  // Define your playlists
  const playlists = [
      { title: "Trance", image: "playlist1.jpg" },
      { title: "Blade Techno", image: "playlist2.jpg" },
      { title: "House", image: "playlist3.jpg" }
  ];

  // Add event listeners to all Add buttons
  addButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          // Clear previous options
          playlistOptions.innerHTML = '';

          // Populate the modal with playlist options
          playlists.forEach((playlist, i) => {
              const option = document.createElement('div');
              option.classList.add('playlist-option');
              option.innerHTML = `
                  <button onclick="addToPlaylist(${index}, ${i})">${playlist.title}</button>
              `;
              playlistOptions.appendChild(option);
          });

          // Display the modal
          playlistModal.style.display = 'block';
      });
  });

  // Add event listener to Cancel button
  cancelButton.addEventListener('click', () => {
      // Hide the modal
      playlistModal.style.display = 'none';
  });
});

// Function to handle adding to playlist
function addToPlaylist(songIndex, playlistIndex) {
  // Implement the logic to add the song to the selected playlist
  // You can access the song and playlist using the provided indices
  console.log('Adding song', songIndex, 'to playlist', playlistIndex);

  // Hide the modal
  document.getElementById('playlist-modal').style.display = 'none';
}