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
        getAlbumsByUserId: (userId) => client.request({
            method: 'GET',
            url: `/albums?userId=${userId}`
        }),
        getPhotosByAlbumId: (albumId) => client.request({
            method: 'GET',
            url: `/photos?albumsId=${albumId}_start=0&_limit=5`
        }),
        getPostByPostId: (postId) => client.request({
            method: 'GET',
            url: `/posts/${postId}`
        }),
        getCommentsByPostId: (postId) => client.request({
            method: 'GET',
            url: `/comments?postId=${postId}`
        }),
        createPost: (dataPost) => client.request({
            method: 'POST',
            url: `/posts`,
            data: dataPost
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
