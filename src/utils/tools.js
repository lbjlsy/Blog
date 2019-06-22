import { toast } from 'react-toastify';

export const formatJSONDate = (jsonDate) => new Date(+new Date(new Date(jsonDate).toJSON()) + 8 * 3600 * 1000).toISOString()
  .replace(/T/g, ' ')
  .replace(/\.[\d]{3}Z/, '');

export const message = (text) => {
  return toast.error(`🦄 ${text}`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}