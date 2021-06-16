import * as Yup from 'yup';

export const formValues = {
  assetName: '',
  category: '',
};

export const getValuesToEdit = asset => {
  return {
    assetName: asset.assetName,
    category: asset.category,
  };
};

export const validation = () =>
  Yup.object({
    assetName: Yup.string().required('This field is required'),
    category: Yup.string().required('This field isrequired'),
  });
