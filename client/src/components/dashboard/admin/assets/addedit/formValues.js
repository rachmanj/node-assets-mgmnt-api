import * as Yup from 'yup';

export const formValues = {
  assetName: '',
  category: '',
};

export const validation = () => {
  Yup.object({
    assetName: Yup.string().required('The field is required'),
    category: Yup.string(),
  });
};
