function copyReview(id, button) {
    const text = document.getElementById(id).innerText;
    
    // Adding 5 stars automatically to the clipboard even if they aren't shown on screen
    const textWithStars = text + " ⭐⭐⭐⭐⭐";

    navigator.clipboard.writeText(textWithStars).then(function() {
        const originalText = button.innerText;
        button.innerText = "✓ Review Copied!";
        button.classList.add('copied');
        
        alert("Review copied to clipboard! \n\nNow click 'Post on Google Maps' and paste it there.");

        setTimeout(function() {
            button.innerText = originalText;
            button.classList.remove('copied and Paste');
        }, 2000);
    });
}