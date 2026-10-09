export const sanitizeNumber = (value = '') => String(value).replace(/\s+/g, '').replace(/[^\d]/g, '');

export const getWhatsAppLink = (number, message = '') => {
  const cleanedNumber = sanitizeNumber(number);

  if (!cleanedNumber) {
    return null;
  }

  return `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(message)}`;
};

export const openWhatsApp = (number, message = '') => {
  const link = getWhatsAppLink(number, message);

  if (!link) {
    return false;
  }

  window.open(link, '_blank', 'noopener,noreferrer');
  return true;
};
