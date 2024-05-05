import axiosInstance from './index';

export const postOrder = async (data: any) => {
  return await axiosInstance.post('/orders', data);
};
