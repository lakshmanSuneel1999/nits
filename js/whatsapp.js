const WHATSAPP_NUMBER = '919490009803'; // write ONCE

function buyNow(button) {
  const productCode = button.dataset.code;
  const productName = button.dataset.name || '';

  let message =
`Hello,
I am interested in purchasing the following product.
Product Code: ${productCode}`;

  if (productName) {
    message += `\nProduct Name: ${productName}`;
  }

  message += `\nPlease share price and availability.`;

  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');
}
