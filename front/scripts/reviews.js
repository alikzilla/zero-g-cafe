// Function to fetch Google Sheet data
async function fetchGoogleSheetReviews() {
  // Replace with your published Google Sheet URL
  const sheetUrl =
    "https://docs.google.com/spreadsheets/d/1q_QNU3oXwklx2k-4gRHYMy9voPZQMnKw2QIFLickUGw/gviz/tq?tqx=out:json";

  try {
    const response = await fetch(sheetUrl);
    const data = await response.text();

    // Clean up the Google Sheets response
    const jsonData = JSON.parse(data.substring(47).slice(0, -2));

    // Transform the sheet data into reviews
    const reviews = transformSheetToReviews(jsonData.table);

    // Display the reviews
    displayReviews(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    // Fallback to sample reviews if there's an error
    displayReviews(getSampleReviews());
  }
}

// Function to transform Google Sheet data to review objects
function transformSheetToReviews(sheetData) {
  const rows = sheetData.rows;
  const cols = sheetData.cols.map((col) => col.label);

  return rows.map((row) => {
    const review = {};
    row.c.forEach((cell, index) => {
      if (cell) {
        review[cols[index]] = cell.v;
      }
    });
    return createReviewFromSurvey(review);
  });
}

// Function to create a review object from survey data
function createReviewFromSurvey(survey) {
  console.log(survey);

  // Determine rating based on feedback (simple example)
  const feedback = survey["What did you like or dislike about them?"] || "";
  const rating = feedback.toLowerCase().includes("dislike") ? 3 : 5;

  // Generate review text from survey responses
  const attractions =
    survey["What would attract you to visit a space-themed café?"] ||
    "the space theme";
  const events =
    survey["What kind of space-themed events would you enjoy?"] ||
    "astronomy events";

  return {
    name: `${survey["What is your first name?"] || "Anonymous"} ${
      survey["What is your surname?"] || ""
    }`.trim(),
    avatar: getRandomAvatar(survey["What is your gender?"]),
    rating: rating,
    text: `As a ${
      survey["What is your occupation?"] || "visitor"
    }, I'm interested in ${attractions}. 
            I'd particularly enjoy ${events}. ${
      feedback || "The concept seems very innovative!"
    }`,
    date: new Date(...survey.Timestamp.match(/\d+/g).map(Number))
      .toISOString()
      .slice(0, 10),
    demographics: {
      age: survey["What is your age group?"],
      occupation: survey["What is your occupation?"],
      location: survey["Where do you live?"],
    },
  };
}

// Helper function to get random avatar based on gender
function getRandomAvatar(gender) {
  const genderCode = (gender || "").toLowerCase().includes("female")
    ? "women"
    : "men";
  return `https://randomuser.me/api/portraits/${genderCode}/${Math.floor(
    Math.random() * 100
  )}.jpg`;
}

// Helper function to format date
function formatDate(dateString) {
  if (!dateString) return "Recently";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Function to display reviews
function displayReviews(reviews) {
  const reviewsContainer = document.querySelector(".reviews-container");
  reviewsContainer.innerHTML = ""; // Clear existing reviews

  reviews.forEach((review) => {
    const reviewCard = document.createElement("div");
    reviewCard.className = "review-card";

    let stars = "";
    for (let i = 0; i < 5; i++) {
      stars +=
        i < review.rating
          ? '<i class="fas fa-star"></i>'
          : '<i class="far fa-star"></i>';
    }

    reviewCard.innerHTML = `
                <div class="review-header">
                  <div class="review-avatar">
                    <img src="${review.avatar}" alt="${review.name}">
                  </div>
                  <div class="review-info">
                    <h4>${review.name}</h4>
                    <div class="stars">${stars}</div>
                  </div>
                </div>
                <div class="review-text">${review.text}</div>
                <div class="review-date">${review.date}</div>
              `;

    reviewsContainer.appendChild(reviewCard);
  });
}

// Fallback sample reviews
function getSampleReviews() {
  return [
    {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "Absolutely out of this world! The VR experience while dining was something I'll never forget.",
      date: "2 days ago",
    },
    {
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      text: "Incredible atmosphere and innovative menu. The Cosmic Crunch dessert was a showstopper!",
      date: "1 week ago",
    },
  ];
}

fetchGoogleSheetReviews();
