export const errorHandler = (error: any) => {
    console.error(error.message);
    return { error: 'Internal Server Error' };
  };
  