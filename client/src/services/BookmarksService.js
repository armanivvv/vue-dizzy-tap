import Api from '@/services/Api';

export default {
  index(bookmark) {
    return Api().get('bookmarks', {
      params: bookmark,
    });
  },
  post(bookmark) {
    return Api().post('bookmarks', bookmark);
  },
  delete(bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`);
  },
};

// import Api from '@/services/Api';

// export default {
//   index(params) {
//     return Api().get('bookmarks', {
//       params,
//     });
//   },
//   post(params) {
//     return Api().post('bookmarks', {
//       params,
//     });
//   },
//   delete(bookmarkId) {
//     return Api().delete(`bookmarks/${bookmarkId}`);
//   },
// };
