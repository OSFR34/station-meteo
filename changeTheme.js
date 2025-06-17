document.addEventListener('DOMContentLoaded', function () {
      const select = document.querySelector('.version-select');
      const styleLink = document.getElementById('theme-style');
      select.addEventListener('change', function () {
        if (select.value === "0") {
          styleLink.href = "styleV1.css";
        } else if (select.value === "1") {
          styleLink.href = "styleV2.css";
        }
      });
    });