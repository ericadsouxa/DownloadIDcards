// Student database with just DOB and name
const students = {
    "30-05-2010": "ANGEL AJAY CHANDEKAR",
    "28-11-2009": "JACKSON GEOGRE HAITE",
    "15-05-2008": "RAFAY SAMEER FARID",
    "22-05-2007": "VELENTIN VICKY KAIMADAM",
    "04-11-2009": "ISHANT PRABHAKAR KHANDARE",
    "17-11-2009": "MEMON MOHAMMED",
    "14-02-2009": "AYMAN KAISAR DON",
    "01-09-2009": "JANVI PARWANI",
    "14-09-2009": "JOHN RAJWANT",
    "12-08-2008": "PRAJAKTA SONAWANE",
    "28-12-2008": "SHWETA VASANT RANJANE",
    "17-10-2007": "RUTIK MANKHUS JADHAV",
  };
  
  
  // Check if DOB exists and show the correct download link
  function checkDOB() {
    const dobInput = document.getElementById("dob").value.trim();
    const errorMessage = document.getElementById("error-message");
    const resultBox = document.getElementById("result-box");
    const downloadLinks = document.getElementById("download-links");
  
    // Reset messages and results
    errorMessage.classList.add("hidden");
    resultBox.classList.add("hidden");
    downloadLinks.classList.add("hidden");
  
    if (!dobInput) {
      errorMessage.textContent = "Please enter your Date of Birth.";
      errorMessage.classList.remove("hidden");
      return;
    }
  
    const studentName = students[dobInput];
    if (studentName) {
      // Display student name
      document.getElementById("student-name").textContent = studentName;
  
      // Show the correct download link
      const links = document.getElementById("download-links").children;
      for (let link of links) {
        link.style.display = 'none'; // Hide all links
      }
  
      // Display the matching student's download button
      if (dobInput === "30-05-2010") document.getElementById("angel-link").style.display = 'block';
      else if (dobInput === "28-11-2009") document.getElementById("jackson-link").style.display = 'block';
      else if (dobInput === "15-05-2008") document.getElementById("rafay-link").style.display = 'block';
      else if (dobInput === "22-05-2007") document.getElementById("velentin-link").style.display = 'block';
      else if (dobInput === "04-11-2009") document.getElementById("ishant-link").style.display = 'block';
      else if (dobInput === "17-11-2009") document.getElementById("memon-link").style.display = 'block';
      else if (dobInput === "14-02-2009") document.getElementById("ayman-link").style.display = 'block';
      else if (dobInput === "01-09-2009") document.getElementById("janvi-link").style.display = 'block';
      else if (dobInput === "14-09-2009") document.getElementById("john-link").style.display = 'block';
      else if (dobInput === "12-08-2008") document.getElementById("prajakta-link").style.display = 'block';
      else if (dobInput === "28-12-2008") document.getElementById("shweta-link").style.display = 'block';
      else if (dobInput === "17-10-2007") document.getElementById("rutik-link").style.display = 'block';
  
      resultBox.classList.remove("hidden");
      downloadLinks.classList.remove("hidden");
    } else {
      errorMessage.textContent = "No student found with this Date of Birth.";
      errorMessage.classList.remove("hidden");
    }
  }
  