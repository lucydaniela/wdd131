// Product Array
const products = [
    { id: "p1", name: "Product A" },
    { id: "p2", name: "Product B" },
    { id: "p3", name: "Product C" },
  ];
  
  // Populate Product Dropdown
  const productDropdown = document.getElementById("product-name");
  
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productDropdown.appendChild(option);
  });
  
  // LocalStorage Counter for Reviews
  window.onload = () => {
    const reviewsCount = localStorage.getItem("reviewsCount") || 0;
    localStorage.setItem("reviewsCount", parseInt(reviewsCount, 10) + 1);
  };
  