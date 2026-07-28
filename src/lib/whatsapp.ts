export const WHATSAPP_NUMBER = '5511940000000';

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
