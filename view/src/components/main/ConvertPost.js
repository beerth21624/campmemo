// export const ConvertPost = (jsonPost) => {
//   //   const opjPost = JSON.parse(jsonPost.data);
//   const html = '';
//   console.log(jsonPost);

//   jsonPost.data.forEach((block, index) => {
//     switch (block['type']) {
//       case 'paragraph':
//         html += '<p>' + block['data']['text'] + '</p>';
//         break;

//       case 'header':
//         html +=
//           '<h' +
//           block['data']['level'] +
//           '>' +
//           block['data']['text'] +
//           '</h' +
//           block['data']['level'] +
//           '>';
//         break;

//       case 'raw':
//         html += block['data']['html'];
//         break;

//       case 'list':
//         lsType = block['data']['style'] == 'ordered' ? 'ol' : 'ul';
//         html += '<' + lsType + '>';
//         block['data']['items'].forEach(function (item, index) {
//           html += '<li>' + item + '</li>';
//         });
//         html += '</' + lsType + '>';
//         break;

//       case 'code':
//         html +=
//           '<pre><code class="language-' +
//           block['data']['lang'] +
//           '">' +
//           block['data']['code'] +
//           '</code></pre>';
//         break;

//       case 'image':
//         html +=
//           '<div class="img_pnl"><img src="' +
//           block['data']['file']['url'] +
//           '" /></div>';
//         break;

//       default:
//         break;
//     }
//   });
// };
