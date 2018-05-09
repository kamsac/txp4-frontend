export const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyLCJsb2dpbiI6Imx5bWFrIiwibmljayI6IiRzJG8kYTYwbCRjODJ5JGZhM20kYzgyYSRhNjBrIn0.aaKzXEZP2tovhBAqPJYBdmbLzKjfdBsuX3FaB58JZvE';

const AuthResourceMock = {
  login() {
    return new Promise((resolve) => {
      const response = {
        data: {
          token: ACCESS_TOKEN,
        },
      };
      setTimeout(() => resolve(response), 100);
    });
  },
};

export default AuthResourceMock;
