document.addEventListener("DOMContentLoaded", function() {
  let routeSelector = document.getElementById("route-selector");
  let output = document.getElementById("output");

  routeSelector.addEventListener("change", function (e){
      let selectedOption = e.target.value;
    //   console.log(output)
      // Hide all blocks
      output.querySelectorAll('div').forEach(function(block) {
        console.log(block)
          block.style.display = 'none';
      });

      // Show the selected block based on the option
      if (selectedOption === 'okv') {
          document.querySelector('.output .block1').style.display = 'block';
      } else if (selectedOption === 'osip') {
          document.querySelector('.output .block2').style.display = 'block';
      }
  });
});
