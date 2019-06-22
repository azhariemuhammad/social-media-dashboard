import createRestApiClient from '../utils/createRestApiClient';

const apiEndpoint = "https://jsonplaceholder.typicode.com/"

export default () => {
    const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
    return {
        getAllUsers: () => client.request({
          method: 'GET',
          url: '/users'
        }),
        getPostsByUserId: (userId) => client.request({
            method: 'GET',
            url: `/posts?userId=${userId}`
        }),
        // createSomething: ({ name }) => client.request({
        //   method: 'POST',
        //   url: `/somthing`,
        //   data: {
        //     name
        //   }
        // })
    };
};
